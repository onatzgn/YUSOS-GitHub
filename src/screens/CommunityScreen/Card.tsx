import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const windowDimensions = Dimensions.get('window');
const windowWidth = windowDimensions.width;
const windowHeight = windowDimensions.height;

const Card = ({title, time, location, healthIssues, onPressJoin, onPressDelete, isHelped, disabled }) => {
    const [joined, setJoined] = useState(isHelped);
    const [expanded, setExpanded] = useState(false);

    const handlePressJoin = () => {
        if (!joined) {
            Alert.alert(
                'Yardım İsteği',
                'Yardıma gitmek istediğinize emin misiniz?',
                [
                    {
                        text: 'Hayır',
                        style: 'cancel',
                    },
                    {
                        text: 'Evet',
                        onPress: () => {
                            setJoined(true);
                            onPressJoin();
                            Alert.alert(
                                'Yardım Bildirildi',
                                'Yardıma gideceğiniz bildirilmiştir.'
                            );
                        },
                    },
                ],
                { cancelable: false }
            );
        }
    };

    const handleToggleExpand = () => {
        setExpanded(!expanded);
    };

    const handleCancel = () => {
        Alert.alert(
            'Çağrıyı İptal Et',
            'Çağrıyı iptal etmek istediğinize emin misiniz?',
            [
                {
                    text: 'Hayır',
                    style: 'cancel',
                },
                {
                    text: 'Evet',
                    onPress: () => {
                        setExpanded(false); 
                        onPressDelete();
                    },
                },
            ],
            { cancelable: false }
        );
    };

    return (
        <View style={styles.card}>
            <TouchableOpacity onPress={handleToggleExpand}>
                <View style={styles.cardContent}>
                    <Icon name="user-circle-o" size={windowWidth * 0.08} color="#888" />
                    <View style={styles.cardDetails}>
                        <Text style={styles.cardText}>{title}</Text>
                        <Text style={styles.cardTime}>{time}</Text>
                    </View>
                    <TouchableOpacity
                        style={[styles.actionButton, joined ? styles.joinedButton : null]}
                        onPress={handlePressJoin}
                        disabled={isHelped}
                    >
                        {joined ? (
                            <FontAwesome name="check" size={windowWidth * 0.06} color="white" />
                        ) : (
                            <FontAwesome name="exclamation" size={windowWidth * 0.06} color="white" />
                        )}
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
            {expanded && (
                <View style={styles.detailsContainer}>
                    <Text style={styles.detailsText}><Text style={styles.boldText}>Konum:</Text> {location}</Text>
                    <Text style={styles.detailsText}><Text style={styles.boldText}>Sağlık Sorunları:</Text> {healthIssues}</Text>
                    <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
                        <Text style={styles.cancelButtonText}>Çağrıyı İptal Et</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: '100%',
        backgroundColor: 'white',
        marginBottom: windowHeight * 0.006,
        borderRadius: windowWidth * 0.05,
        elevation: 3, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.2, 
        shadowRadius: 2, 
    },
    helpedCard: {
        backgroundColor: '#d3ffd3', // Açık yeşil tonunda bir renk
    },
    cardContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: windowWidth * 0.027,
        paddingVertical: windowHeight * 0.015, 
    },
    cardDetails: {
        flex: 1,
        marginLeft: windowWidth * 0.027,
    },
    cardText: {
        fontSize: windowWidth * 0.045,
        fontWeight: 'bold',
        marginBottom: windowHeight * 0.008,
    },
    cardTime: {
        fontSize: windowWidth * 0.03,
        color: '#888',
    },
    detailsContainer: {
        paddingHorizontal: windowWidth * 0.027,
        paddingBottom: windowHeight * 0.015,
    },
    detailsText: {
        fontSize: windowWidth * 0.035,
        color: '#555',
        marginBottom: windowHeight * 0.008,
    },
    actionButton: {
        backgroundColor: '#FF565E',
        paddingVertical: windowHeight * 0.012, 
        paddingHorizontal: windowWidth * 0.040,
        borderRadius: windowWidth * 0.1,
    },
    joinedButton: {
        backgroundColor: '#3ED598', 
    },
    cancelButton: {
        backgroundColor: 'gray',
        padding: windowHeight * 0.014,
        borderRadius: windowWidth * 0.1,
        marginTop: windowHeight * 0.01,
        alignItems: 'center',
        paddingHorizontal: windowWidth * 0.04, 
    },
    cancelButtonText: {
        color: 'white',
        fontWeight: "bold",
    },
    boldText: {
        fontWeight: 'bold',
    },
});

export default Card;