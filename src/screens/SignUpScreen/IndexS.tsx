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
