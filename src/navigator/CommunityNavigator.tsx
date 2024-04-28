import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HelpCenterScreen from "../screens/CommunityScreen/HelpCenterScreen";
import CommunityCenterScreen from "../screens/CommunityScreen/CommunityCenterScreen";

const Stack = createStackNavigator();

const CommunityNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HelpCenterScreen"
                component={HelpCenterScreen}
                options={{ headerShown: false  }}

            />
            <Stack.Screen
                name="CommunityCenterScreen"
                component={CommunityCenterScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default CommunityNavigator;
