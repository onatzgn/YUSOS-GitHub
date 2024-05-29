/*
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Alert, ScrollView, Dimensions } from 'react-native';
import Card from './Card';
import { getFirestore, collection, onSnapshot, updateDoc, doc, query, orderBy } from 'firebase/firestore';
import { FIREBASE_DB } from '../../../FirebaseConfig';
import CommunityCenterScreen from './CommunityCenterScreen';

const windowDimensions = Dimensions.get('window');
const windowWidth = windowDimensions.width;
const windowHeight = windowDimensions.height;

const HelpCenterScreen = ({ navigation, route }) => {
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

    const [joinedRequests, setJoinedRequests] = useState([]); 

    const onPressCommunityCenter = () => {
        navigation.navigate('CommunityCenterScreen');
    };

    const handleJoinHelp = async (id) => {
        const docRef = doc(FIREBASE_DB, "sosInfo", id);
        try {
            await updateDoc(docRef, { isHelped: true });
            Alert.alert("Başarılı", "Yardım çağrısı başarıyla güncellendi.");
        } catch (error) {
            console.error("Error updating document: ", error);
            Alert.alert("Error", "Failed to update help status. Please try again.");
        }
    };

    const handleDelete = async (id) => {
        const docRef = doc(FIREBASE_DB, "sosInfo", id);
        try {
            await updateDoc(docRef, { isActive: false });
            Alert.alert("Başarılı", "Yardım çağrısı başarıyla iptal edildi.");
        } catch (error) {
            console.error("Error updating document: ", error);
            Alert.alert("Error", "Failed to cancel the request. Please try again.");
        }
    };

    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <Text style={styles.titleText}>Yardım Merkezi</Text>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.button1}>
                        <Text style={styles.buttonText}>Acil Durum</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={onPressCommunityCenter}>
                        <Text style={styles.buttonText}>Topluluk</Text>
                    </TouchableOpacity>
                </View>
                {helpRequests.length === 0 ? (
                    <View style={styles.noRequestsContainer}>
                        <Text style={styles.noRequestsText}>Herhangi bir acil durum çağrısı yok</Text>
                    </View>
                ) : (
                    <View style={styles.cardContainer}>
                        {helpRequests.filter(req => req.isActive).map((request) => (
                            <Card
                                key={request.id}
                                title={request.title}
                                time={request.time}
                                location={request.location}
                                healthIssues={request.healthIssues}
                                onPressJoin={() => handleJoinHelp(request.id)}
                                onPressDelete={() => handleDelete(request.id)}
                                isHelped={request.isHelped}
                            />
                        ))}
                    </View>
                )}
            </SafeAreaView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        paddingHorizontal: windowWidth * 0.055,
        marginBottom: windowHeight * 0.03,
        marginTop: windowHeight * 0.05,
    },
    button: {
        backgroundColor: 'lightblue',
        paddingVertical: windowHeight * 0.015,
        paddingHorizontal: windowWidth * 0.053,
        borderRadius: windowWidth * 0.08,
        marginRight: windowWidth * 0.067,
    },
    button1: {
        backgroundColor: '#2e76e8',
        paddingVertical: windowHeight * 0.015,
        paddingHorizontal: windowWidth * 0.053,
        borderRadius: windowWidth * 0.08,
        marginLeft: windowWidth * 0.067,
    },
    buttonText: {
        fontSize: windowWidth * 0.043,
        fontWeight: 'bold',
        color: 'black',
    },
    cardContainer: {
        width: '100%',
        paddingHorizontal: windowWidth * 0.053,
        marginTop: windowHeight * 0.03,
    },
    titleText: {
        fontSize: windowWidth * 0.08,
        fontWeight: 'bold',
        color: '#000',
        marginTop: windowHeight * 0.03,
        marginRight: windowWidth * 0.32,
    },
    noRequestsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: windowHeight * 0.12,
    },
    noRequestsText: {
        fontSize: windowWidth * 0.04,
        color: 'gray',
    },
});

export default HelpCenterScreen;
*/
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Alert, ScrollView, Dimensions } from 'react-native';
import Card from './Card';
import { getFirestore, collection, onSnapshot, updateDoc, doc, query, orderBy } from 'firebase/firestore';
import { FIREBASE_DB } from '../../../FirebaseConfig';
import CommunityCenterScreen from './CommunityCenterScreen';

const windowDimensions = Dimensions.get('window');
const windowWidth = windowDimensions.width;
const windowHeight = windowDimensions.height;

const HelpCenterScreen = ({ navigation, route }) => {
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

    const handleJoinHelp = async (id) => {
        const docRef = doc(FIREBASE_DB, "sosInfo", id);
        try {
            await updateDoc(docRef, { isHelped: true });
            Alert.alert("Başarılı", "Yardım çağrısı başarıyla güncellendi.");
        } catch (error) {
            console.error("Error updating document: ", error);
            Alert.alert("Error", "Failed to update help status. Please try again.");
        }
    };

    const handleDelete = async (id) => {
        const docRef = doc(FIREBASE_DB, "sosInfo", id);
        try {
            await updateDoc(docRef, { isActive: false });
            Alert.alert("Başarılı", "Yardım çağrısı başarıyla iptal edildi.");
        } catch (error) {
            console.error("Error updating document: ", error);
            Alert.alert("Error", "Failed to cancel the request. Please try again.");
        }
    };

    return (
        <ScrollView horizontal pagingEnabled style={styles.horizontalScrollView}>
            <View style={styles.fullScreenContainer}>
                <SafeAreaView style={styles.safeArea}>
                    <ScrollView style={styles.verticalScrollView}>
                        <View style={styles.container}>
                            <Text style={styles.titleText}>Yardım Merkezi</Text>
                            <View style={styles.buttonsContainer}>
                            <View style={styles.button1}>
                            <Text style={styles.buttonText}>Acil Durum</Text>
                            </View>
                            <View style={styles.button}>
                             <Text style={styles.buttonText}>Topluluk</Text>
                            </View>

                            </View>
                            {helpRequests.length === 0 ? (
                                <View style={styles.noRequestsContainer}>
                                    <Text style={styles.noRequestsText}>Herhangi bir acil durum çağrısı yok</Text>
                                </View>
                            ) : (
                                <View style={styles.cardContainer}>
                                    {helpRequests.filter(req => req.isActive).map((request) => (
                                        <Card
                                            key={request.id}
                                            title={request.title}
                                            time={request.time}
                                            location={request.location}
                                            healthIssues={request.healthIssues}
                                            onPressJoin={() => handleJoinHelp(request.id)}
                                            onPressDelete={() => handleDelete(request.id)}
                                            isHelped={request.isHelped}
                                        />
                                    ))}
                                </View>
                            )}
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </View>
            <View style={styles.fullScreenContainer}>
                <CommunityCenterScreen />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    horizontalScrollView: {
        flex: 1,
    },
    fullScreenContainer: {
        width: windowWidth,
        height: windowHeight,
    },
    safeArea: {
        flex: 1,
    },
    verticalScrollView: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: windowHeight * 0.1, // Allow extra space for vertical scrolling
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        paddingHorizontal: windowWidth * 0.055,
        marginBottom: windowHeight * 0.03,
        marginTop: windowHeight * 0.05,
    },
    button: {
        backgroundColor: 'lightblue',
        paddingVertical: windowHeight * 0.015,
        paddingHorizontal: windowWidth * 0.053,
        borderRadius: windowWidth * 0.08,
        marginRight: windowWidth * 0.067,
    },
    button1: {
        backgroundColor: '#2e76e8',
        paddingVertical: windowHeight * 0.015,
        paddingHorizontal: windowWidth * 0.053,
        borderRadius: windowWidth * 0.08,
        marginLeft: windowWidth * 0.067,
    },
    buttonText: {
        fontSize: windowWidth * 0.043,
        fontWeight: 'bold',
        color: 'black',
    },
    cardContainer: {
        width: '100%',
        paddingHorizontal: windowWidth * 0.053,
        marginTop: windowHeight * 0.03,
    },
    titleText: {
        fontSize: windowWidth * 0.08,
        fontWeight: 'bold',
        color: '#000',
        marginTop: windowHeight * 0.03,
        marginRight: windowWidth * 0.32,
    },
    noRequestsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: windowHeight * 0.12,
    },
    noRequestsText: {
        fontSize: windowWidth * 0.04,
        color: 'gray',
    },
});

export default HelpCenterScreen;
