import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Modal, TextInput, Alert, SafeAreaView, ScrollView } from 'react-native';
import HeaderMain from '../../components/HeaderMain/IndexHeader';
import Duyurular from '../../components/Duyurular';
import styles from './styles';
import { NavigationProp } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from '../CustomDrawerContent/DrawerContent';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { FIREBASE_DB } from '../../../FirebaseConfig';

const Drawer = createDrawerNavigator();

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const HomeContent = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [newAnnouncementTitle, setNewAnnouncementTitle] = useState('');
  const [newAnnouncementBody, setNewAnnouncementBody] = useState('');
  const [isAdmin, setIsAdmin] = useState(true); // Manuel olarak admin yetkisi belirleyin
  
  const addNewAnnouncement = async () => {
    try {
      const date = new Date().toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
      const docRef = await addDoc(collection(FIREBASE_DB, "announcements"), {
        title: newAnnouncementTitle,
        body: newAnnouncementBody,
        date
      });
      console.log("Document written with ID: ", docRef.id);
      setModalVisible(false);
    } catch (error) {
      console.error("Error adding document: ", error);
      Alert.alert("Error", "Failed to add new announcement. Please try again.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderMain />
      <ScrollView>
        <View style={styles.contentContainer}>
          {isAdmin && (
            <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
              <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
          )}
          <Duyurular />
        </View>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity style={styles.modalOverlay} onPress={() => setModalVisible(false)}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.input}
              placeholder="Duyuru Başlığı"
              value={newAnnouncementTitle}
              onChangeText={setNewAnnouncementTitle}
            />
            <TextInput
              style={styles.input}
              placeholder="Duyuru İçeriği"
              value={newAnnouncementBody}
              onChangeText={setNewAnnouncementBody}
            />
            <TouchableOpacity style={styles.modalButton} onPress={addNewAnnouncement}>
              <Text style={styles.buttonText}>Ekle</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};

const Homescreen = ({ navigation }: RouterProps) => {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name=" " component={HomeContent} />
    </Drawer.Navigator>
  );
};

export default Homescreen;
