import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'; // Import createStackNavigator
import RootNavigator from "./src/navigator/RootNavigator"
import 'react-native-gesture-handler';
import { useState, useEffect } from 'react';
import { FIREBASE_AUTH } from './FirebaseConfig';
import { User, onAuthStateChanged} from 'firebase/auth';
import LoginScreen from './src/screens/LoginScreen/IndexL';
import StartNavigator from './src/navigator/StartNavigator';
import SignUpScreen from './src/screens/SignUpScreen/IndexS';
import { AuthProvider } from './src/context/AuthContext'; // Adjust the path accordingly
const Stack = createStackNavigator(); // Create Stack navigator

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
    });
  
    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);
  return (
    /*
    <View style={styles.container}>
        <HomeScreen />
    </View>
    */
    <AuthProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
      {user ? (
          <Stack.Screen name="Root" component={RootNavigator} options={{ headerShown: false }} />
        ) : (
          <Stack.Screen name="Login" component={StartNavigator} options={{ headerShown: false }} />
        )}      
        </Stack.Navigator>

    </NavigationContainer>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //marginTop: '18%',
  },


  
});
