// CommunityNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ActionScreen from "../screens/ActionScreen/IndexA";

const Stack = createStackNavigator();

const CommunityNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Community"
                component={ActionScreen}
            />
        </Stack.Navigator>
    );
};

export default CommunityNavigator;
