import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen/IndexL';
import SignUpScreen from '../screens/SignUpScreen/IndexS';
import GetStartedScreen from '../screens/GetStartedScreen/IndexGS'
import RootNavigator from './RootNavigator'; // RootNavigator'ı import edin

const AuthStack = createStackNavigator();
const Stack = createStackNavigator();

function AuthStackScreens() {
    return (
      <AuthStack.Navigator screenOptions={{ headerShown: false }}>
        <AuthStack.Screen name="Login" component={LoginScreen} />
        <AuthStack.Screen name="SignUp" component={SignUpScreen} />
        <AuthStack.Screen name="GetStarted" component={GetStartedScreen} />
      </AuthStack.Navigator>
    );
  }

const StartNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Auth" component={AuthStackScreens} />
        </Stack.Navigator>
    );
};

export default StartNavigator;

