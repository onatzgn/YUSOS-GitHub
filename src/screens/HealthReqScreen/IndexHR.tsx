import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 

const HealthReqScreen = () => {
    const navigation = useNavigation(); 

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
                    onPress: () => setRequestSent(true),
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
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 20,
        color: 'grey',
        marginBottom: 20,
        textAlign: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    textareaContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 20,
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'lightgrey',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 15,
    },
    textarea: {
        height: 100,
        textAlignVertical: 'top',
    },
    button: {
        width: '100%',
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 15,
        marginBottom: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    goBackButton: {
        position: 'absolute',
        top: 70,
        left: 10,
        zIndex: 1,
    },
});

export default HealthReqScreen;
