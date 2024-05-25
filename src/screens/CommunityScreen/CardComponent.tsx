import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Dimensions } from 'react-native';

const windowDimensions = Dimensions.get('window');
const windowWidth = windowDimensions.width;
const windowHeight = windowDimensions.height;

const CardComponent = ({ title, info }) => {
    const [isJoined, setIsJoined] = useState(false);

    const onPressJoin = () => {
        setIsJoined(true);
        Alert.alert("Katıldın");
    };

    const getJoinButtonText = (isJoined) => {
        return isJoined ? "Katıldın" : "Katıl";
    };

    return (
        <View style={styles.card}>
            <View>
                <Text style={styles.cardTitle}>{title}</Text>
                <Text style={styles.cardInfo}>{info}</Text>
            </View>
            <TouchableOpacity
                style={[styles.addButton, isJoined && styles.joinedButton]}
                onPress={onPressJoin}
                disabled={isJoined}
            >
                <Text style={[styles.buttonText, isJoined && styles.joinedText]}>
                    {getJoinButtonText(isJoined)}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: '100%',
        height: windowHeight * 0.11,
        backgroundColor: 'white',
        marginBottom: windowHeight * 0.015,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: windowWidth * 0.05,
        paddingHorizontal: windowWidth * 0.027,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    cardTitle: {
        fontSize: windowWidth * 0.048,
        fontWeight: 'bold',
    },
    cardInfo: {
        fontSize: windowWidth * 0.038,
        color: 'gray',
        marginTop: windowHeight * 0.005,
    },
    addButton: {
        backgroundColor: '#2e76e8',
        paddingVertical: windowHeight * 0.015,
        paddingHorizontal: windowWidth * 0.053,
        borderRadius: windowWidth * 0.027,
        borderWidth: 1,
    },
    joinedButton: {
        backgroundColor: 'black',
    },
    joinedText: {
        color: 'white',
    },
    buttonText: {
        fontSize: windowWidth * 0.043,
        fontWeight: 'bold',
    },
});

export default CardComponent;
