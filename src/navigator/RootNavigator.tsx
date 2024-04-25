/*
import React from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { Foundation } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import HomeNavigator from "./HomeNavigator"
import CommunityNavigator from "./CommunityNavigator"
import InfoNavigator from "./InfoNavigator"
import ProfileNavigator from "./ProfileNavigator"
import ActionNavigator from "./ActionNavigator"

import { useState } from 'react';
import{TouchableOpacity} from "react-native"
const Tab = createBottomTabNavigator ()
function RootNavigator(){

    const CustomActionButton = ({onPesss}) => {
        const [showButtons, setShowButtons] = useState(false);

        const handleActionButtonPress = () => {
            setShowButtons(!showButtons);
            onPress(); // Or any other action you want to perform when the action button is pressed
        };
        return(
            <TouchableOpacity
            style ={{
                width:55,
                height:55,
                backgroundColor:"#2e76e8",
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 10,
                borderRadius: 30,
            }}
            onPress={handleActionButtonPress}
        >
            <AntDesign name="plussquareo" size={24} color="white" />
        </TouchableOpacity>
        )

    }
    return(
        <Tab.Navigator
            initialRouteName = "Ana Sayfa"
            screenOptions = {{
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
                name = "Ana Sayfa"
                component = {HomeNavigator}
                options = {{
                    tabBarIcon: ({color}) => (
                        <Foundation name="home" size={24} color={color} />
                    )
                }}
                
            />
            
            <Tab.Screen
                name = "Topluluk"
                component = {CommunityNavigator}
                options = {{
                    tabBarIcon: ({color}) => (
                        <Ionicons name="people-sharp" size={24} color={color} />                    )
                }}
            />
    

            <Tab.Screen
                name = "Action"
                component={ActionNavigator}
                options={{
                    tabBarButton: (props) => (
                        <CustomActionButton {...props} onPress={() => setShowButtons(!showButtons)} /> // onPress prop'unu burada geçirin
                    )
                }}
            />

            <Tab.Screen
                name = "Yardım Merkezi"
                component = {InfoNavigator}
                options = {{
                    tabBarIcon: ({color}) => (
                    <FontAwesome6 name="circle-info" size={24} color={color}/>                )
                }}
            />
            
            <Tab.Screen
                name = "Profil"
                component = {ProfileNavigator}
                options = {{
                    tabBarIcon: ({color}) => (
                    <Ionicons name="person" size={24} color={color}/>                )
                }}
            />

        </Tab.Navigator>
    )
}

export default RootNavigator
*/
/*
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
import ActionNavigator from "./ActionNavigator"

import { TouchableOpacity } from "react-native"

const Tab = createBottomTabNavigator ();

function RootNavigator(){

    const CustomActionButton = ({ onPress }: { onPress: () => void }) => {
        const [showButtons, setShowButtons] = useState(false);

        const handleActionButtonPress = () => {
            setShowButtons(!showButtons);
            onPress(); // onPress prop'unu burada kullanın
        };

        return (
            <TouchableOpacity
                style ={{
                    width:55,
                    height:55,
                    backgroundColor:"#2e76e8",
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 10,
                    borderRadius: 30,
                }}
                onPress={handleActionButtonPress}
            >
                <AntDesign name="plussquareo" size={24} color="white" />
            </TouchableOpacity>
        );
    }

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
                component={ActionNavigator}
                options={{
                    tabBarButton: (props) => (
                        <CustomActionButton {...props} onPress={() => console.log('Action button pressed')} /> 
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

*/

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
import ActionNavigator from "./ActionNavigator"

import { TouchableOpacity } from "react-native"

const Tab = createBottomTabNavigator ();

function RootNavigator(){

    const CustomActionButton = ({ onPress }) => {
        const [showButtons, setShowButtons] = useState(false);

        const handleActionButtonPress = () => {
            setShowButtons(!showButtons);
        };

        return (
            <TouchableOpacity
                style ={{
                    width:55,
                    height:55,
                    backgroundColor:"#2e76e8",
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 10,
                    borderRadius: 30,
                }}
                onPress={handleActionButtonPress}
            >
                <AntDesign name="plussquareo" size={24} color="white" />
            </TouchableOpacity>
        );
    }

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
                component={ActionNavigator}
                options={{
                    tabBarButton: (props) => (
                        <CustomActionButton {...props} onPress={() => console.log('Action button pressed')} /> 
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

