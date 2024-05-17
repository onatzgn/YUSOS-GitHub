import React from 'react';
import { View,Text,Button } from 'react-native';
import HeaderMain from '../../components/HeaderMain/IndexHeader';
import Duyurular from '../../components/Duyurular';
import styles from './styles';
import { NavigationProp } from '@react-navigation/native';
import { FIREBASE_AUTH } from '../../../FirebaseConfig';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const Homescreen = ({ navigation }: RouterProps) => {  
  return(
    <View style={styles.container}>
      <HeaderMain />
      <Duyurular />
      <Button onPress={() => FIREBASE_AUTH. signOut()} title="Logout" />
    </View>
  );
};

export default Homescreen;