import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { UserContext } from '../../contexts/UserContext';

const { height, width } = Dimensions.get('window');

const SOSScreen = ({ navigation }) => {
    const { userInfo, setUserInfo } = useContext(UserContext);
    const [showText, setShowText] = useState(false);
    const [isSOSRequested, setIsSOSRequested] = useState(false);
    const [helpRequests, setHelpRequests] = useState([]);

    const toggleText = () => {
        setShowText(!showText);
    };

    const sendSOS = () => {
        setIsSOSRequested(true);
    
        const now = new Date();
        const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const username = 'John Doe'; // Kullanıcı adını buradan alabilirsiniz
        const location = userInfo.medicalInfo ? userInfo.medicalInfo.address : 'Bilgi bulunamadı'; // Kullanıcının adres bilgilerini UserContext'ten alın
        const healthIssues = userInfo.medicalInfo ? userInfo.medicalInfo.healthIssues : 'Bilgi bulunamadı'; // Kullanıcının sağlık sorunlarını UserContext'ten alın
        
        const newRequest = { 
            id: helpRequests.length + 1, 
            title: `${username}`,
            time: `${formattedTime}`, 
            location: `${location}`, 
            healthIssues: `${healthIssues}`, 
        };
        setHelpRequests([...helpRequests, newRequest]);
       
        const activity = { type: 'SOS Çağrısı', date: now.toLocaleString() };
        setUserInfo(prevState => ({
            ...prevState,
            activityHistory: [...prevState.activityHistory, activity]
        }));
    
        Alert.alert(
            'Acil Durum Çağrısı',
            'Acil durum talebiniz yollanmıştır. Talebinizi Yardım Merkezinden iptal edebilirsiniz.',
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
        paddingTop: height * 0.05, 
    },
    title: {
        fontSize: width * 0.08, 
        color: '#333',
        marginBottom: height * 0.02, 
        fontWeight: '600',
        fontFamily: 'System',
        marginTop: height*0.1,
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
