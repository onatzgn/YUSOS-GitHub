import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 
import { UserContext } from '../../contexts/UserContext';

const windowDimensions = Dimensions.get('window');
const windowWidth = windowDimensions.width;
const windowHeight = windowDimensions.height;

const HealthReqScreen = () => {
    const navigation = useNavigation(); 
    const { userInfo, setUserInfo } = useContext(UserContext);

    const [name, setName] = useState('');
    const [healthRequest, setHealthRequest] = useState('');
    const [requestSent, setRequestSent] = useState(false);

    const handleSendRequest = () => {
        Alert.alert(
            'Sağlık Yardım Talebi Gönder',
            'Sağlık yardım talebi yollamak istediğinize emin misiniz?',
            [
                {
                    text: 'İptal Et',
                    style: 'cancel',
                },
                {
                    text: 'Devam Et',
                    onPress: () => {
                        setRequestSent(true);
                        const now = new Date();
                        const activity = { type: 'Sağlık Yardım Talebi', date: now.toLocaleString() };
                        setUserInfo(prevState => ({
                            ...prevState,
                            activityHistory: [...prevState.activityHistory, activity]
                        }));
                    },
                },
            ],
            { cancelable: false }
        );
    };

    const handleCancelRequest = () => {
        Alert.alert(
            'Sağlık Yardım Talebi İptali',
            'Sağlık yardım talebinizi iptal etmek istediğinize emin misiniz?',
            [
                {
                    text: 'Kapat',
                    style: 'cancel',
                },
                {
                    text: 'Evet',
                    onPress: () => {
                        setRequestSent(false);
                        setName('');
                        setHealthRequest('');
                    },
                },
            ],
            { cancelable: false }
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{requestSent ? 'İletişime Geçilmiştir' : 'İletişime Geç'}</Text>
            {requestSent && (
                <Text style={styles.subtitle}>Sağlık ekibimiz size en kısa zamanda ulaşacaktır.</Text>
            )}
            {!requestSent && (
                <Text style={styles.subtitle}>Sağlık Yardım Talebi</Text>
            )}

            {!requestSent && (
                <>
                    <View style={styles.inputContainer}>
                        <Ionicons name="person" size={24} color="black" style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Ad Soyad"
                            value={name}
                            onChangeText={setName}
                        />
                    </View>

                    <View style={styles.textareaContainer}>
                        <Ionicons name="clipboard" size={24} color="black" style={styles.icon} />
                        <TextInput
                            style={[styles.input, styles.textarea]}
                            placeholder="Lütfen sorununuzu detaylı bir şekilde belirtin..."
                            multiline
                            numberOfLines={4}
                            value={healthRequest}
                            onChangeText={setHealthRequest}
                        />
                    </View>

                    <TouchableOpacity style={[styles.button, { backgroundColor: '#3DD598' }]} onPress={handleSendRequest}>
                        <Text style={styles.buttonText}>Gönder</Text>
                    </TouchableOpacity>
                </>
            )}

            {requestSent && (
                <>
                    <Text style={styles.subtitle}>İsim: {name}</Text>
                    <Text style={styles.subtitle}>Sağlık Talebi: {healthRequest}</Text>

                    <TouchableOpacity style={[styles.button, { backgroundColor: '#FF565E' }]} onPress={handleCancelRequest}>
                        <Text style={styles.buttonText}>İptal Et</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, {backgroundColor: 'gray'}]} onPress={() => navigation.goBack()}>
                        <Text style={styles.buttonText}>Kapat</Text>
                    </TouchableOpacity>
                </>
            )}
            
            <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: windowWidth * 0.053,
    },
    title: {
        fontSize: windowWidth * 0.075,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: windowHeight * 0.015,
    },
    subtitle: {
        fontSize: windowWidth * 0.053,
        color: 'grey',
        marginBottom: windowHeight * 0.03,
        textAlign: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: windowHeight * 0.03,
    },
    textareaContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: windowHeight * 0.03,
    },
    icon: {
        marginRight: windowWidth * 0.027,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'lightgrey',
        paddingVertical: windowHeight * 0.015,
        paddingHorizontal: windowWidth * 0.04,
        borderRadius: windowWidth * 0.038,
    },
    textarea: {
        height: windowHeight * 0.15,
        textAlignVertical: 'top',
    },
    button: {
        width: '100%',
        paddingVertical: windowHeight * 0.022,
        alignItems: 'center',
        borderRadius: windowWidth * 0.04,
        marginBottom: windowHeight * 0.017,
    },
    buttonText: {
        color: 'white',
        fontSize: windowWidth * 0.048,
        fontWeight: 'bold',
    },
    goBackButton: {
        position: 'absolute',
        top: windowHeight * 0.105,
        left: windowWidth * 0.025,
        zIndex: 1,
    },
});

export default HealthReqScreen;
