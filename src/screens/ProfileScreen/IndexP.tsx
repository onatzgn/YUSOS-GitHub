import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles'; // Importing styles from styles.ts

const ProfileScreen = () => {
  const [userInfo, setUserInfo] = useState({
    name: "John Doe",
    profileImage: require('./profile.jpg'),
    // Diğer kullanıcı bilgileri buraya eklenebilir
  });

  const changeProfileImage = () => {
    // Profil fotoğrafını değiştirme fonksiyonu
    // Şimdilik boş bırakıyoruz
  };

  const changeUserInfo = () => {
    // Kullanıcı bilgilerini değiştirme fonksiyonu
    // Şimdilik boş bırakıyoruz
  };

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.container}>
      <View>
        <Text> </Text>
        <View style={styles.profileContainer}>
          <Image source={userInfo.profileImage} style={styles.profileImage} />
          {/* "Change Profile Picture" butonu */}
          <TouchableOpacity onPress={changeProfileImage} style={styles.changeProfileButton}>
            <Text style={styles.plusSign}>+</Text>
          </TouchableOpacity>
          <Text style={styles.name}>{userInfo.name}</Text>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.infoHeaderContainer}>
            <Text style={styles.infoHeading}>Bilgiler</Text>
            {/* "Edit Profile" butonu */}
            <TouchableOpacity onPress={changeUserInfo} style={styles.editInfoButton}>
              <Text style={styles.plusSign}>+</Text>
            </TouchableOpacity>
          </View>
          {/* Kullanıcı bilgilerinin gösterileceği kutu buraya eklenebilir */}
          <Text>
            Kan Grubu: {"\n\n"}
            Aile İrtibat No: {"\n\n"}
            Sağlık Sorunları: {"\n\n"}
            Adres: {"\n\n"}
            Diğer:
          </Text>
        </View>
        <View style={styles.activitiesContainer}>
          <Text style={styles.activitiesHeading}>Geçmiş Faaliyetler</Text>
          {/* Kullanıcının katıldığı geçmiş faaliyetlerin gösterileceği kutu buraya eklenebilir */}
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
