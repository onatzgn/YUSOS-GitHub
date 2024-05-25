import React, { useContext, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native';
import styles from './styles';
import { FontAwesome5 } from '@expo/vector-icons';
import { UserContext } from '../../contexts/UserContext';
import { FIREBASE_DB } from '../../../FirebaseConfig';
import { doc, updateDoc } from 'firebase/firestore';

const ProfileScreen = () => {
  const { userInfo, setUserInfo } = useContext(UserContext); // useContext burada doğru şekilde kullanılmalı
  const [isEditingInfo, setIsEditingInfo] = useState(false);

  const changeProfileImage = () => {
    // Profil resmi değiştirme işlemleri burada yapılabilir
  };

  const changeUserInfo = () => {
    setIsEditingInfo(!isEditingInfo);
  };

  const saveUserInfo = async () => {
    try {
      const userDocRef = doc(FIREBASE_DB, 'users', user.uid);
      await updateDoc(userDocRef, userInfo); // Update the Firestore document with new user info
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
                  value={userInfo.adress}
                  onChangeText={(text) => setUserInfo({ ...userInfo, adress: text })}
                />
              </View>
              <View style={styles.userInfoItem}>
                <Text style={styles.userInfoTitle}>Alerjiler:</Text>
                <TextInput
                  style={styles.userInfoInput}
                  value={userInfo.alergies}
                  onChangeText={(text) => setUserInfo({ ...userInfo, alergies: text })}
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
                <Text style={styles.userInfoText}>{userInfo.adress}</Text>
              </View>
              <View style={styles.userInfoItem}>
                <Text style={styles.userInfoTitle}>Alerjiler:</Text>
                <Text style={styles.userInfoText}>{userInfo.alergies}</Text>
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
