import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';

const CommunityScreen = () => {
    const [showHelpCenter, setShowHelpCenter] = useState(false);
    const [showCommunityCenter, setShowCommunityCenter] = useState(false);

    const onPressHelpCenter = () => {
        setShowHelpCenter(true);
    };

    const onCloseHelpCenter = () => {
        setShowHelpCenter(false);
    };

    const onPressCommunityCenter = () => {
        setShowCommunityCenter(true);
    };

    const onCloseCommunityCenter = () => {
        setShowCommunityCenter(false);
    };

    const onPressButton1 = () => {
        Alert.alert('Card 1 pressed');
    };

    const onPressButton2 = () => {
        Alert.alert('Card 2 pressed');
    };

    const onPressButton3 = () => {
        Alert.alert('Card 3 pressed');
    };

    return (
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.topButtonsContainer}>
                <TouchableOpacity style={styles.button} onPress={onPressHelpCenter}>
                    <Text style={styles.buttonText}>Yardım Merkezi</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={onPressCommunityCenter}>
                    <Text style={styles.buttonText}>Topluluk Merkezi</Text>
                </TouchableOpacity>
            </View>
            {showHelpCenter && (
                <View style={styles.helpCenterContainer}>
                    <Text>This is the Help Center.</Text>
                    <TouchableOpacity style={styles.closeButton} onPress={onCloseHelpCenter}>
                        <Text style={styles.buttonText}>Close</Text>
                    </TouchableOpacity>
                </View>
            )}
            {showCommunityCenter && (
                <View style={styles.helpCenterContainer}>
                    <Text>This is the Community Center.</Text>
                    <TouchableOpacity style={styles.closeButton} onPress={onCloseCommunityCenter}>
                        <Text style={styles.buttonText}>Close</Text>
                    </TouchableOpacity>
                </View>
            )}
            <TouchableOpacity style={styles.card} onPress={onPressButton1}>
                <Text style={styles.cardText}>Card 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card} onPress={onPressButton2}>
                <Text style={styles.cardText}>Card 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card} onPress={onPressButton3}>
                <Text style={styles.cardText}>Card 3</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 20,
    },
    topButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'lightblue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    helpCenterContainer: {
        backgroundColor: 'lightgray',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
    },
    closeButton: {
        backgroundColor: 'lightblue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginTop: 10,
    },
    card: {
        width: '80%',
        height: 100,
        backgroundColor: 'lightblue',
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        elevation: 3,
    },
    cardText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default CommunityScreen;
