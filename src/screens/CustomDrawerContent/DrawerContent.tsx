import React from 'react';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FIREBASE_AUTH } from '../../../FirebaseConfig';

const CustomDrawerContent = (props) => {
  const handleLogout = () => {
    FIREBASE_AUTH.signOut()
      .then(() => {
        props.navigation.navigate('Login');
      })
      .catch((error) => {
        console.error(error);
        alert('Logout failed: ' + error.message);
      });
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={{ flex: 1, padding: 20 }}>
        <TouchableOpacity onPress={() => console.log('Türkçe selected')}>
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 15 }}>
            <Ionicons name="globe-outline" size={24} color="black" />
            <Text style={{ marginLeft: 20 }}>Türkçe</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('English selected')}>
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 15 }}>
            <Ionicons name="globe-outline" size={24} color="black" />
            <Text style={{ marginLeft: 20 }}>English</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogout}>
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 15 }}>
            <Ionicons name="log-out-outline" size={24} color="black" />
            <Text style={{ marginLeft: 20 }}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
