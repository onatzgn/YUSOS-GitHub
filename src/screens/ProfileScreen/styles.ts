import { StyleSheet, Dimensions } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: height,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
    position: 'relative',
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
  changeProfileButton: {
    position: 'absolute',
    bottom: 35,
    right: 100,
    backgroundColor: 'blue',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  editInfoButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'blue',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusSign: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  infoContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20, // Adjusting border radius for oval-ness
    padding: 10,
    marginBottom: 10,
    position: 'relative',
    width: width * 0.8,
  },
  infoHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  infoHeading: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  activitiesContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20, // Adjusting border radius for oval-ness
    padding: 10,
    marginBottom: 10,
    position: 'relative',
    width: width * 0.8,
  },
  activitiesHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default styles;
