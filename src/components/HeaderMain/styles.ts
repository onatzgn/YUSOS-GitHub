import { StyleSheet, Dimensions } from 'react-native';

const windowDimensions = Dimensions.get('window');
const windowWidth = windowDimensions.width;
const windowHeight = windowDimensions.height;

const styles = StyleSheet.create({
  headerMain: {
    flexDirection: 'column',
    marginTop: windowHeight * 0.044, 
    paddingHorizontal: 20,
    //backgroundColor: '#fff',
    zIndex: 10,
  },
  headerTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },
  settingsIcon: {
    padding: 10,
  },
  subtitleText: {
    fontSize: 45,
    fontWeight: 'bold',
    color: "#2e76e8",
    marginTop: windowHeight * 0.03, 
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingTop: windowHeight * 0.075, 
  },
  languageDropdown: {
    marginTop: windowHeight * 0.03, 
    marginRight: 10, 
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  languageButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0', 
    width: '100%', 
  },
  closeButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5, 
  },
});

export default styles;
