// Duyurular/styles.ts
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
