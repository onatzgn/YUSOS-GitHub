import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Homescreen from "../screens/Homescreen/IndexH"

const Stack = createStackNavigator()
const HomeNavigator= () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen
                name = "Home"
                component = {Homescreen}
                options = {{ headerShown: false}}
            />

        </Stack.Navigator>
    );
};

export default HomeNavigator