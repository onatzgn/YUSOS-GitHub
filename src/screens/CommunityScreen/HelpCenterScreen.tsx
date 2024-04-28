import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Alert, ScrollView } from 'react-native';
import Card from './Card';

const HelpCenterScreen = ({ navigation, route }) => {

    const [helpRequests, setHelpRequests] = useState([]);

    useEffect(() => {
        if (route.params && route.params.helpRequests) {
            setHelpRequests(route.params.helpRequests);
        }
    }, [route.params]);

    const [joinedRequests, setJoinedRequests] = useState([]); 

    const onPressHelpCenter = () => {
        navigation.navigate('HelpCenterScreen');
    };

    const onPressCommunityCenter = () => {
        navigation.navigate('CommunityCenterScreen');
    };

    const onPressJoin = (id) => {
        setJoinedRequests([...joinedRequests, id]);
    };
    const handleDelete = (id) => {

        const updatedRequests = helpRequests.filter(request => request.id !== id);
        setHelpRequests(updatedRequests);

        const updatedJoinedRequests = joinedRequests.filter(joinedId => joinedId !== id);
        setJoinedRequests(updatedJoinedRequests);
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
                        <Text style={styles.buttonText}>   Topluluk   </Text>
                    </TouchableOpacity>
                </View>
                {helpRequests.length === 0 ? (
                    <View style={styles.noRequestsContainer}>
                        <Text style={styles.noRequestsText}>Herhangi bir acil durum çağrısı yok</Text>
                    </View>
                ) : (
                    <View style={styles.cardContainer}>
                        {helpRequests.slice(0).reverse().map(request => (
                            <Card
                                key={request.id}
                                title={request.title}
                                time={request.time}
                                location={request.location}
                                healthIssues={request.healthIssues}
                                onPressJoin={() => onPressJoin(request.id)}
                                onPressDelete={() => handleDelete(request.id)} 
                                disabled={joinedRequests.includes(request.id)}
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
        paddingHorizontal: 20,
        marginBottom: 20,
        marginTop: 70
    },
    button: {
        backgroundColor: 'lightblue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 55,
        marginRight: 25,
    },
    button1: {
        backgroundColor: '#2e76e8',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 30,
        marginLeft: 25,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    cardContainer: {
        width: '100%',
        paddingHorizontal: 20,
        marginTop: 20,
    },
    titleText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000', 
        marginTop: 20,
        marginRight: 120,
    },
    noRequestsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 80,
    },
    noRequestsText: {
        fontSize: 15,
        color: 'gray',
    },
});

export default HelpCenterScreen;
