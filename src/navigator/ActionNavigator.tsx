/*
import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ActionScreen from "../screens/ActionScreen/IndexA";
import { View, Text, TouchableOpacity } from 'react-native';

const Stack = createStackNavigator();

const ActionNavigator = () => {
    const [showButtons, setShowButtons] = useState(false);

    const handleActionButtonPress = () => {
        setShowButtons(!showButtons);
    };

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Community"
                component={ActionScreen}
                options={{
                    headerRight: () => (
                        <TouchableOpacity onPress={handleActionButtonPress}>
                            <Text>{showButtons ? 'Hide Buttons' : 'Show Buttons'}</Text>
                        </TouchableOpacity>
                    )
                }}
            />
            {showButtons && (
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 10 }}>
                    <TouchableOpacity onPress={() => console.log('Yardım button pressed')} style={{ backgroundColor: 'green', padding: 10, borderRadius: 10 }}>
                        <Text style={{ color: 'white' }}>Yardım</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log('Acil Durum button pressed')} style={{ backgroundColor: 'red', padding: 10, borderRadius: 10 }}>
                        <Text style={{ color: 'white' }}>Acil Durum</Text>
                    </TouchableOpacity>
                </View>
            )}
        </Stack.Navigator>
    );
};

export default ActionNavigator;
*/
/*
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import ActionScreen from "../screens/ActionScreen/IndexA"

const Stack = createStackNavigator()
const ActionNavigator= () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen
                name = "Home"
                component = {ActionScreen}
            />

        </Stack.Navigator>
    );
};

export default ActionNavigator
*/