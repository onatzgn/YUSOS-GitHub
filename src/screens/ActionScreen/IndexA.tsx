/*
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ActionScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Topluluk</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
    },
});

export default ActionScreen;
*/
/*
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const ActionScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    return (
        <View style={styles.container}>
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
                                // İlgili işlemi yap
                                toggleModal();
                            }}
                        >
                            <Text style={styles.modalButtonText}>İşlem 1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.modalButton}
                            onPress={() => {
                                // İlgili işlemi yap
                                toggleModal();
                            }}
                        >
                            <Text style={styles.modalButtonText}>İşlem 2</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#2e76e8',
        borderRadius: 30,
        padding: 20,
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

export default ActionScreen;

/*
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const ActionButton = ({ onPress }) => {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={onPress}
        >
            <AntDesign name="plussquareo" size={24} color="white" />
        </TouchableOpacity>
    );
};

const ActionScreen = ({ navigation }) => {
    const handleActionButtonPress = () => {
        // Action butonuna tıklandığında gerçekleştirilecek olayları buraya ekleyebilirsiniz
        console.log('Action button pressed');
    };

    return (
        <View style={styles.container}>
            <ActionButton onPress={handleActionButtonPress} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: 55,
        height: 55,
        backgroundColor: "#2e76e8",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 30,
    },
});

export default ActionScreen;
*/