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
//import ActionNavigator from "./ActionNavigator"
import CustomTabBarButton from './CustomTabBarButton';

import { TouchableOpacity, View, Text, StyleSheet, Modal } from "react-native"

const Tab = createBottomTabNavigator ();
/*
const CustomTabBarButton = ({ onPress }) => {
    const [modalVisible, setModalVisible] = React.useState(false);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    return (
        <View>
            <TouchableOpacity
                style={styles.button}
                onPress={toggleModal}
            >
                <AntDesign name="plussquareo" size={24} color="white" />
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={toggleModal}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TouchableOpacity
                            style={styles.modalButton}
                            onPress={() => {
                                // Perform action 1
                                toggleModal();
                            }}
                        >
                            <Text style={styles.modalButtonText}>Action 1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.modalButton}
                            onPress={() => {
                                // Perform action 2
                                toggleModal();
                            }}
                        >
                            <Text style={styles.modalButtonText}>Action 2</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 55,
        height: 55,
        backgroundColor: "#2e76e8",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 30,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalButton: {
        backgroundColor: '#2e76e8',
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        marginBottom: 10,
    },
    modalButtonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
*/
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
