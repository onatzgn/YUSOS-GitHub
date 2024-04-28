import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

function LoginScreen() {
  const navigation = useNavigation();

  const handleSignIn = () => {
    navigation.navigate('Main');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Login</Text>
      <TextInput placeholder="Okul Numarası" style={styles.input} keyboardType="numeric" />

      <TextInput placeholder="********" style={styles.input} secureTextEntry />

      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>
      <Text style={styles.registerText}>
        You are new?
        <Text style={styles.registerLink} onPress={() => navigation.navigate('SignUp')}>
          Create new
        </Text>
      </Text>
    </View>
  );
}

export default LoginScreen;

