import React, {useContext} from 'react';
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
import GetStartedScreen from '../screens/GetStartedScreen/IndexGS'
//import { AuthContext } from '../context/AuthContext'; // Adjust the path accordingly

const RootStack = createStackNavigator();
const AuthStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const SOSStack = createStackNavigator();
const HealthReqStack = createStackNavigator();

function SOSScreens() {
  return (
    <SOSStack.Navigator screenOptions={{ headerShown: false }}>
      <SOSStack.Screen name="SOS" component={SOSScreen} />
    </SOSStack.Navigator>
  );
}

function HealthReqScreens() {
  return (
    <HealthReqStack.Navigator screenOptions={{ headerShown: false }}>
      <HealthReqStack.Screen name="HealthReq" component={HealthReqScreen} />
    </HealthReqStack.Navigator>
  );
}

function AuthStackScreens() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="GetStarted" component={GetStartedScreen} />
      <AuthStack.Screen name="Main" component={MainTabNavigator} />
    </AuthStack.Navigator>
  );
}

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
          tabBarIcon: ({ color }) => (
            <Foundation name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Topluluk"
        component={CommunityNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="people-sharp" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Action"
        component={CustomTabBarButton}
        options={{
          tabBarButton: (props) => (
            <CustomTabBarButton {...props} />
          ),
        }}
      />
      <Tab.Screen
        name="Yardım Merkezi"
        component={InfoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="circle-info" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profil"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function RootNavigator() {
    //const { isJustSignedUp } = useContext(AuthContext);
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="GetStarted" component={GetStartedScreen} />
      <RootStack.Screen name="Main" component={MainTabNavigator} />
      <RootStack.Screen name="SOSScreen" component={SOSScreens} />
      <RootStack.Screen name="HealthReqScreen" component={HealthReqScreens} />
    </RootStack.Navigator>
  );
}

export default RootNavigator;
//      <RootStack.Screen name="Auth" component={AuthStackScreens} />
//    <RootStack.Navigator screenOptions={{ headerShown: false }}>
//{isJustSignedUp ? (
 //   <RootStack.Screen name="Auth" component={AuthStackScreens} />
 // ) : (
//   <RootStack.Screen name="Main" component={MainTabNavigator} />
 // )}