import React from 'react';
import { View } from 'react-native';
import HeaderMain from '../../components/HeaderMain/IndexHeader';
import Duyurular from '../../components/Duyurular';
import styles from './styles';
import { NavigationProp } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from '../CustomDrawerContent/DrawerContent'; 

const Drawer = createDrawerNavigator();

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const HomeContent = () => {
  return (
    <View style={styles.container}>
      <HeaderMain />
      <Duyurular />
    </View>
  );
};

const Homescreen = ({ navigation }: RouterProps) => {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name=" " component={HomeContent}  />
    </Drawer.Navigator>
  );
};

export default Homescreen;
