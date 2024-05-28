import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ActivityIndicator, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { FIREBASE_AUTH } from '../../../FirebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import SignUpScreen from '../SignUpScreen/IndexS';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      navigation.navigate('Root');
    } catch (error) {
      console.log(error);
      alert('Sign In failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log(response);
      alert('Check your emails!');
    } catch (error) {
      console.log(error);
      alert('Sign In failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSignUpPress = () => {
    navigation.navigate('SignUp'); // Navigate to SignUpScreen
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Login</Text>
      <KeyboardAvoidingView behavior="padding">
        <TextInput value={email} style={styles.input} placeholder="Email" autoCapitalize="none" onChangeText={(text) => setEmail(text)} />
        <TextInput secureTextEntry={true} value={password} style={styles.input} placeholder="Password" autoCapitalize="none" onChangeText={(text) => setPassword(text)} />

        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <>
            <TouchableOpacity style={styles.button} onPress={signIn}>
              <Text style={styles.buttonText}>Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.registerText} onPress={handleSignUpPress}>
              <Text style={styles.registerLink}>Sign Up</Text>
            </TouchableOpacity>
          </>
        )}
      </KeyboardAvoidingView>
      <Image source={require('../../../assets/logo2.png')} style={styles.smallLogo} />
    </View>
  );
};

export default LoginScreen;
