// CommunityScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CommunityScreen = ({ navigation }) => {
    const onPressHelpCenter = () => {
        navigation.navigate('HelpCenterScreen');
    };

    const onPressCommunityCenter = () => {
        navigation.navigate('CommunityCenterScreen');
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={onPressHelpCenter}>
                <Text style={styles.buttonText}>Yardım Merkezi</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onPressCommunityCenter}>
                <Text style={styles.buttonText}>Topluluk Merkezi</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'lightblue',
        padding: 10,
        margin: 10,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CommunityScreen;
