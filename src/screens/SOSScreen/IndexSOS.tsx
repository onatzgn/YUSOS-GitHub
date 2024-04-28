import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import Card from './Card'; 

const SOSScreen = ({ navigation }) => {
    const [showText, setShowText] = useState(false);
    const [isSOSRequested, setIsSOSRequested] = useState(false);
    const [helpRequests, setHelpRequests] = useState([]);

    useEffect(() => {
        // AsyncStorage'den geçmiş yardım isteklerini yükleme
        // Örnek: AsyncStorage.getItem('helpRequests').then((data) => setHelpRequests(JSON.parse(data)));
    }, []);

    const toggleText = () => {
        setShowText(!showText);
    };

    const sendSOS = () => {
        setIsSOSRequested(true);
  
        const now = new Date();
        const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const username = 'John Doe';
        const location = 'Yeditepe Üniversitesi'
        const healthIssues = 'Epilepsi'
        
        const newRequest = { 
            id: helpRequests.length + 1, 
            title: `${username}`,
            time: `${formattedTime}`, 
            location: `${location}`, 
            healthIssues: `${healthIssues}`, 
        };
        setHelpRequests([...helpRequests, newRequest])
       
        Alert.alert(
            'Acil Durum Çağrısı',
            'Acil durum talebiniz yollanmıştır. Talebinizi Yardım Merkezinden iptal edebilirsiniz. ',
            [
                {
                    text: 'Kapat',
                },
            ],
            { cancelable: false }
        );
        navigation.navigate('HelpCenterScreen', { helpRequests: [...helpRequests, newRequest] });
    };

    const cancelSOS = () => {
        setIsSOSRequested(false);
        Alert.alert('SOS Çağrısı İptal Edildi', 'SOS çağrısı başarıyla iptal edildi.');
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
                    <Text style={styles.infoText}>
                        Uyarı: Hafif ihlallerde verilen en hafif cezadır. Öğrenciye hatasını belirtir ve tekrarlamaması konusunda uyarır.
                    </Text>
                    <Text style={styles.infoText}>
                        Özür: Öğrencinin yanlış davranışı nedeniyle zarar gören kişi veya kuruluştan özür dilemesini içerir.
                    </Text>
                    <Text style={styles.infoText}>
                        Yazılı Uyarı: Daha ciddi ihlallerde, öğrenciye yazılı olarak uyarı verilir. Bu uyarı, öğrencinin dosyasına kaydedilir.
                    </Text>
                    <Text style={styles.infoText}>
                        Topluluk Hizmeti: Öğrenciye toplum hizmeti yapma cezası verilir. Okul içi veya dışındaki belirli görevler verilerek öğrencinin hatasını telafi etmesi amaçlanır.
                    </Text>
                    <Text style={styles.infoText}>
                        Disiplin Kontratı: Öğrenciyle bir disiplin kontratı yapılır. Belirli kurallara uymayı kabul etmesi ve belirli davranışları tekrarlamaması şartıyla ceza ertelenebilir.
                    </Text>
                    <Text style={styles.infoText}>
                        Geçici Uzaklaştırma: Ciddi ihlallerde öğrenci, belirli bir süre için okuldan uzaklaştırılabilir.
                    </Text>
                    <Text style={styles.infoText}>
                        Daimi Uzaklaştırma: En ciddi ihlallerde, öğrenci okuldan daimi olarak uzaklaştırılabilir.
                    </Text>
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
        paddingTop: 50,
    },
    title: {
        fontSize: 32,
        color: '#333',
        marginBottom: 20,
        fontWeight: '600',
        fontFamily: 'System',
    },
    button: {
        backgroundColor: 'red',
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        marginBottom: 25,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
    },
    cancelButton: {
        backgroundColor: '#999',
        width: 200,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        marginBottom: 15,
    },
    buttonText: {
        color: 'white',
        fontSize: 48,
        fontWeight: 'bold',
        fontFamily: 'System',
    },
    cancelButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'System',
    },
    warningText: {
        fontSize: 16,
        color: '#d9534f',
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10,
        fontFamily: 'System',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#d9534f',
        borderRadius: 5,
        backgroundColor: 'rgba(217, 83, 79, 0.1)',
    },
    detailsButton: {
        padding: 5,
        borderRadius: 5,
        backgroundColor: 'transparent',
    },
    detailsButtonText: {
        color: 'red',
        fontSize: 14,
        textDecorationLine: 'underline',
        fontFamily: 'System',
    },
    infoContainer: {
        backgroundColor: '#f9f9f9',
        padding: 20,
        borderRadius: 10,
        marginHorizontal: 20,
    },
    infoText: {
        fontSize: 16,
        color: '#555',
        marginBottom: 10,
        lineHeight: 24,
        fontFamily: 'System',
    },
    goBackButton: {
        position: 'absolute',
        top: 30,
        left: 10,
        zIndex: 1,
    },
});

export default SOSScreen;
