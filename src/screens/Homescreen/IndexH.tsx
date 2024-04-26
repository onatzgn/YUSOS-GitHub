import React from 'react';
import { View,Text } from 'react-native';
import HeaderMain from '../../components/HeaderMain/IndexHeader';
import Duyurular from '../../components/Duyurular';
import styles from './styles';

function Homescreen() {
  return (
    <View style={styles.container}>
      <HeaderMain />
      <Duyurular />
      
    </View>
  );
}

export default Homescreen;