// Duyurular/index.tsx
import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const announcements = [
  {
    id: '1',
    title: 'Şiddetli Fırtına',
    body: "İstanbul'da şiddetli fırtına bekleniyor. Uyarı!",
    date: '19 Mart',
  },
  // Add more announcements here
];

const Duyurular = () => {
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
