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
<<<<<<< HEAD
      <TextInput placeholder="********" style={styles.input} secureTextEntry />
=======
      <TextInput placeholder="****" style={styles.input} secureTextEntry />
>>>>>>> 8895ce215197d984f3a7cd13d0fabf3d5c154cd0
      <TouchableOpacity style={styles.button} onPress={() => {/* Handle sign up */}}>
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

<<<<<<< HEAD
export default SignUpScreen;
=======
export default SignUpScreen;
>>>>>>> 8895ce215197d984f3a7cd13d0fabf3d5c154cd0
