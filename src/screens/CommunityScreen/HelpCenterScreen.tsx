import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView,Alert, ScrollView } from 'react-native';

const HelpCenterScreen = ({ navigation }) => {
    const [isJoined1, setIsJoined1] = useState(false); // State to track if joined for card 1
    const [isJoined2, setIsJoined2] = useState(false); // State to track if joined for card 2
    const [isJoined3, setIsJoined3] = useState(false); // State to track if joined for card 3

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
                {/* First Card */}
                <View style={styles.card}>
                    <Text style={styles.cardText}>Help Center</Text>
                    <TouchableOpacity
                        style={[styles.addButton, isJoined1 && styles.joinedButton]}
                        
                        onPress={onPressJoin1}
                        disabled={isJoined1}
                    >
                        <Text style={[styles.buttonText, isJoined1 && styles.joinedText]}>Katıl</Text>
                    </TouchableOpacity>
                </View>
                {/* Second Card */}
                <View style={styles.card}>
                    <Text style={styles.cardText}>Kizilay Cadiri</Text>
                    <TouchableOpacity
                        style={[styles.addButton, isJoined2 && styles.joinedButton]}
                        onPress={onPressJoin2}
                        disabled={isJoined2}
                    >
                        <Text style={[styles.buttonText, isJoined2 && styles.joinedText]}>Katıl</Text>
                    </TouchableOpacity>
                </View>
                {/* Third Card */}
                <View style={styles.card}>
                    <Text style={styles.cardText}>Kan Toplama</Text>
                    <TouchableOpacity
                        style={[styles.addButton, isJoined3 && styles.joinedButton]}
                        onPress={onPressJoin3}
                        disabled={isJoined3}
                
                    >
                        <Text style={[styles.buttonText, isJoined3 && styles.joinedText]}>Katıl</Text>
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
        borderRadius: 5,
    },
    button1: {
        backgroundColor: 'red',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 30,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
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
        backgroundColor: 'red',
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
