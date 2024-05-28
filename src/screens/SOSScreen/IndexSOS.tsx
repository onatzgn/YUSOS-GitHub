import React, { useState, useContext, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { UserContext } from '../../contexts/UserContext';
import { getFirestore, collection, addDoc, onSnapshot, query, orderBy } from 'firebase/firestore';
import { FIREBASE_DB } from '../../../FirebaseConfig';

const { height, width } = Dimensions.get('window');

const SOSScreen = ({ navigation }) => {
    const { userInfo } = useContext(UserContext);
    const [showText, setShowText] = useState(false);
    const [isSOSRequested, setIsSOSRequested] = useState(false);
    const [helpRequests, setHelpRequests] = useState([]);

    useEffect(() => {
        const q = query(collection(FIREBASE_DB, "sosInfo"), orderBy("timestamp", "desc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const fetchedHelpRequests = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setHelpRequests(fetchedHelpRequests);
        });
        return () => unsubscribe(); // Cleanup subscription
    }, []);

    const sendSOS = async () => {
        setIsSOSRequested(true);
        const now = new Date();
        const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
        if (userInfo && userInfo.name) {
            username = userInfo.name;
        }
    
        if (userInfo && userInfo.medicalInfo) {
            location = userInfo.medicalInfo.address ? userInfo.medicalInfo.address : 'Bilgi Bulunamadı';
            healthIssues = userInfo.medicalInfo.healthIssues ? userInfo.medicalInfo.healthIssues : 'Bilgi Bulunamadı';
        }
    
        const newRequest = {
            userId: userInfo.userId,
            title: username,
            time: formattedTime,
            location: location,
            healthIssues: healthIssues,
            timestamp: now,
            isActive: true,
            isHelped: false
        };
    
        try {
            const docRef = await addDoc(collection(FIREBASE_DB, "sosInfo"), newRequest);
            console.log("Document written with ID: ", docRef.id);
            Alert.alert(
                'Acil Durum Çağrısı',
                'Acil durum talebiniz yollanmıştır. Talebinizi Yardım Merkezinden iptal edebilirsiniz.',
                [{ text: 'Kapat' }],
                { cancelable: false }
            );
            navigation.navigate('HelpCenterScreen', { helpRequests: [...helpRequests, newRequest] });
        } catch (error) {
            console.error("Error adding document: ", error);
            Alert.alert("Error", "Failed to send SOS. Please try again.");
        }
    };
    

    const cancelSOS = () => {
        setIsSOSRequested(false);
        Alert.alert('SOS Çağrısı İptal Edildi', 'SOS çağrısı başarıyla iptal edildi.');
    };

    const toggleText = () => {
        setShowText(!showText);
    };


    return (
        <ScrollView contentContainerStyle={styles.container}>
            <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.title}>Acil Durum Çağrısı</Text>
            <TouchableOpacity style={styles.button} onPress={sendSOS} disabled={isSOSRequested}>
                <Text style={styles.buttonText}>S O S</Text>
            </TouchableOpacity>
            {isSOSRequested && (
                <TouchableOpacity style={styles.cancelButton} onPress={cancelSOS}>
                    <Text style={styles.cancelButtonText}>Çağrıyı İptal Et</Text>
                </TouchableOpacity>
            )}
            <Text style={styles.warningText}>
                İhtiyaç hali dışında kullanmayınız. Aksi halde cezai işlem başlatılacaktır.
            </Text>
            <TouchableOpacity style={styles.detailsButton} onPress={toggleText}>
                <Text style={styles.detailsButtonText}>Detaylar</Text>
            </TouchableOpacity>
            {showText && (
                <View style={styles.infoContainer}>
                    {/* Detay bilgileri burada yer alır */}
                </View>
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: height * 0.05,
    },
    title: {
        fontSize: width * 0.08,
        color: '#333',
        marginBottom: height * 0.02,
        fontWeight: '600',
        fontFamily: 'System',
        marginTop: height * 0.1,
    },
    button: {
        backgroundColor: 'red',
        width: width * 0.5,
        height: width * 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: width * 0.25,
        marginBottom: height * 0.03,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
    },
    cancelButton: {
        backgroundColor: '#999',
        width: width * 0.5,
        height: height * 0.08,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: width * 0.1,
        marginBottom: height * 0.015,
    },
    buttonText: {
        color: 'white',
        fontSize: width * 0.14,
        fontWeight: 'bold',
        fontFamily: 'System',
    },
    cancelButtonText: {
        color: 'white',
        fontSize: width * 0.04,
        fontWeight: 'bold',
        fontFamily: 'System',
    },
    warningText: {
        fontSize: width * 0.04,
        color: '#d9534f',
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: height * 0.01,
        fontFamily: 'System',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#d9534f',
        borderRadius: width * 0.025,
        backgroundColor: 'rgba(217, 83, 79, 0.1)',
    },
    detailsButton: {
        padding: width * 0.015,
        borderRadius: width * 0.025,
        backgroundColor: 'transparent',
    },
    detailsButtonText: {
        color: 'red',
        fontSize: width * 0.035,
        textDecorationLine: 'underline',
        fontFamily: 'System',
    },
    infoContainer: {
        backgroundColor: '#f9f9f9',
        padding: width * 0.05,
        borderRadius: width * 0.05,
        marginHorizontal: width * 0.05,
    },
    infoText: {
        fontSize: width * 0.04,
        color: '#555',
        marginBottom: height * 0.01,
        lineHeight: width * 0.06,
        fontFamily: 'System',
    },
    goBackButton: {
        position: 'absolute',
        top: height * 0.06,
        left: width * 0.05,
        zIndex: 1,
    },
});

export default SOSScreen;
