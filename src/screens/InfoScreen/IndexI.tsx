import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Modal, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome6, FontAwesome, Ionicons } from '@expo/vector-icons';
import styles from './styles';
import { FIREBASE_DB } from '../../../FirebaseConfig';
import { setDoc, doc, getDoc } from 'firebase/firestore';

const InfoScreen = () => {
    const [showInfo, setShowInfo] = useState(false);
    const [selectedInfo, setSelectedInfo] = useState('');
    const [selectedInfoText, setSelectedInfoText] = useState('');
    const [editedInfoText, setEditedInfoText] = useState('');
    const [isAdmin, setIsAdmin] = useState(true); // Default value is false for non-admin users

    // Define separate state variables and functions for each container
    const [acilText, setAcilText] = useState('');
    const [telefonText, setTelefonText] = useState('');
    const [yardimText, setYardimText] = useState('');
    const [ilkYardimText, setIlkYardimText] = useState('');
    const [null1Text, setNull1Text] = useState('');
    const [null2Text, setNull2Text] = useState('');

    useEffect(() => {
        // Fetch data from Firestore when the component mounts
        const fetchData = async () => {
            try {
                const docRef = doc(FIREBASE_DB, 'rehberInfo', 'infoData');
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    setAcilText(data.acilText || '');
                    setTelefonText(data.telefonText || '');
                    setYardimText(data.yardimText || '');
                    setIlkYardimText(data.ilkYardimText || '');
                    setNull1Text(data.null1Text || '');
                    setNull2Text(data.null2Text || '');
                } else {
                    console.log('No such document!');
                }
            } catch (error) {
                console.error('Error fetching document: ', error);
            }
        };

        fetchData();
    }, []);

    const handleContainerPress = (info, text, setTextFunction) => {
        setSelectedInfo(info);
        setSelectedInfoText(text);
        setShowInfo(true);
        setEditedInfoText(text);
    };

    const handleCloseInfo = () => {
        setShowInfo(false);
        setSelectedInfo('');
        setSelectedInfoText('');
        setEditedInfoText('');
    };

    const handleSaveChanges = async (setTextFunction, field) => {
        try {
            setTextFunction(editedInfoText); // Update the appropriate state variable
            setSelectedInfoText(editedInfoText);
            handleCloseInfo();
            setEditedInfoText(''); // Reset edited text after saving changes

            // Save changes to Firestore
            const docRef = doc(FIREBASE_DB, 'rehberInfo', 'infoData');
            await setDoc(docRef, { [field]: editedInfoText }, { merge: true });
        } catch (error) {
            console.error('Error saving changes: ', error);
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <Text style={styles.titleText}>Rehber</Text>
                <View style={styles.rowContainer}>
                    <TouchableOpacity
                        style={styles.container} onPress={() => handleContainerPress('Acil Durum Toplanma Alanları', acilText, setAcilText)}>
                        <Text style={styles.heading}>Acil Durum Toplanma Alanları</Text>
                        <View style={styles.iconContainer}>
                            <FontAwesome6 name="person-shelter" size={120} color="#2e76e8" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container} onPress={() => handleContainerPress('Telefon Numaraları', telefonText, setTelefonText)}>
                        <Text style={[styles.heading, { paddingBottom: 20 }]}>Telefon Numaraları</Text>
                        <View style={styles.iconContainer}>
                            <FontAwesome name="phone" size={120} color="#2e76e8" />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.rowContainer}>
                    <TouchableOpacity style={styles.container} onPress={() => handleContainerPress('Yardım Toplama Noktaları', yardimText, setYardimText)}>
                        <Text style={[styles.heading, { paddingBottom: 10 }]}>Yardım Toplama Noktaları</Text>
                        <View style={styles.iconContainer}>
                            <Ionicons name="bag-add" size={120} color="#2e76e8" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container} onPress={() => handleContainerPress('İlk Yardım', ilkYardimText, setIlkYardimText)}>
                        <Text style={[styles.heading, { paddingBottom: 20 }]}>İlk Yardım</Text>
                        <View style={styles.iconContainer}>
                            <FontAwesome6 name="bandage" size={120} color="#2e76e8" />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.rowContainer}>
                    <TouchableOpacity style={styles.container} onPress={() => handleContainerPress('NULL1', null1Text, setNull1Text)}>
                        <Text style={[styles.heading, { paddingBottom: 20 }]}>NULL1</Text>
                        <View style={styles.iconContainer}>
                            <AntDesign name="star" size={120} color="#2e76e8" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container} onPress={() => handleContainerPress('NULL2', null2Text, setNull2Text)}>
                        <Text style={[styles.heading, { paddingBottom: 20 }]}>NULL2</Text>
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
                        <TextInput
                            style={styles.modalTextInput}
                            onChangeText={setEditedInfoText}
                            value={editedInfoText}
                            multiline={true}
                            editable={isAdmin} // Only allow editing if the user is an admin
                        />
                        {isAdmin && ( // Show the "Save Changes" button only if the user is an admin
                            <TouchableOpacity
                                style={styles.saveButton}
                                onPress={() => handleSaveChanges(selectedInfo === 'Acil Durum Toplanma Alanları' ? setAcilText :
                                    selectedInfo === 'Telefon Numaraları' ? setTelefonText :
                                        selectedInfo === 'Yardım Toplama Noktaları' ? setYardimText :
                                            selectedInfo === 'İlk Yardım' ? setIlkYardimText :
                                                selectedInfo === 'NULL1' ? setNull1Text :
                                                    setNull2Text,
                                    selectedInfo === 'Acil Durum Toplanma Alanları' ? 'acilText' :
                                        selectedInfo === 'Telefon Numaraları' ? 'telefonText' :
                                            selectedInfo === 'Yardım Toplama Noktaları' ? 'yardimText' :
                                                selectedInfo === 'İlk Yardım' ? 'ilkYardimText' :
                                                    selectedInfo === 'NULL1' ? 'null1Text' :
                                                        'null2Text')}>
                                <Text style={styles.saveButtonText}>Save Changes</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default InfoScreen;
