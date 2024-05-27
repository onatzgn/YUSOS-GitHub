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
        setUserInfo(userSnapshot.data());
      } else {
        console.log('Kullanıcı bulunamadı');
      }
    } catch (error) {
      console.error('Kullanıcı bilgilerini alma işlemi başarısız oldu:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const fetchMedicalInfo = async () => {
    try {
      if (!userInfo || !userInfo.userId) {
        throw new Error('Kullanıcı bilgileri eksik');
      }
  
      const db = getFirestore();
      const userId = userInfo.userId;
      const medicalRef = doc(FIREBASE_DB, 'medicalInfo', userId);
      const medicalInfoSnapshot = await getDoc(medicalRef);
  
      if (medicalInfoSnapshot.exists()) {
        // Kullanıcı tıbbi bilgilerini userInfo içine bir alt nesne olarak ekleyebiliriz
        setUserInfo(prevUserInfo => ({
          ...prevUserInfo,
          medicalInfo: medicalInfoSnapshot.data()
        }));
      } else {
        console.log('Kullanıcı tıbbi bilgileri bulunamadı');
      }
    } catch (error) {
      console.error('Kullanıcı tıbbi bilgilerini alma işlemi başarısız oldu:', error);
    } finally {
      setLoading(false);
    }
  };
  
  
  // userInfo varsa kullanıcı bilgilerini ve tıbbi bilgileri al
  useEffect(() => {
    if (userInfo && userInfo.userId) {
      fetchUserInfo();
      fetchMedicalInfo();
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
            <Text style={styles.infoText}>Okul Numarası: {userInfo.schoolNumber}</Text>
            <Text style={styles.infoText}>E-posta: {userInfo.email}</Text>
            <Text style={styles.infoText}>Telefon: {userInfo.phoneNumber}</Text>
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
