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
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Text> </Text>
        <View style={styles.profileContainer}>
          <TouchableOpacity onPress={changeProfileImage}>
            <Image source={userInfo.profileImage} style={styles.profileImage} />
            {/* Profil resminin sağ alt köşesine tıklama işlevi buraya eklenebilir */}
          </TouchableOpacity>
          <Text style={styles.name}>{userInfo.name}</Text>
          <TouchableOpacity onPress={changeUserInfo} style={styles.editProfileButton}>
            <Text style={styles.editProfileText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoHeading}>User Information</Text>
          {/* Kullanıcı bilgilerinin gösterileceği kutu buraya eklenebilir */}
        </View>
        <View style={styles.activitiesContainer}>
          <Text style={styles.activitiesHeading}>Past Activities</Text>
          {/* Kullanıcının katıldığı geçmiş faaliyetlerin gösterileceği kutu buraya eklenebilir */}
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
