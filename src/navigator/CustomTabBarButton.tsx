/*
import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const CustomTabBarButton = ({ onPress }) => {
    const [modalVisible, setModalVisible] = useState(false);

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
                        <View style={styles.buttonContainer}>
                        <TouchableOpacity
                                style={[styles.modalButton, styles.redButton]}
                                onPress={() => {
                                    // Perform action 2
                                    toggleModal();
                                }}
                            >
                                <FontAwesome5 name="exclamation" size={24} color="white" />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.modalButton, styles.greenButton]}
                                onPress={() => {
                                    // Perform action 1
                                    toggleModal();
                                }}
                            >
                                <FontAwesome6 name="user-doctor" size={24} color="white" />
                            </TouchableOpacity>

                        </View>
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
        flexDirection: 'row', // Yatay düzende hizalama
    },
    modalButton: {
        //flex: 1, // Butonların eşit genişlikte olmasını sağlar
        marginHorizontal: 5, // Butonlar arası boşluk
        width: 85,
        height: 85,
        backgroundColor: "#2e76e8",
        justifyContent: 'center',
        alignItems: 'center',
        //marginTop: 10,
        borderRadius: 50,
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

*/

import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Modal, TouchableWithoutFeedback } from 'react-native';
import { AntDesign, FontAwesome6, FontAwesome5, Ionicons } from '@expo/vector-icons';

const CustomTabBarButton = ({ onPress }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    const closeModal = () => {
        setModalVisible(false);
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
                                    onPress={() => {
                                        // Perform action 2
                                        closeModal();
                                    }}
                                >
                                    <FontAwesome5 name="exclamation" size={24} color="white" />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[styles.modalButton, styles.greenButton]}
                                    onPress={() => {
                                        // Perform action 1
                                        closeModal();
                                    }}
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
    buttonContainer: {
        flexDirection: 'row', // Yatay düzende hizalama
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
