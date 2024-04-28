import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    width: width - 40,
    height: 50,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'grey',
    paddingHorizontal: 15,
    borderRadius: 5,
    fontSize: 16,
  },
  button: {
    width: width - 40,
    height: 50,
    backgroundColor: '#2e76e8',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  alreadyText: {
    fontSize: 16,
    marginTop: 10,
  },
  signInLink: {
    fontWeight: 'bold',
    color: '#2e76e8',
  },
});
