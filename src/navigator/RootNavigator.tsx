

import React, { useState } from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Foundation } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import HomeNavigator from "./HomeNavigator"
import CommunityNavigator from "./CommunityNavigator"
import InfoNavigator from "./InfoNavigator"
import ProfileNavigator from "./ProfileNavigator"
//import ActionNavigator from "./ActionNavigator"
import CustomTabBarButton from './CustomTabBarButton';

import { TouchableOpacity, View, Text, StyleSheet, Modal } from "react-native"

const Tab = createBottomTabNavigator ();

function RootNavigator(){

    return(
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
                    borderTopLeftRadius: 25, // Sol üst köşeyi yuvarlatma
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

export default RootNavigator;
