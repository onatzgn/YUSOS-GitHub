import React, { useContext, useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native';
import styles from './styles';
import { FontAwesome5 } from '@expo/vector-icons';
import { UserContext } from '../../contexts/UserContext';
import { FIREBASE_DB } from '../../../FirebaseConfig';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

const ProfileScreen = () => {
  const { user, userInfo, setUserInfo } = useContext(UserContext);
  const [isEditingInfo, setIsEditingInfo] = useState(false);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        if (user && user.uid) {
          const userDocRef = doc(FIREBASE_DB, 'users', user.uid);
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            const userData = userDoc.data();
            // Tıbbi bilgileri ayrıca güncelleyin
            setUserInfo({ ...userData, ...userData.medicalInfo, medicalInfo: userData.medicalInfo });
          } else {
            console.log('No such document!');
          }
        } else {
          console.log('User info is empty or uid is missing.');
        }
      } catch (error) {
        console.error('Error fetching user info: ', error);
      }
    };
  
    fetchUserInfo();
  }, [user]);
  
  

  const changeProfileImage = () => {
    // Profil resmi değiştirme işlemleri burada yapılabilir
  };

  const changeUserInfo = () => {
    setIsEditingInfo(!isEditingInfo);
  };

  const saveUserInfo = async () => {
    try {
      const userDocRef = doc(FIREBASE_DB, 'users', user.uid);
      await updateDoc(userDocRef, { ...userInfo }); // Tüm kullanıcı bilgilerini güncelleyin
      setIsEditingInfo(false);
      Alert.alert('Bilgiler Kaydedildi', 'Bilgileriniz başarıyla güncellendi.');
    } catch (error) {
      console.error('Error updating user info: ', error);
      Alert.alert('Hata', 'Bilgiler güncellenirken bir hata oluştu.');
    }
  };
  
  

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.container}>
      <View>
        <Text style={styles.titleText}>Profil</Text>
        <View style={styles.profileContainer}>
          <Image source={require('./profile.jpg')} style={styles.profileImage} />
          <TouchableOpacity onPress={changeProfileImage} style={styles.changeProfileButton}>
            <Text style={styles.plusSign}>+</Text>
          </TouchableOpacity>
          <Text style={styles.name}>{userInfo.name}</Text>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.infoHeaderContainer}>
            <Text style={styles.infoHeading}>Bilgiler</Text>
            <TouchableOpacity onPress={changeUserInfo} style={styles.editInfoButton}>
              <FontAwesome5 name="pen" size={16} color="black" />
            </TouchableOpacity>
          </View>
          {isEditingInfo ? (
            <View>
              <View style={styles.userInfoItem}>
                <Text style={styles.userInfoTitle}>Kan Grubu:</Text>
                <TextInput
                  style={styles.userInfoInput}
                  value={userInfo.bloodType}
                  onChangeText={(text) => setUserInfo({ ...userInfo, bloodType: text })}
                />
              </View>
              <View style={styles.userInfoItem}>
                <Text style={styles.userInfoTitle}>Aile İrtibat No:</Text>
                <TextInput
                  style={styles.userInfoInput}
                  value={userInfo.familyContact}
                  onChangeText={(text) => setUserInfo({ ...userInfo, familyContact: text })}
                />
              </View>
              <View style={styles.userInfoItem}>
                <Text style={styles.userInfoTitle}>Sağlık Sorunları:</Text>
                <TextInput
                  style={styles.userInfoInput}
                  value={userInfo.healthIssues}
                  onChangeText={(text) => setUserInfo({ ...userInfo, healthIssues: text })}
                />
              </View>
              <View style={styles.userInfoItem}>
                <Text style={styles.userInfoTitle}>Adres:</Text>
                <TextInput
                  style={styles.userInfoInput}
                  value={userInfo.address}
                  onChangeText={(text) => setUserInfo({ ...userInfo, address: text })}
                />
              </View>
              <View style={styles.userInfoItem}>
                <Text style={styles.userInfoTitle}>Alerjiler:</Text>
                <TextInput
                  style={styles.userInfoInput}
                  value={userInfo.allergies}
                  onChangeText={(text) => setUserInfo({ ...userInfo, allergies: text })}
                />
              </View>
              <TouchableOpacity onPress={saveUserInfo} style={styles.saveButton}>
                <Text style={styles.saveButtonText}>Kaydet</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <View style={styles.userInfoItem}>
                <Text style={styles.userInfoTitle}>Kan Grubu:</Text>
                <Text style={styles.userInfoText}>{userInfo.bloodType}</Text>
              </View>
              <View style={styles.userInfoItem}>
                <Text style={styles.userInfoTitle}>Aile İrtibat No:</Text>
                <Text style={styles.userInfoText}>{userInfo.familyContact}</Text>
              </View>
              <View style={styles.userInfoItem}>
                <Text style={styles.userInfoTitle}>Sağlık Sorunları:</Text>
                <Text style={styles.userInfoText}>{userInfo.healthIssues}</Text>
              </View>
              <View style={styles.userInfoItem}>
                <Text style={styles.userInfoTitle}>Adres:</Text>
                <Text style={styles.userInfoText}>{userInfo.address}</Text>
              </View>
              <View style={styles.userInfoItem}>
                <Text style={styles.userInfoTitle}>Alerjiler:</Text>
                <Text style={styles.userInfoText}>{userInfo.allergies}</Text>
              </View>
            </View>
          )}
        </View>
        <View style={styles.activitiesContainer}>
          <Text style={styles.activitiesHeading}>Geçmiş Faaliyetler</Text>
          {userInfo.activityHistory?.length > 0 ? (
            userInfo.activityHistory.map((activity, index) => (
              <Text key={index} style={styles.activityText}>
                {activity.date} - {activity.type}
              </Text>
            ))
          ) : (
            <Text style={styles.noActivityText}>Henüz bir faaliyet yok</Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
