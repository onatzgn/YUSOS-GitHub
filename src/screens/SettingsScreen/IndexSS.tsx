import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FIREBASE_AUTH } from '../../../FirebaseConfig';

const SettingsScreen = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    FIREBASE_AUTH.signOut().then(() => {
      navigation.navigate('Login');
    }).catch((error) => {
      console.error(error);
      alert('Logout failed: ' + error.message);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <TouchableOpacity style={styles.button} onPress={() => alert('Language changed to English')}>
        <Text style={styles.buttonText}>English</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => alert('Language changed to Turkish')}>
        <Text style={styles.buttonText}>Türkçe</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default SettingsScreen;
