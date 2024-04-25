// CommunityCenterScreen.js
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView,SafeAreaView } from 'react-native';


const CommunityCenterScreen = ({ navigation }) => {
    const onPressHelpCenter = () => {
        navigation.navigate('HelpCenterScreen');
    };

    const onPressCommunityCenter = () => {
        navigation.navigate('CommunityCenterScreen');
    };

    return (
        <SafeAreaView>
        <View style={styles.container}>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button} onPress={onPressHelpCenter}>
                    <Text style={styles.buttonText}>Yardım       Merkezi</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonText}>Topluluk Merkezi</Text>
                </TouchableOpacity>
                <Text>Hello</Text>
            </View>
        </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'top',
        alignItems: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row', // Arrange buttons horizontally
        justifyContent: 'space-around', // Evenly space buttons
        width: '100%', // Take up full width
        paddingHorizontal: 20, // Add horizontal padding to buttons
    },
    button: {
        backgroundColor: 'lightblue',
        padding: 15,
        borderRadius: 10,
        flex: 1, // Ensure buttons take up equal space
        marginHorizontal: 5, // Add margin between buttons
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center', // Center text horizontally within button
    },
});

export default CommunityCenterScreen;