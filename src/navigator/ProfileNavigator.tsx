import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from "../screens/ProfileScreen/IndexP";

const Stack = createStackNavigator();

const ProfileNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default ProfileNavigator;
