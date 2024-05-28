import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RootNavigator from "./src/navigator/RootNavigator";
import 'react-native-gesture-handler';
import { useState, useEffect } from 'react';
import { FIREBASE_AUTH } from './FirebaseConfig';
import { User, onAuthStateChanged } from 'firebase/auth';
import StartNavigator from './src/navigator/StartNavigator';
import { AuthProvider } from './src/context/AuthContext';
import { UserProvider } from './src/contexts/UserContext';
import CustomDrawerContent from './src/screens/CustomDrawerContent/DrawerContent'; // Yolu güncelledik

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeScreen = () => (
  <RootNavigator />
);

const LoginScreen = () => (
  <StartNavigator />
);

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
        {user ? (
          <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{ headerShown: false }} // Header'ı gizlemek için ekledik
          >
            <Drawer.Screen 
              name="Home" 
              component={HomeScreen} 
              options={{ title: 'YUSOS', headerShown: false }} // Burada başlığı YUSOS olarak ayarladık
            />
            {/* Gerekirse diğer ekranları da buraya ekleyebilirsiniz */}
          </Drawer.Navigator>
        ) : (
          <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          </Stack.Navigator>
        )}
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
