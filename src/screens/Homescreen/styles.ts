import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  addButton: {
    alignSelf: 'center',
    backgroundColor: '#007bff',
    width: 50,  // Butonun genişliği ve yüksekliği (padding'i kaldırdık)
    height: 50, // Aynı şekilde
    borderRadius: 55, // Yuvarlak yapmak için yarıçap
    marginBottom: 20,
    alignItems: 'center', // İçeriği yatayda ortalamak için
    justifyContent: 'center', // İçeriği dikeyde ortalamak için
  },
  
  addButtonText: {
    color: 'white',
    fontSize: 24,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    width: '100%',
    padding: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
  },
  modalButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
