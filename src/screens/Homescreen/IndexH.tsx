import React from 'react';
import { View } from 'react-native';
import HeaderMain from '../../components/HeaderMain/IndexHeader';
import Duyurular from '../../components/Duyurular';
import styles from './styles';
import { NavigationProp } from '@react-navigation/native';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const Homescreen = ({ navigation }: RouterProps) => {  
  return(
    <View style={styles.container}>
      <HeaderMain />
      <Duyurular />
    </View>
  );
};

export default Homescreen;
