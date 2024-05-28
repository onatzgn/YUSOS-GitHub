import React, { useRef, useState, useContext, useEffect } from 'react';
import { View, ScrollView, Text, TouchableOpacity, TextInput, Dimensions, Alert } from 'react-native';
import { FontAwesome5, FontAwesome6 } from '@expo/vector-icons';
import * as Notifications from 'expo-notifications';
import * as Location from 'expo-location';
import { Image } from 'react-native';
import { UserContext } from '../../contexts/UserContext';
import { FIREBASE_AUTH } from '../../../FirebaseConfig';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';



import { FIREBASE_DB } from '../../../FirebaseConfig';




const { width } = Dimensions.get('window');

const bloodTypeOptions = ['A', 'B', 'AB', '0'];
const rhFactorOptions = ['+', '-'];

const BigTitle = ({ title }) => (
  <View style={{ flex: 1, width, alignItems: 'center', justifyContent: 'center' }}>
    <Text style={{ fontSize: 32, fontWeight: 'bold', marginBottom: -10 }}>{title}</Text>
  </View>
);

const TextSection = ({ text }) => (
  <View style={{ flex: 1, width, alignItems: 'center', justifyContent: 'center' }}>
    <Text style={{ fontSize: 18, textAlign: 'center', marginHorizontal: 20 }}>{text}</Text>
  </View>
);

const GetStartedScreen = ({ navigation }) => {
  const scrollViewRef = useRef();
  const [currentPage, setCurrentPage] = useState(0);
  const [showUserInfo, setShowUserInfo] = useState(false);
  const [familyContact, setFamilyContact] = useState('');
  const [healthIssues, setHealthIssues] = useState('');
  const [allergies, setAllergies] = useState('');
  const [address, setAddress] = useState('');
  const [startButtonTitle, setStartButtonTitle] = useState('Şimdilik Geç ve Başla');
  const [selectedBloodType, setSelectedBloodType] = useState('');
  const [selectedRhFactor, setSelectedRhFactor] = useState('');
  const { setUserInfo } = useContext(UserContext);
  const auth = FIREBASE_AUTH;

  useEffect(() => {
    const checkNotificationPermission = async () => {
      const { status } = await Notifications.getPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert(
          'Bildirimlere İzin Ver',
          'Uygulama bildirimlere erişim istiyor. İzin vermek ister misiniz?',
          [
            { text: 'İptal', onPress: () => console.log('İptal edildi'), style: 'cancel' },
            { text: 'İzin Ver', onPress: handleNotificationPermission },
          ],
          { cancelable: false }
        );
      }
    };

    checkNotificationPermission();
  }, []);

  const goToNextPage = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ x: width * (currentPage + 1), animated: true });
      setCurrentPage(currentPage + 1);
    }
  };

  const handleNotificationPermission = async () => {
    const { status } = await Notifications.requestPermissionsAsync();
    if (status === 'granted') {
      Alert.alert('İzin Verildi', 'Bildirimlere izin verildi!');
    }
  };

  const handleLocationPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status === 'granted') {
      Alert.alert('İzin Verildi', 'Konum izni verildi!');
    }
  };

  const toggleUserInfo = () => {
    setShowUserInfo(!showUserInfo);
  };

  const handleBloodTypeSelection = (bloodType) => {
    setSelectedBloodType(bloodType);
  };

  const handleRhFactorSelection = (rhFactor) => {
    setSelectedRhFactor(rhFactor);
  };

  const saveUserInfo = async () => {
    try {
      const auth = getAuth();
      const user = auth.currentUser;
  
      if (!user) {
        throw new Error('Kullanıcı oturumu açık değil');
      }
  
      const userId = user.uid;
      await setDoc(doc(FIREBASE_DB, "medicalInfo", userId), {
        familyContact: familyContact,
        bloodType: selectedBloodType + selectedRhFactor,
        healthIssues: healthIssues,
        allergies: allergies,
        address: address
      });
  
      // Kullanıcı bilgilerini yerel olarak güncelle
      setUserInfo({
        userId,
        familyContact,
        bloodType: selectedBloodType + selectedRhFactor,
        healthIssues,
        allergies,
        address,
      });
  
      setShowUserInfo(false);
      setStartButtonTitle('Başla');
  
      // Kullanıcıyı sonraki sayfaya yönlendir
      const lastPageIndex = 6; // son sayfa indeksi
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({ x: width * lastPageIndex, animated: true });
        setCurrentPage(lastPageIndex);
      }
    } catch (error) {
      console.error('Kullanıcı bilgilerini kaydetme işlemi başarısız oldu:', error);
      Alert.alert('Hata', 'Bilgiler kaydedilemedi. Lütfen tekrar deneyin.');
    }
  };
  
  
  




  const handleStartButtonPress = () => {
    navigation.navigate('Main');
  };

  return (
    <>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={250}
        onScroll={(event) => {
          const { x } = event.nativeEvent.contentOffset;
          setCurrentPage(Math.round(x / width));
        }}
      >
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginBottom: -10 }}>
          <BigTitle title="Bildirimler" />
          <Image source={require('./duyuruGS.png')} style={{ width: 250, height: 200, aspectRatio: 8 / 5, marginBottom: 10 }} resizeMode="contain" />
          <TextSection text="Hava durumu ve afet uyarıları gibi önemli durumlarda bilgilendirilmeniz için bildirimlere izin vermeniz gerekiyor. Güvenliğiniz için önemli olduğunu unutmayın." />
          <TouchableOpacity onPress={handleNotificationPermission} style={{ marginBottom: 20, alignItems: 'center' }}>
            <Text style={{ fontSize: 18, color: '#2e76e8' }}>Bildirimlere İzin Ver</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1 }}>
          <BigTitle title="Acil Durum Çağrısı" />
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, height: 100, borderRadius: 50, backgroundColor: '#EC000B', padding: 10 }}>
              <FontAwesome5 name="exclamation" size={44} color="white" />
            </View>
          </View>
          <TextSection text={"Acil durum çağrınızı tüm kullanıcılara iletmek için S.O.S butonunu kullanabilirsiniz.\nAcil durumlarda size en yakın olanların yardımına hızlıca ulaşmak için konum bilginize ihtiyacımız var. Konumunuzu paylaşmak ister misiniz?"} />
          <TouchableOpacity onPress={handleLocationPermission} style={{ marginBottom: 20, alignItems: 'center' }}>
            <Text style={{ fontSize: 18, color: '#2e76e8' }}>Konum Servislerine İzin Ver</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <BigTitle title="Yardım Merkezi" />
          <Image source={require('./acilDurumGS.jpeg')} style={{ width: 320, height: 150, marginBottom: 20 }} />
          <TextSection text="Acil durum bölümü, kullanıcıların birbirlerine çabucak yardım etmelerini sağlar. İhtiyaç sahipleri acil durumlarını bildirir, diğer kullanıcılar da yardım etmek için harekete geçer." />
        </View>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <BigTitle title="Yardım Merkezi" />
          <Image source={require('./toplulukGS.png')} style={{ width: 250, height: null, aspectRatio: 5 / 5, marginBottom: 20 }} resizeMode="contain" />
          <TextSection text="Topluluk bölümünden çeşitli yardım faaliyetlerine, topluluk etkinliklerine ve eğitimlere katılabilirsiniz." />
        </View>

        <View style={{ flex: 1 }}>
          <BigTitle title="Sağlık Yardım Talebi" />
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, height: 100, borderRadius: 50, backgroundColor: '#3DD598', padding: 10 }}>
              <FontAwesome6 name="user-doctor" size={44} color="white" />
            </View>
          </View>
          <TextSection text="Sağlık sorunu yaşadığınızda bize bildirebilirsiniz. Sağlık ekibimiz kısa süre içinde sizinle iletişime geçerek yardımınıza gelecektir." />
        </View>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <BigTitle title="Rehber" />
          <Image source={require('./rehberGS.png')} style={{ width: 250, height: null, aspectRatio: 5 / 5, marginBottom: 20 }} resizeMode="contain" />
          <TextSection text="Rehber bölümü, afet zamanlarında ve acil durumlarda size yol gösterir. Deprem öncesi, sırası ve sonrasında yapmanız gerekenler, yardım toplama alanları, gerekli telefon numaraları, yemek dağıtım yerleri ve toplanma noktaları gibi önemli bilgilere buradan kolaylıkla erişebilirsiniz." />
        </View>

        <View style={{ flex: 1 }}>
          <BigTitle title="Başlarken" />
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} />
          <Text style={{ alignSelf: 'center', marginTop: -50, fontWeight: 'bold', fontSize: 20 }}>Merhaba,</Text>
          <TextSection text="Hizmetlerimizden en iyi şekilde faydalanabilmeniz için bazı kişisel bilgilerinizi toplamamız gerekiyor. Bu bilgiler, acil durumlarda size daha iyi yardımcı olabilmemiz için kullanılacak ve sağlık hizmetlerimizi kişiselleştirmemize olanak sağlayacak." />
          <TouchableOpacity onPress={toggleUserInfo} style={{ marginTop: 20, alignItems: 'center' }}>
            <Text style={{ fontSize: 20, color: '#2e76e8', textDecorationLine: 'underline' }}>Bilgileri Ekle</Text>
          </TouchableOpacity>

          {showUserInfo && (
            <View style={{ marginTop: 20 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                <Text style={{ fontSize: 18, marginLeft: 20 }}>Kan Grubu:</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap', marginLeft: 10 }}>
                  {bloodTypeOptions.map((bloodType, index) => (
                    <TouchableOpacity
                      key={index}
                      onPress={() => handleBloodTypeSelection(bloodType)}
                      style={{
                        backgroundColor: selectedBloodType === bloodType ? '#2e76e8' : '#ccc',
                        padding: 8,
                        borderRadius: 5,
                        marginBottom: 5,
                        marginRight: 5,
                      }}
                    >
                      <Text style={{ fontSize: 16, color: '#fff' }}>{bloodType}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5, marginLeft: 20 }}>
                <Text style={{ fontSize: 18, marginRight: 10 }}>Rh Faktörü:</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                  {rhFactorOptions.map((rhFactor, index) => (
                    <TouchableOpacity
                      key={index}
                      onPress={() => handleRhFactorSelection(rhFactor)}
                      style={{
                        backgroundColor: selectedRhFactor === rhFactor ? '#2e76e8' : '#ccc',
                        padding: 8,
                        borderRadius: 5,
                        marginRight: 5,
                      }}
                    >
                      <Text style={{ fontSize: 16, color: '#fff' }}>{rhFactor}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>

              <TextInput
                style={{ height: 40, width: 330, marginLeft: 20, borderColor: 'gray', borderWidth: 1, marginBottom: 10, borderRadius: 10, paddingLeft: 10, textAlign: "auto", marginTop: 10 }}
                onChangeText={text => setFamilyContact(text)}
                value={familyContact}
                placeholder="Aile İrtibat Numarası"
              />

              <TextInput
                style={{ height: 40, width: 330, marginLeft: 20, borderColor: 'gray', borderWidth: 1, marginBottom: 10, borderRadius: 10, paddingLeft: 10, textAlign: "auto" }}
                onChangeText={text => setHealthIssues(text)}
                value={healthIssues}
                placeholder="Sağlık Sorunları"
              />

              <TextInput
                style={{ height: 40, width: 330, marginLeft: 20, borderColor: 'gray', borderWidth: 1, marginBottom: 10, borderRadius: 10, paddingLeft: 10, textAlign: "auto" }}
                onChangeText={text => setAllergies(text)}
                value={allergies}
                placeholder="Alerjiler"
              />

              <TextInput
                style={{ height: 40, width: 330, marginLeft: 20, borderColor: 'gray', borderWidth: 1, marginBottom: 10, borderRadius: 10, paddingLeft: 10, textAlign: "auto" }}
                onChangeText={text => setAddress(text)}
                value={address}
                placeholder="Adres"
              />

              <TouchableOpacity onPress={saveUserInfo} style={{ alignItems: 'center', backgroundColor: '#2e76e8', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 10, maxWidth: 250, alignSelf: "center" }}>
                <Text style={{ fontSize: 18, color: '#fff' }}>Kaydet</Text>
              </TouchableOpacity>
            </View>
          )}

          {!showUserInfo && (
            <View style={{ marginTop: 20, alignItems: 'center', borderRadius: 25, overflow: 'hidden' }}>
              <TouchableOpacity onPress={handleStartButtonPress} style={{ backgroundColor: '#2e76e8', borderWidth: 2, borderColor: '#2e76e8', paddingVertical: 10, paddingHorizontal: 30, borderRadius: 7 }}>
                <Text style={{ fontSize: 24, color: '#fff' }}>{startButtonTitle}</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ScrollView>

      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
        {[...Array(7)].map((_, index) => (
          <View
            key={index}
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 5,
              marginVertical: 15,
              backgroundColor: index === currentPage ? '#2e76e8' : '#ccc',
              marginTop: 10,
            }}
          />
        ))}
      </View>
    </>
  );
};

export default GetStartedScreen;