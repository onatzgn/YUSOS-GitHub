import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles'; // Import styles from styles.ts

const InfoScreen = () => {
    const [showInfo, setShowInfo] = useState(false); // State to track if info container is visible
    const [selectedInfo, setSelectedInfo] = useState(''); // State to track which info container is selected

    const handleContainerPress = (info: string) => {
        // If the selected info is already open, close it
        if (showInfo && selectedInfo === info) {
            setShowInfo(false);
            setSelectedInfo('');
        } else {
            setSelectedInfo(info); // Set the selected info
            setShowInfo(true); // Show the info container
        }
    };

    const handleCloseInfo = () => {
        setShowInfo(false); // Hide the info container
        setSelectedInfo(''); // Reset selected info
    };

    return (
        <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <View style={styles.rowContainer}>
                    <TouchableOpacity style={styles.container} onPress={() => handleContainerPress('Acil Durum Toplanma Alanları')}>
                        <Text style={styles.heading}>Acil Durum Toplanma Alanları</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container} onPress={() => handleContainerPress('Telefon Numaraları')}>
                        <Text style={styles.heading}>Telefon Numaraları</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.rowContainer}>
                    <TouchableOpacity style={styles.container} onPress={() => handleContainerPress('Yardım Toplama Noktaları')}>
                        <Text style={styles.heading}>Yardım Toplama Noktaları</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container} onPress={() => handleContainerPress('İlk Yardım')}>
                        <Text style={styles.heading}>İlk Yardım</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.rowContainer}>
                    <TouchableOpacity style={styles.container} onPress={() => handleContainerPress('NULL1')}>
                        <Text style={styles.heading}>NULL1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container} onPress={() => handleContainerPress('NULL2')}>
                        <Text style={styles.heading}>NULL2</Text>
                    </TouchableOpacity>
                </View>
                {/* Add more row containers for additional sections as needed */}
            </ScrollView>
            
            {/* Info container */}
            {showInfo && (
                <View style={styles.infoContainer}>
                    <TouchableOpacity
                        style={styles.closeButtonContainer}
                        onPress={handleCloseInfo}
                    >
                        <Text style={styles.closeButtonText}>X</Text>
                    </TouchableOpacity>

                    <Text>{selectedInfo}</Text>
                    {/* Add content for the selected info */}
                </View>
            )}
        </View>
    );
};

export default InfoScreen;
