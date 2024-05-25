import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RootNavigator from "./src/navigator/RootNavigator";
import 'react-native-gesture-handler';
import { useState, useEffect } from 'react';
import { FIREBASE_AUTH } from './FirebaseConfig';
import { User, onAuthStateChanged } from 'firebase/auth';
import StartNavigator from './src/navigator/StartNavigator';
import { AuthProvider } from './src/context/AuthContext';
import { UserProvider } from './src/contexts/UserContext';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './src/screens/CustomDrawerContent/DrawerContent'; // Yolu güncelledik
import CommunityNavigator from './src/navigator/CommunityNavigator';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          {user ? (
            <Stack.Screen name="Root" options={{ headerShown: false }}>
              {() => (
                <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
                  <Drawer.Screen name="Home" component={RootNavigator} />
                </Drawer.Navigator>
              )}
            </Stack.Screen>
          ) : (
            <Stack.Screen name="Login" component={StartNavigator} options={{ headerShown: false }} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
