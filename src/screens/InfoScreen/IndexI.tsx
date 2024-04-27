import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Import AntDesign icon
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import styles from './styles';

const InfoScreen = () => {
    const [showInfo, setShowInfo] = useState(false);
    const [selectedInfo, setSelectedInfo] = useState('');

    const handleContainerPress = (info) => {
        if (showInfo && selectedInfo === info) {
            setShowInfo(false);
            setSelectedInfo('');
        } else {
            setSelectedInfo(info);
            setShowInfo(true);
        }
    };

    const handleCloseInfo = () => {
        setShowInfo(false);
        setSelectedInfo('');
    };

    return (
        <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <View style={styles.rowContainer}>
                    <TouchableOpacity style={styles.container} onPress={() => handleContainerPress('Acil Durum Toplanma Alanları')}>
                        <Text style={styles.heading}>Acil Durum Toplanma Alanları</Text>
                        {/* Wrap the icon in a View to center it */}
                        <View style={styles.iconContainer}>
                            <FontAwesome6 name="person-shelter" size={120} color="#2e76e8" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container} onPress={() => handleContainerPress('Telefon Numaraları')}>
                        <Text style={[styles.heading, {paddingBottom:20}]}>Telefon Numaraları</Text>
                        <View style={styles.iconContainer}>
                            <FontAwesome name="phone" size={120} color="#2e76e8" />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.rowContainer}>
                    <TouchableOpacity style={styles.container} onPress={() => handleContainerPress('Yardım Toplama Noktaları')}>
                        <Text style={[styles.heading, {paddingBottom:10}]}>Yardım Toplama Noktaları</Text>
                        <View style={styles.iconContainer}>
                            <Ionicons name="bag-add" size={120} color="#2e76e8" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container} onPress={() => handleContainerPress('İlk Yardım')}>
                        <Text style={[styles.heading, {paddingBottom:20}]}>İlk Yardım</Text>
                        <View style={styles.iconContainer}>
                            <FontAwesome6 name="bandage" size={120} color="#2e76e8" />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.rowContainer}>
                    <TouchableOpacity style={styles.container} onPress={() => handleContainerPress('NULL1')}>
                        <Text style={[styles.heading, { paddingBottom: 20 }]}>NULL1</Text>
                        <View style={styles.iconContainer}>
                            <AntDesign name="star" size={120} color="#2e76e8" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container} onPress={() => handleContainerPress('NULL2')}>
                        <Text style={[styles.heading, {paddingBottom: 20}]}>NULL2</Text>
                        <View style={styles.iconContainer}>
                            <AntDesign name="star" size={120} color="#2e76e8" />
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            {showInfo && (
                <View style={styles.infoContainer}>
                    <TouchableOpacity
                        style={styles.closeButtonContainer}
                        onPress={handleCloseInfo}
                    >
                        <Text style={styles.closeButtonText}>X</Text>
                    </TouchableOpacity>

                    {/* Render selectedInfo within a Text component */}
                    <Text>{selectedInfo}</Text>
                </View>
            )}
        </View>
    );
};

export default InfoScreen;
