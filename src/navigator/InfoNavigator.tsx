import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import InfoScreen from "../screens/InfoScreen/IndexI";

const Stack = createStackNavigator();

const InfoNavigator = () => {
    return (
        
        <Stack.Navigator>
            <Stack.Screen
                name="Info"
                component={InfoScreen}
                options = {{headerShown: false}}
            />
        </Stack.Navigator>
    );
};

export default InfoNavigator;
