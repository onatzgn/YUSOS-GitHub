import React, { useContext, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import styles from './styles'; 
import { FontAwesome5 } from '@expo/vector-icons';
import { UserContext } from '../../contexts/UserContext';

const ProfileScreen = () => {
  const { userInfo, setUserInfo } = useContext(UserContext); // useContext burada doğru şekilde kullanılmalı
  const [isEditingInfo, setIsEditingInfo] = useState(false);

  const changeProfileImage = () => {
    // Profil resmi değiştirme işlemleri burada yapılabilir
  };

  const changeUserInfo = () => {
    setIsEditingInfo(!isEditingInfo);
  };

  const saveUserInfo = () => {
    setIsEditingInfo(false);
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
          <Text style={styles.name}>John Doe</Text>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.infoHeaderContainer}>
            <Text style={styles.infoHeading}>Bilgiler</Text>
            <TouchableOpacity onPress={changeUserInfo} style={styles.editInfoButton}>
              <FontAwesome5 name="pen" size={16} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoTitle}>Kan Grubu:</Text>
            {isEditingInfo ? (
              <TextInput
                style={styles.userInfoInput}
                value={userInfo.bloodType}
                onChangeText={(text) => setUserInfo({ ...userInfo, bloodType: text })}
              />
            ) : (
              <Text style={styles.userInfoText}>{userInfo.bloodType}</Text>
            )}
          </View>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoTitle}>Aile İrtibat No:</Text>
            {isEditingInfo ? (
              <TextInput
                style={styles.userInfoInput}
                value={userInfo.familyContact}
                onChangeText={(text) => setUserInfo({ ...userInfo, familyContact: text })}
              />
            ) : (
              <Text style={styles.userInfoText}>{userInfo.familyContact}</Text>
            )}
          </View>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoTitle}>Sağlık Sorunları:</Text>
            {isEditingInfo ? (
              <TextInput
                style={styles.userInfoInput}
                value={userInfo.healthIssues}
                onChangeText={(text) => setUserInfo({ ...userInfo, healthIssues: text })}
              />
            ) : (
              <Text style={styles.userInfoText}>{userInfo.healthIssues}</Text>
            )}
          </View>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoTitle}>Adres:</Text>
            {isEditingInfo ? (
              <TextInput
                style={styles.userInfoInput}
                value={userInfo.adress}
                onChangeText={(text) => setUserInfo({ ...userInfo, adress: text })}
              />
            ) : (
              <Text style={styles.userInfoText}>{userInfo.adress}</Text>
            )}
          </View>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoTitle}>Alerjiler:</Text>
            {isEditingInfo ? (
              <TextInput
                style={styles.userInfoInput}
                value={userInfo.alergies}
                onChangeText={(text) => setUserInfo({ ...userInfo, alergies: text })}
              />
            ) : (
              <Text style={styles.userInfoText}>{userInfo.alergies}</Text>
            )}
          </View>
        </View>
        <View style={styles.activitiesContainer}>
          <Text style={styles.activitiesHeading}>Geçmiş Faaliyetler</Text>
          {userInfo.activityHistory.length > 0 ? (
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
