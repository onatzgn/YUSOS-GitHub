// CommunityNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CommunityScreen from "../screens/CommunityScreen/IndexC";
import HelpCenterScreen from "../screens/CommunityScreen/HelpCenterScreen";
import CommunityCenterScreen from "../screens/CommunityScreen/CommunityCenterScreen";

const Stack = createStackNavigator();

const CommunityNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Community"
                component={CommunityScreen}
            />
            <Stack.Screen
                name="HelpCenterScreen"
                component={HelpCenterScreen}
                options={{ title: 'Yardım Merkezi' }}
            />
            <Stack.Screen
                name="CommunityCenterScreen"
                component={CommunityCenterScreen}
                options={{ title: 'Topluluk Merkezi' }}
            />
        </Stack.Navigator>
    );
};

export default CommunityNavigator;
