// Duyurular/styles.ts
/*
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  announcementContainer: {
    backgroundColor: '#ffffff', // Assuming a white background for the announcement container
    padding: 20,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 1, // for Android shadow
    shadowColor: '#000000', // for iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.1,
  },
  announcementTitle: {
    fontWeight: 'bold',
    marginBottom: 4,
    fontSize: 16,
  },
  announcementBody: {
    fontSize: 14,
  },
  date: {
    fontSize: 12,
    marginTop: 8,
    color: '#888888',
  },
});

export default styles;
*/
import { StyleSheet, Dimensions } from 'react-native';

const windowDimensions = Dimensions.get('window');
const windowWidth = windowDimensions.width;
const windowHeight = windowDimensions.height;

const styles = StyleSheet.create({
  announcementContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginHorizontal: windowWidth * 0.04, 
    marginVertical: windowHeight * 0.04, 
    borderRadius: 8,
    elevation: 1,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.1,
  },
  announcementTitle: {
    fontWeight: 'bold',
    marginBottom: 4,
    fontSize: 16,
  },
  announcementBody: {
    fontSize: 14,
  },
  date: {
    fontSize: 12,
    marginTop: windowHeight * 0.02, // Ekran yüksekliğine göre ayarlandı.
    color: '#888888',
  },
});

export default styles;
