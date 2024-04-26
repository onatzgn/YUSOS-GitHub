import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import { Foundation, Ionicons, FontAwesome6 } from '@expo/vector-icons';

import HomeNavigator from "./HomeNavigator";
import CommunityNavigator from "./CommunityNavigator";
import InfoNavigator from "./InfoNavigator";
import ProfileNavigator from "./ProfileNavigator";
import LoginScreen from '../screens/LoginScreen/IndexL';
import SignUpScreen from '../screens/SignUpScreen/IndexS';
import CustomTabBarButton from './CustomTabBarButton';
import HealthReqScreen from '../screens/HealthReqScreen/IndexHR';
import SOSScreen from '../screens/SOSScreen/IndexSOS';

const RootStack = createStackNavigator();
const AuthStack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Authentication stack navigator
function AuthStackScreens() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="SignUp" component={SignUpScreen} />
    </AuthStack.Navigator>
  );
}

// Main application tab navigator
function MainTabNavigator() {
  return (
    <Tab.Navigator
            initialRouteName="Ana Sayfa"
            screenOptions={{
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarActiveTintColor: "#2e76e8",
                tabBarInactiveTintColor: "white",
                headerShown: false,
                tabBarStyle: {
                    height: 80,
                    backgroundColor: "black",
                    borderTopLeftRadius: 25,
                    borderTopRightRadius: 25,
                },
            }}
        >
            <Tab.Screen
                name="Ana Sayfa"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({color}) => (
                        <Foundation name="home" size={24} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Topluluk"
                component={CommunityNavigator}
                options={{
                    tabBarIcon: ({color}) => (
                        <Ionicons name="people-sharp" size={24} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Action"
                component={CustomTabBarButton}
                options={{
                    tabBarButton: (props) => (
                        <CustomTabBarButton {...props} />
                    )
                }}
            />
            <Tab.Screen
                name="Yardım Talep"
                component={HealthReqScreen}
            />
            <Tab.Screen
                name="SOS"
                component={SOSScreen}
            />
            <Tab.Screen
                name="Yardım Merkezi"
                component={InfoNavigator}
                options={{
                    tabBarIcon: ({color}) => (
                        <FontAwesome6 name="circle-info" size={24} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Profil"
                component={ProfileNavigator}
                options={{
                    tabBarIcon: ({color}) => (
                        <Ionicons name="person" size={24} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
  );
}

// Root navigator combining auth and main app navigation
function RootNavigator() {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="Auth" component={AuthStackScreens} />
      <RootStack.Screen name="Main" component={MainTabNavigator} />
    </RootStack.Navigator>
  );
}

export default RootNavigator;
