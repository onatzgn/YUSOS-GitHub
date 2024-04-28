import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Modal, TouchableWithoutFeedback } from 'react-native';
import { AntDesign, FontAwesome6, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import SOSScreen from "../screens/SOSScreen/IndexSOS"
import HealthReqScreen from "../screens/HealthReqScreen/IndexHR"
import ReqNavigator from './ReqNavigator';

const CustomTabBarButton = () => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const navigateToSOSScreen = () => {
        if (navigation) {
            navigation.navigate('SOSScreen');
            closeModal();
        } else {
            console.log("Navigation prop is not available.");
        }
    };

    const navigateToHealthReqScreen = () => {
        if (navigation) {
            navigation.navigate('HealthReqScreen');
            closeModal();
        } else {
            console.log("Navigation prop is not available.");
        }
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
                onRequestClose={closeModal}
            >
                <TouchableWithoutFeedback onPress={closeModal}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity
                                    style={[styles.modalButton, styles.redButton]}
                                    onPress={navigateToSOSScreen}
                                >
                                    <FontAwesome5 name="exclamation" size={24} color="white" />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[styles.modalButton, styles.greenButton]}
                                    onPress={navigateToHealthReqScreen}
                                >
                                    <FontAwesome6 name="user-doctor" size={24} color="white" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
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
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 100,
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
    buttonContainer: {
        flexDirection: 'row',
    },
    modalButton: {
        width: 85,
        height: 85,
        backgroundColor: "#2e76e8",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginHorizontal: 5,
    },
    modalButtonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    greenButton: {
        backgroundColor: '#3DD598',
    },
    redButton: {
        backgroundColor: '#EC000B',
    },
});

export default CustomTabBarButton;
