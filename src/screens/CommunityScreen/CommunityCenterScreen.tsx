import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView,Alert ,ScrollView} from 'react-native';

const CommunityCenterScreen = ({ navigation }) => {
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

    const getJoinButtonText = (isJoined) => {
        return isJoined ? "Katıldın" : "Katıl";
    };

    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
            <Text style={styles.titleText}>Yardım Merkezi</Text>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button} onPress={onPressHelpCenter}>
                    <Text style={styles.buttonText}>Acil Durum</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button1} onPress = {() => {}} >
                    <Text style={styles.buttonText}>   Topluluk   </Text>

                </TouchableOpacity>
            </View>
            <View style={styles.cardContainer}>
                {/* First Card */}
                <View style={styles.card}>
                    <Text style={styles.cardText}>Corba Dagitim</Text>
                    <TouchableOpacity
                        style={[styles.addButton, isJoined1 && styles.joinedButton]}

                        onPress={onPressJoin1}
                        disabled={isJoined1}
                    >
                        <Text style={[styles.buttonText, isJoined1 && styles.joinedText]}>
                        {getJoinButtonText(isJoined1)}
                            </Text>
                    </TouchableOpacity>
                </View>
                {/* Second Card */}
                <View style={styles.card}>
                    <Text style={styles.cardText}>Kiyafet Toplama</Text>
                    <TouchableOpacity
                        style={[styles.addButton, isJoined2 && styles.joinedButton]}
                        onPress={onPressJoin2}
                        disabled={isJoined2}
                    >
                        <Text style={[styles.buttonText, isJoined2 && styles.joinedText]}>
                        {getJoinButtonText(isJoined2)}
                            </Text>
                    </TouchableOpacity>
                </View>
                {/* Third Card */}
                <View style={styles.card}>
                    <Text style={styles.cardText}>Erzak Toplama</Text>
                    <TouchableOpacity
                        style={[styles.addButton, isJoined3 && styles.joinedButton]}
                        onPress={onPressJoin3}
                        disabled={isJoined3}

                    >
                        <Text style={[styles.buttonText, isJoined3 && styles.joinedText]}>
                        {getJoinButtonText(isJoined3)}
                            </Text>
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
        marginLeft: 25,
    },
    button1: {
        backgroundColor: '#2e76e8',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 30,
        marginRight: 25,
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
        //borderWidth: 1,
        width: '100%',
        height: 70,
        backgroundColor: 'white',
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        paddingHorizontal: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    cardText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    scrollViewContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButton: {
        backgroundColor: '#2e76e8',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        borderWidth: 1,
    },
    joinedButton: {
        backgroundColor: 'black',
    },
    joinedText: {
        color: 'white',
    },
    titleText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000', // Metin rengini gerektiği gibi ayarlayın.
        marginTop: 20,
    },
});

export default CommunityCenterScreen;
