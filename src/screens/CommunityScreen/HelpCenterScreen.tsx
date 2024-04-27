/*
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView,Alert, ScrollView } from 'react-native';

const HelpCenterScreen = ({ navigation }) => {
    const [isJoined1, setIsJoined1] = useState(false); // State to track if joined for card 1
    const [isJoined2, setIsJoined2] = useState(false); // State to track if joined for card 2
    const [isJoined3, setIsJoined3] = useState(false);
    const [isJoined4, setIsJoined4] = useState(false); // State to track if joined for card 3

    const onPressHelpCenter = () => {
        navigation.navigate('HelpCenterScreen');
    };

    const onPressCommunityCenter = () => {
        navigation.navigate('CommunityCenterScreen');
    };

    const onPressJoin1 = () => {
        setIsJoined1(true);
        Alert.alert("Joined")
    };

    const onPressJoin2 = () => {
        setIsJoined2(true);
        Alert.alert("Joined")
    };

    const onPressJoin3 = () => {
        setIsJoined3(true);
        Alert.alert("Joined")
    };

    const onPressJoin4 = () => {
        setIsJoined4(true);
        Alert.alert("Joined")
    };

    return (
        <ScrollView>
        <SafeAreaView style={styles.container}>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button1}>
                    <Text style={styles.buttonText}>Yardım Merkezi</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={onPressCommunityCenter}>
                    <Text style={styles.buttonText}>Topluluk Merkezi</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.cardContainer}>

                <View style={styles.card}>
                    <Text style={styles.cardText}>Mary Jane needs Help!</Text>
                    <TouchableOpacity
                        style={[styles.addButton, isJoined1 && styles.joinedButton]}

                        onPress={onPressJoin1}
                        disabled={isJoined1}
                    >
                        <Text style={[styles.buttonText, isJoined1 && styles.joinedText]}>Katıl</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardText}>Lois Lane needs Help!</Text>
                    <TouchableOpacity
                        style={[styles.addButton, isJoined2 && styles.joinedButton]}
                        onPress={onPressJoin2}
                        disabled={isJoined2}
                    >
                        <Text style={[styles.buttonText, isJoined2 && styles.joinedText]}>Katıl</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardText}>Gwen Stacy needs Help!</Text>
                    <TouchableOpacity
                        style={[styles.addButton, isJoined3 && styles.joinedButton]}
                        onPress={onPressJoin3}
                        disabled={isJoined3}

                    >
                        <Text style={[styles.buttonText, isJoined3 && styles.joinedText]}>Katıl</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardText}>Peggy Carter needs Help!</Text>
                    <TouchableOpacity
                        style={[styles.addButton, isJoined4 && styles.joinedButton]}
                        onPress={onPressJoin4}
                        disabled={isJoined4}

                    >
                        <Text style={[styles.buttonText, isJoined4 && styles.joinedText]}>Katıl</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
    },
    button1: {
        backgroundColor: '#2e76e8',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 30,
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
    card: {
        width: '100%',
        height: 100,
        backgroundColor: 'lightgray',
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    cardText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    addButton: {
        backgroundColor: 'lightblue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    joinedButton: {
        backgroundColor: '#2e76e8',
    },
    joinedText: {
        color: 'white',
    },
    scrollViewContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default HelpCenterScreen;


*/
// HelpCenterScreen.js
// HelpCenterScreen.js
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

    const [joinedRequests, setJoinedRequests] = useState([]); // Katılım yapılan isteklerin listesini tutan state

    const onPressHelpCenter = () => {
        navigation.navigate('HelpCenterScreen');
    };

    const onPressCommunityCenter = () => {
        navigation.navigate('CommunityCenterScreen');
    };

    const onPressJoin = (id) => {
        setJoinedRequests([...joinedRequests, id]);
        //Alert.alert("Joined");
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
                <View style={styles.cardContainer}>
                    {helpRequests.slice(0).reverse().map(request => (
                        <Card
                            key={request.id}
                            title={request.title}
                            onPressJoin={() => onPressJoin(request.id)}
                            disabled={joinedRequests.includes(request.id)}
                        />
                    ))}
                </View>
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
        color: '#000', // Metin rengini gerektiği gibi ayarlayın.
        marginTop: 20,
        marginRight: 120,
    },
});

export default HelpCenterScreen;
