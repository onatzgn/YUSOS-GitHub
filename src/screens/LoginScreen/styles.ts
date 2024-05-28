import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: 300, // Logo boyutunu artırdım
    height: 200, // Logo boyutunu artırdım
    resizeMode: 'contain',
    marginBottom: 20,
  },
  smallLogo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginTop: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
  
  },
  input: {
    width: width - 40,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  button: {
    width: width - 40,
    backgroundColor: '#000',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerText: {
    fontSize: 16,
    marginTop: 10,
  },
  registerLink: {
    fontWeight: 'bold',
    paddingLeft: 5,
    color: 'blue',
  },
});
