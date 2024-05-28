
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { FIREBASE_AUTH, FIREBASE_DB } from '../../../FirebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';

const SignUpScreen = () => {
  const [name, setName] = useState('');
  const [schoolNumber, setSchoolNumber] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const signUp = async () => {
    if (!name || !schoolNumber || !email || !phoneNumber || !password) {
      Alert.alert('Eksik Bilgi', 'Lütfen tüm alanları doldurun.');
      return;
    }

    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
      const userRef = collection(FIREBASE_DB, 'users');

      const userInfo = {
        name,
        schoolNumber,
        email,
        phoneNumber,
      };

      const userDocRef = await addDoc(userRef, {
        ...userInfo,
        uid: userCredential.user.uid, // Kullanıcının UID'sini saklayın
      });

      Alert.alert('Kayıt Başarılı', 'Kullanıcı kaydı başarıyla tamamlandı!');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error signing up:', error);
      Alert.alert('Kayıt Hatası', 'Kayıt işlemi sırasında bir hata oluştu.');
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
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Zaten bir hesabın var mı? Giriş Yap</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;