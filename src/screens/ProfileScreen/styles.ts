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
    backgroundColor: '#2e76e8',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  editInfoButton: {
    position: 'absolute',
    top: -7,
    right: 0,
    //backgroundColor: '#2e76e8',
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
    /*
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
    position: 'relative',
    width: width * 0.8,
    */
    width: width * 0.8,
    backgroundColor: 'white',
    marginBottom: 10,
    position: 'realtive',
    justifyContent: 'space-between',
    borderRadius: 20,
    padding: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
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
  userInfoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  userInfoTitle: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  userInfoInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 5,
  },
  userInfoText: {
    flex: 1,
  },
  activitiesContainer: {
    width: width * 0.8,
    backgroundColor: 'white',
    marginBottom: 10,
    position: 'realtive',
    justifyContent: 'space-between',
    borderRadius: 20,
    padding: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  activitiesHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 40,
    color: '#000',
    marginLeft: -10,
  },
});

export default styles;
