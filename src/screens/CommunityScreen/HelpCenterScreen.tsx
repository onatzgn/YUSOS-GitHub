import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Alert, ScrollView, Dimensions } from 'react-native';
import Card from './Card';

const windowDimensions = Dimensions.get('window');
const windowWidth = windowDimensions.width;
const windowHeight = windowDimensions.height;

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
        //paddingHorizontal: 20,
        paddingHorizontal: windowWidth * 0.055,
        //marginBottom: 20,
        marginBottom: windowHeight * 0.03,
        //marginTop: 70,
        marginTop: windowHeight * 0.05,
    },
    button: {
        backgroundColor: 'lightblue',
        //paddingVertical: 10,
        paddingVertical: windowHeight * 0.015,
        //paddingHorizontal: 20,
        paddingHorizontal: windowWidth * 0.053,
        //borderRadius: 55,
        borderRadius: windowWidth * 0.08,
        //marginRight: 25,
        marginRight: windowWidth * 0.067,
    },
    button1: {
        backgroundColor: '#2e76e8',
        //paddingVertical: 10,
        paddingVertical: windowHeight * 0.015,
        //paddingHorizontal: 20,
        paddingHorizontal: windowWidth * 0.053,
        //borderRadius: 30,
        borderRadius: windowWidth * 0.08,
        //marginLeft: 25,
        marginLeft: windowWidth * 0.067,
    },
    buttonText: {
        //fontSize: 16,
        fontSize: windowWidth * 0.043,
        fontWeight: 'bold',
        color: 'black',
    },
    cardContainer: {
        width: '100%',
        //paddingHorizontal: 20,
        paddingHorizontal: windowWidth * 0.053,
        //marginTop: 20,
        marginTop: windowHeight * 0.03,
    },
    titleText: {
        //fontSize: 30,
        fontSize: windowWidth * 0.08,
        fontWeight: 'bold',
        color: '#000', 
        //marginTop: 20,
        marginTop: windowHeight * 0.03,
        //marginRight: 120,
        marginRight: windowWidth * 0.32,
    },
    noRequestsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        //marginTop: 80,
        marginTop: windowHeight * 0.12,
    },
    noRequestsText: {
        //fontSize: 15,
        fontSize: windowWidth * 0.04,
        color: 'gray',
    },
});

export default HelpCenterScreen;
