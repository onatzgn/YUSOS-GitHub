import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const Card = ({ title, time, location, healthIssues, onPressJoin, onPressDelete, disabled }) => {
    const [joined, setJoined] = useState(false);
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
                    <Icon name="user-circle-o" size={30} color="#888" />
                    <View style={styles.cardDetails}>
                        <Text style={styles.cardText}>{title}</Text>
                        <Text style={styles.cardTime}>{time}</Text>
                    </View>
                    <TouchableOpacity
                        style={[styles.actionButton, joined ? styles.joinedButton : null]}
                        onPress={handlePressJoin}
                        disabled={disabled}
                    >
                        {joined ? (
                            <FontAwesome name="check" size={20} color="white" />
                        ) : (
                            <FontAwesome name="exclamation" size={20} color="white" />
                        )}
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
            {expanded && (
                <View style={styles.detailsContainer}>
    <Text style={styles.detailsText}><Text style={styles.boldText}>Konum:</Text> {location}</Text>
    <Text style={styles.detailsText}><Text style={styles.boldText}>Sağlık Sorunları:</Text> {healthIssues}</Text>
                    {/* Add more details as needed */}
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
        marginBottom: 5,
        borderRadius: 15,
        elevation: 3, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.2, 
        shadowRadius: 2, 
    },
    cardContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 15, 
    },
    cardDetails: {
        flex: 1,
        marginLeft: 10,
    },
    cardText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    cardTime: {
        fontSize: 12,
        color: '#888',
    },
    detailsContainer: {
        paddingHorizontal: 10,
        paddingBottom: 10,
    },
    detailsText: {
        fontSize: 14,
        color: '#555',
        marginBottom: 5,
    },
    actionButton: {
        backgroundColor: '#FF565E',
        paddingVertical: 12, 
        paddingHorizontal: 18,
        borderRadius: 50,
    },
    joinedButton: {
        backgroundColor: '#3ED598', 
    },
    cancelButton: {
        backgroundColor: 'gray',
        padding: 10,
        borderRadius: 50,
        marginTop: 10,
        alignItems: 'center',
        paddingHorizontal: 15, 
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
