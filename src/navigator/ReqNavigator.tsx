// ReqNavigator(ACİL DURUM BUTONLARI İÇİN)
//ŞU ANDA BURASI ÇALIŞMIYOR, İŞLEVSİZ
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import SOSScreen from '../screens/SOSScreen/IndexSOS';
import HealthReqScreen from '../screens/HealthReqScreen/IndexHR';
import CustomTabBarButton from './CustomTabBarButton';

const Stack = createStackNavigator();

const ReqNavigator = () => {
  return (
    <NavigationContainer>
      <CustomTabBarButton/>
      <Stack.Navigator >
        <Stack.Screen name="SOSScreen" component={SOSScreen} />
        <Stack.Screen name="HealthReqScreen" component={HealthReqScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ReqNavigator;
