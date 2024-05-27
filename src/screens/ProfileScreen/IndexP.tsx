import React, { useContext, useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import styles from './styles'; 
import { UserContext } from '../../contexts/UserContext';
import { getFirestore, doc, getDoc } from 'firebase/firestore'; 
import { FIREBASE_DB } from '../../../FirebaseConfig';

const ProfileScreen = () => {
  const { userInfo, setUserInfo } = useContext(UserContext); 
  const [loading, setLoading] = useState(true);

  const changeProfileImage = () => {
    // Profil resmi değiştirme işlemleri burada yapılabilir
  };

  const fetchUserInfo = async () => {
    try {
      if (!userInfo || !userInfo.userId) {
        throw new Error('Kullanıcı bilgileri eksik');
      }

      const userId = userInfo.userId;
      const userRef = doc(FIREBASE_DB, 'users', userId);
      const userSnapshot = await getDoc(userRef);

      if (userSnapshot.exists()) {
        const userData = userSnapshot.data();

        // Medical Info'yu da alıp userInfo içine ekliyoruz
        const medicalRef = doc(FIREBASE_DB, 'medicalInfo', userId);
        const medicalSnapshot = await getDoc(medicalRef);

        if (medicalSnapshot.exists()) {
          userData.medicalInfo = medicalSnapshot.data();
        }

        setUserInfo(userData);
      } else {
        console.log('Kullanıcı bulunamadı');
      }
    } catch (error) {
      console.error('Kullanıcı bilgilerini alma işlemi başarısız oldu:', error);
    } finally {
      setLoading(false);
    }
  };
  
  // userInfo varsa kullanıcı bilgilerini ve tıbbi bilgileri al
  useEffect(() => {
    if (userInfo && userInfo.userId) {
      fetchUserInfo();
    }
  }, [userInfo]);

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <View>
          <Text style={styles.titleText}>Profil</Text>
          <View style={styles.profileContainer}>
            <Image source={{ uri: userInfo.profileImageUrl }} style={styles.profileImage} />
            <TouchableOpacity onPress={changeProfileImage} style={styles.changeProfileButton}>
              <Text style={styles.plusSign}>+</Text>
            </TouchableOpacity>
            <Text style={styles.name}>{userInfo.name}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Okul Numarası: {userInfo.schoolNumber || 'Bilgi bulunamadı'}</Text>
            <Text style={styles.infoText}>E-posta: {userInfo.email || 'Bilgi bulunamadı'}</Text>
            <Text style={styles.infoText}>Telefon: {userInfo.phoneNumber || 'Bilgi bulunamadı'}</Text>
            {/* Medical Info'yu gösteren bölüm */}
            {userInfo.medicalInfo && (
              <View style={styles.infoContainer}>
                <Text style={styles.infoHeading}>Tıbbi Bilgiler</Text>
                <Text style={styles.infoText}>Kan Grubu: {userInfo.medicalInfo.bloodType || 'Bilgi bulunamadı'}</Text>
                <Text style={styles.infoText}>Alerjiler: {userInfo.medicalInfo.allergies || 'Bilgi bulunamadı'}</Text>
                <Text style={styles.infoText}>Adres: {userInfo.medicalInfo.address || 'Bilgi bulunamadı'}</Text>
                <Text style={styles.infoText}>Aile İletişim: {userInfo.medicalInfo.familyContact || 'Bilgi bulunamadı'}</Text>
                <Text style={styles.infoText}>Sağlık Sorunları: {userInfo.medicalInfo.healthIssues || 'Bilgi bulunamadı'}</Text>
                {/* İhtiyaca göre diğer medical bilgileri de buraya eklenmeli */}
              </View>
            )}
          </View>
          <View style={styles.activitiesContainer}>
            <Text style={styles.activitiesHeading}>Geçmiş Faaliyetler</Text>
            {userInfo.activityHistory && userInfo.activityHistory.length > 0 ? (
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
      )}
    </ScrollView>
  );
};

export default ProfileScreen;
