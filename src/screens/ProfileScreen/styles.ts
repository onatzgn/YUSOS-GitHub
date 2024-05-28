import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: height,
    paddingHorizontal: width * 0.08,
    marginTop: -width * 0.1,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: width * 0.08,
    position: 'relative',
  },
  profileImage: {
    width: width * 0.4,
    height: width * 0.4,
    borderRadius: width * 0.2,
  },
  name: {
    fontSize: width * 0.065,
    marginTop: width * 0.05,
  },
  changeProfileButton: {
    position: 'absolute',
    bottom: width * 0.1,
    right: width * 0.2,
    backgroundColor: '#2e76e8',
    borderRadius: width * 0.1,
    width: width * 0.13,
    height: width * 0.13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    width: width * 0.8,
    backgroundColor: 'white',
    marginBottom: width * 0.04,
    padding: width * 0.05,
    borderRadius: width * 0.05,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  infoHeading: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    marginBottom: width * 0.04,
  },
  infoText: {
    fontSize: width * 0.045,
    marginBottom: width * 0.02,
  },
  activitiesContainer: {
    width: width * 0.8,
    backgroundColor: 'white',
    marginBottom: width * 0.04,
    padding: width * 0.05,
    borderRadius: width * 0.05,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  activitiesHeading: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    marginBottom: width * 0.04,
  },
  activityText: {
    fontSize: width * 0.045,
    color: 'black',
    marginBottom: width * 0.02,
  },
  noActivityText: {
    fontSize: width * 0.045,
    color: 'gray',
    marginBottom: width * 0.02,
  },
  titleText: {
    fontSize: width * 0.08,
    fontWeight: 'bold',
    marginTop: width * 0.06,
    color: '#000',
    marginLeft: -width * 0.027,
  },
  medicalInfoItem: {
    flexDirection: 'row',
    marginBottom: width * 0.02,
  },
  medicalInfoTitle: {
    fontWeight: 'bold',
    marginRight: width * 0.02,
  },
  medicalInfoText: {
    flex: 1,
  },
  noMedicalInfoText: {
    fontStyle: 'italic',
    color: 'gray',
    marginTop: width * 0.02,
  },
});

export default styles;
