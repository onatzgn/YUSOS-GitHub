import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Modal, TextInput } from 'react-native';
import styles from './styles'; 
import { FontAwesome5 } from '@expo/vector-icons';

const ProfileScreen = () => {
  const [userInfo, setUserInfo] = useState({
    name: "John Doe",
    profileImage: require('./profile.jpg'),
    kanGrubu: "",
    aileIrtibatNo: "",
    saglikSorunlari: "",
    adres: "",
    diger: ""
  });

  const [isEditingInfo, setIsEditingInfo] = useState(false); 

  const changeProfileImage = () => {

  };

  const changeUserInfo = () => {
    if (isEditingInfo) {

      setIsEditingInfo(false); 
    } else {
      setIsEditingInfo(true); 
    }
  };


  const saveUserInfo = () => {
    setIsEditingInfo(false); 
   
  };

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.container}>
      <View>
      <Text style={styles.titleText}>Profil</Text>
        <View style={styles.profileContainer}>
          <Image source={userInfo.profileImage} style={styles.profileImage} />
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
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoTitle}>Kan Grubu:</Text>
            {isEditingInfo ? (
              <TextInput
                style={styles.userInfoInput}
                value={userInfo.kanGrubu}
                onChangeText={(text) => setUserInfo({ ...userInfo, kanGrubu: text })}
              />
            ) : (
              <Text style={styles.userInfoText}>{userInfo.kanGrubu}</Text>
            )}
          </View>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoTitle}>Aile İrtibat No:</Text>
            {isEditingInfo ? (
              <TextInput
                style={styles.userInfoInput}
                value={userInfo.aileIrtibatNo}
                onChangeText={(text) => setUserInfo({ ...userInfo, aileIrtibatNo: text })}
              />
            ) : (
              <Text style={styles.userInfoText}>{userInfo.aileIrtibatNo}</Text>
            )}
          </View>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoTitle}>Sağlık Sorunları:</Text>
            {isEditingInfo ? (
              <TextInput
                style={styles.userInfoInput}
                value={userInfo.saglikSorunlari}
                onChangeText={(text) => setUserInfo({ ...userInfo, saglikSorunlari: text })}
              />
            ) : (
              <Text style={styles.userInfoText}>{userInfo.saglikSorunlari}</Text>
            )}
          </View>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoTitle}>Adres:</Text>
            {isEditingInfo ? (
              <TextInput
                style={styles.userInfoInput}
                value={userInfo.adres}
                onChangeText={(text) => setUserInfo({ ...userInfo, adres: text })}
              />
            ) : (
              <Text style={styles.userInfoText}>{userInfo.adres}</Text>
            )}
          </View>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoTitle}>Diğer:</Text>
            {isEditingInfo ? (
              <TextInput
                style={styles.userInfoInput}
                value={userInfo.diger}
                onChangeText={(text) => setUserInfo({ ...userInfo, diger: text })}
              />
            ) : (
              <Text style={styles.userInfoText}>{userInfo.diger}</Text>
            )}
          </View>
        </View>
        <View style={styles.activitiesContainer}>
          <Text style={styles.activitiesHeading}>Geçmiş Faaliyetler</Text>
          
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. {"\n"}
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{"\n\n"}
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.{"\n"}
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.{"\n"}
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.{"\n"}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </View>
      </View>

      
      
    </ScrollView>
  );
};

export default ProfileScreen;
