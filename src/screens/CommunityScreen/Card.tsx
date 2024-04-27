import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome'; // Varsayılan profil resmi için FontAwesome ikonlarını kullanıyoruz


const Card = ({ title, onPressJoin, disabled }) => {
    const [joined, setJoined] = useState(false);

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

    return (
        <View style={[styles.card, { height: 70 }]}>
            <Icon name="user-circle-o" size={30} color="#888" />
            <Text style={styles.cardText}>{title}</Text>
            <TouchableOpacity
                style={[styles.addButton, joined ? styles.joinedButton : null]}
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
    );
};

const styles = StyleSheet.create({
    card: {
        width: '100%',
        backgroundColor: 'white',
        marginBottom: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 15,
        paddingHorizontal: 10,
        elevation: 3, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.2, 
        shadowRadius: 2, 
    },
    cardText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 60,
    },
    addButton: {
        backgroundColor: '#FF565E',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
    },
    joinedButton: {
        backgroundColor: '#3ED598',
    },
});

export default Card;
