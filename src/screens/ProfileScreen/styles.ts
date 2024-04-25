import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    marginBottom: 10,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  name: {
    fontSize: 20,
    marginTop: 10,
  },
  editProfileButton: {
    marginTop: 5,
  },
  editProfileText: {
    color: 'blue',
  },
  scrollView: {
    flex: 1,
  },
  infoContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    height: 10 * 20, // 10 satırlık yükseklik
  },
  infoHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  activitiesContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    height: 10 * 20, // 10 satırlık yükseklik
  },
  activitiesHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
