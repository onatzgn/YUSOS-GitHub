import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { FIREBASE_AUTH, FIREBASE_DB } from '../../../FirebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
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
    if (!name || !schoolNumber || !email || !phoneNumber || !password) {
      Alert.alert('Eksik Bilgi', 'Lütfen tüm alanları doldurun.');
      return;
    }

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
      <Text style={styles.title}>Kayıt Ol</Text>
      <TextInput
        style={styles.input}
        placeholder="İsim"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Okul Numarası"
        value={schoolNumber}
        onChangeText={(text) => setSchoolNumber(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Telefon Numarası"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Şifre"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={signUp} disabled={loading}>
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Kayıt Ol</Text>
        )}
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