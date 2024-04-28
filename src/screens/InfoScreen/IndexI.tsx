import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

const InfoScreen = () => {
    const [showInfo, setShowInfo] = useState(false);
    const [selectedInfo, setSelectedInfo] = useState('');
    const [selectedInfoText, setSelectedInfoText] = useState('');

    const handleContainerPress = (info, text) => {
        if (showInfo && selectedInfo === info) {
            setShowInfo(false);
            setSelectedInfo('');
            setSelectedInfoText('');
        } else {
            setSelectedInfo(info);
            setSelectedInfoText(text);
            setShowInfo(true);
        }
    };

    const handleCloseInfo = () => {
        setShowInfo(false);
        setSelectedInfo('');
        setSelectedInfoText('');
    };

    return (
        <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <Text style={styles.titleText}>Rehber</Text>
                <View style={styles.rowContainer}>
                    <TouchableOpacity style={styles.container} onPress={() => handleContainerPress('Acil Durum Toplanma Alanları', 'Yeditepe Üniversitesi Meydan')}>
                        <Text style={styles.heading}>Acil Durum Toplanma Alanları</Text>
                        <View style={styles.iconContainer}>
                            <FontAwesome6 name="person-shelter" size={120} color="#2e76e8" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container} onPress={() => handleContainerPress('Telefon Numaraları', 'Ambulans:112\nPolis:155\nİtfaiye:110')}>
                        <Text style={[styles.heading, {paddingBottom:20}]}>Telefon Numaraları</Text>
                        <View style={styles.iconContainer}>
                            <FontAwesome name="phone" size={120} color="#2e76e8" />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.rowContainer}>
                    <TouchableOpacity style={styles.container} onPress={() => handleContainerPress('Yardım Toplama Noktaları', 'Yeditepe Üniversitesi Sosyal Tesisler Binası - 1. Kat')}>
                        <Text style={[styles.heading, {paddingBottom:10}]}>Yardım Toplama Noktaları</Text>
                        <View style={styles.iconContainer}>
                            <Ionicons name="bag-add" size={120} color="#2e76e8" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container} onPress={() => handleContainerPress('İlk Yardım', 'İlk yardım bilgileri buraya yazılabilir')}>
                        <Text style={[styles.heading, {paddingBottom:20}]}>İlk Yardım</Text>
                        <View style={styles.iconContainer}>
                            <FontAwesome6 name="bandage" size={120} color="#2e76e8" />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.rowContainer}>
                    <TouchableOpacity style={styles.container} onPress={() => handleContainerPress('NULL1', 'NULL1 bilgileri')}>
                        <Text style={[styles.heading, { paddingBottom: 20 }]}>NULL1</Text>
                        <View style={styles.iconContainer}>
                            <AntDesign name="star" size={120} color="#2e76e8" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container} onPress={() => handleContainerPress('NULL2', 'NULL2 bilgileri')}>
                        <Text style={[styles.heading, {paddingBottom: 20}]}>NULL2</Text>
                        <View style={styles.iconContainer}>
                            <AntDesign name="star" size={120} color="#2e76e8" />
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <Modal
                visible={showInfo}
                transparent={true}
                animationType="fade"
                onRequestClose={handleCloseInfo}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
            
                        <TouchableOpacity
                            style={styles.closeButtonContainer}
                            onPress={handleCloseInfo}
                        >
                            
                            <AntDesign name="closecircleo" size={36} color="#2e76e8" />
                        </TouchableOpacity>

                        
                        <Text style={styles.modalTitle}>{selectedInfo}</Text>
                        
                        
                        <Text style={styles.modalText}>{selectedInfoText}</Text>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default InfoScreen;
