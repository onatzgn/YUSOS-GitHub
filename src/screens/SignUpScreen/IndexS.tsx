import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './styles';
import { FIREBASE_AUTH } from '../../../FirebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_DB } from '../../../FirebaseConfig';
import { getFirestore, collection, setDoc, doc } from 'firebase/firestore';

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [schoolNumber, setSchoolNumber] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const signUp = async () => {
    setLoading(true);
    try {
      // Firebase Authentication ile kullanıcı oluşturma
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  
      // Kullanıcı başarıyla oluşturulduysa, ek kullanıcı bilgilerini Firestore'a kaydet
      if (userCredential && userCredential.user) {
        const userId = userCredential.user.uid;
        const userRef = doc(FIREBASE_DB, 'users', userId);
        await setDoc(userRef, {
          userId: userId,
          name: name,
          schoolNumber: schoolNumber,
          email: email,
          phoneNumber: phoneNumber,
        });
        // Kullanıcıya başarılı bir şekilde kayıt olduğu bilgisini ver ve "GetStarted" ekranına yönlendir
        console.log('User created:', userCredential.user);
        alert('Check your emails!');
        navigation.navigate('GetStarted');
      } else {
        throw new Error('User creation failed');
      }
    } catch (error) {
      console.error(error);
      alert('Sign Up failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        placeholder="Ad Soyad"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Okul Numarası"
        style={styles.input}
        keyboardType="numeric"
        value={schoolNumber}
        onChangeText={setSchoolNumber}
      />
      <TextInput
        placeholder="Mail"
        style={styles.input}
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Telefon Numarası"
        style={styles.input}
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <TextInput
        placeholder="****"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={signUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      {loading && <ActivityIndicator size="large" />}
      <Text style={styles.alreadyText}>
        Already have an account?{' '}
        <Text style={styles.signInLink} onPress={() => navigation.navigate('Login')}>
          Go here
        </Text>
      </Text>
    </View>
  );
};

export default SignUpScreen;
