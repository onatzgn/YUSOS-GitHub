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
    width: width - 40, // Ekran genişliğinden az bir genişlik
    height: 50, // Standart yükseklik
    marginVertical: 10, // Yukarı ve aşağıya boşluk
    borderWidth: 1, // Kenarlık kalınlığı
    borderColor: 'grey', // Kenarlık rengi
    paddingHorizontal: 15, // İçeriden sağa ve sola padding
    borderRadius: 5, // Kenarların yuvarlaklığı
    fontSize: 16, // Yazı boyutu
  },
  button: {
    width: width - 40, // Yukarıdakiyle aynı genişlik
    height: 50, // Yükseklik
    backgroundColor: '#2e76e8', // Mavi arka plan rengi
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5, // Yuvarlak köşeler
    marginVertical: 20, // Diğer bileşenlerden boşluk
  },
  buttonText: {
    color: 'white', // Beyaz yazı rengi
    fontSize: 18, // Yazı boyutu
    fontWeight: 'bold', // Yazı kalınlığı
  },
  alreadyText: {
    fontSize: 16, // Yazı boyutu
    marginTop: 10, // Üstten boşluk
  },
  signInLink: {
    fontWeight: 'bold', // Kalın yazı
    color: '#2e76e8', // Link rengi
  },
});