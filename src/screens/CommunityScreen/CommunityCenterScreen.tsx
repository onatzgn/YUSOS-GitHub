import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView,Alert ,ScrollView, Dimensions} from 'react-native';

const windowDimensions = Dimensions.get('window');
const windowWidth = windowDimensions.width;
const windowHeight = windowDimensions.height;

const CommunityCenterScreen = ({ navigation }) => {
    const [isJoined1, setIsJoined1] = useState(false); 
    const [isJoined2, setIsJoined2] = useState(false); 
    const [isJoined3, setIsJoined3] = useState(false); 

    const onPressHelpCenter = () => {
        navigation.navigate('HelpCenterScreen');
    };

    const onPressCommunityCenter = () => {
        navigation.navigate('CommunityCenterScreen');
    };

    const onPressJoin1 = () => {
        setIsJoined1(true);
        Alert.alert("Katıldın")
    };

    const onPressJoin2 = () => {
        setIsJoined2(true);
        Alert.alert("Katıldın")
    };

    const onPressJoin3 = () => {
        setIsJoined3(true);
        Alert.alert("Katıldın")
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
        //marginLeft: 25,
        marginLeft: windowWidth * 0.067,
    },
    button1: {
        backgroundColor: '#2e76e8',
        //paddingVertical: 10,
        paddingVertical: windowHeight * 0.015,
        //paddingHorizontal: 20,
        paddingHorizontal: windowWidth * 0.053,
        //borderRadius: 30,
        borderRadius: windowWidth * 0.08,
        //marginRight: 25,
        marginRight: windowWidth * 0.067,
    },
    buttonText: {
        //fontSize: 16,
        fontSize: windowWidth * 0.043,
        fontWeight: 'bold',
    },
    cardContainer: {
        width: '100%',
        //paddingHorizontal: 20,
        paddingHorizontal: windowWidth * 0.053,
        //marginTop: 20,
        marginTop: windowHeight * 0.03,
    },
    card: {
        //borderWidth: 1,
        width: '100%',
        //height: 70,
        height: windowHeight * 0.105,
        backgroundColor: 'white',
        //marginBottom: 10,
        marginBottom: windowHeight * 0.015,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        //borderRadius: 10,
        borderRadius: windowWidth * 0.05,
        //paddingHorizontal: 10,
        paddingHorizontal: windowWidth * 0.027,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    cardText: {
        //fontSize: 18,
        fontSize: windowWidth * 0.048,
        fontWeight: 'bold',
    },
    scrollViewContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButton: {
        backgroundColor: '#2e76e8',
        //paddingVertical: 10,
        paddingVertical: windowHeight * 0.015,
        //paddingHorizontal: 20,
        paddingHorizontal: windowWidth * 0.053,
        //borderRadius: 10,
        borderRadius: windowWidth * 0.027,
        borderWidth: 1,
    },
    joinedButton: {
        backgroundColor: 'black',
    },
    joinedText: {
        color: 'white',
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
});

export default CommunityCenterScreen;
