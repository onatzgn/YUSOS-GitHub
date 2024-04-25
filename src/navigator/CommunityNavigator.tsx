// CommunityNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CommunityScreen from "../screens/CommunityScreen/IndexC";

const Stack = createStackNavigator();

const CommunityNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Help Center"
                component={CommunityScreen}
            />
        </Stack.Navigator>
    );
};

export default CommunityNavigator;
