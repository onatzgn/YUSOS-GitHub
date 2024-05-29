import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { getFirestore, collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { FIREBASE_DB } from '../../../FirebaseConfig';

const Duyurular = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const q = query(collection(FIREBASE_DB, "announcements"), orderBy("date", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedAnnouncements = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setAnnouncements(fetchedAnnouncements);
    });
    return () => unsubscribe(); // Cleanup subscription
  }, []);

  return (
    <View>
      {announcements.map(item => (
        <View key={item.id} style={styles.announcementContainer}>
          <Text style={styles.announcementTitle}>{item.title}</Text>
          <Text style={styles.announcementBody}>{item.body}</Text>
          <Text style={styles.date}>{item.date}</Text>
        </View>
      ))}
    </View>
  );
};

export default Duyurular;
