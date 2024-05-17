/*
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

function SignUpScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput placeholder="Ad Soyad" style={styles.input} />
      <TextInput placeholder="Okul Numarası" style={styles.input} keyboardType="numeric" />
      <TextInput placeholder="Mail" style={styles.input} keyboardType="email-address" />
      <TextInput placeholder="Telefon Numarası" style={styles.input} keyboardType="phone-pad" />
      <TextInput placeholder="****" style={styles.input} secureTextEntry />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('GetStarted')}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={styles.alreadyText}>Already have account?
        <Text style={styles.signInLink} onPress={() => navigation.navigate('Login')}>
          Go here
        </Text>
      </Text>
    </View>
  );
}

export default SignUpScreen;
*/
import React, { useState, useContext} from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Button, ActivityIndicator, KeyboardAvoidingView } from 'react-native';
import styles from './styles';
import { FIREBASE_AUTH } from '../../../FirebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_DB } from '../../../FirebaseConfig';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { AuthContext } from '../../context/AuthContext'; // Adjust the path accordingly


const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [schoolNumber, setSchoolNumber] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;
  const { setIsJustSignedUp } = useContext(AuthContext);

  const signUp = async () => {
    setLoading(true);
    try {
      // Firebase Authentication ile kullanıcı oluşturma
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  
      // Kullanıcı başarıyla oluşturulduysa, ek kullanıcı bilgilerini Firestore'a kaydet
      if (userCredential && userCredential.user) {
        const userRef = collection(FIREBASE_DB, 'users');
        await addDoc(userRef, {
          name: name,
          schoolNumber: schoolNumber,
          email: email,
          phoneNumber: phoneNumber,
          // İhtiyaç duyarsanız ek alanları buraya ekleyebilirsiniz
        });
        setIsJustSignedUp(true); // Set the flag
        // Kullanıcıya başarılı bir şekilde kayıt olduğu bilgisini ver ve "GetStarted" ekranına yönlendir
        console.log(userCredential);
        alert('Check your emails!');
        navigation.navigate('GetStarted');
      } else {
        throw new Error('User creation failed');
      }
    } catch (error: any) {
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
