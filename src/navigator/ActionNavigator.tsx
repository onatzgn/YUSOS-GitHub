/*
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
*/
/*
import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ActionScreen from "../screens/ActionScreen/IndexA";
import { View, Text, TouchableOpacity } from 'react-native';

const Stack = createStackNavigator();

const ActionNavigator = () => {
    const [showButtons, setShowButtons] = useState(false);

    const handleButton1Press = () => {
        // Burada Button 1'e basıldığında yapılacak işlemleri yazabilirsiniz
        console.log('Button 1 pressed');
    };

    const handleButton2Press = () => {
        // Burada Button 2'ye basıldığında yapılacak işlemleri yazabilirsiniz
        console.log('Button 2 pressed');
    };

    const renderActionButtons = () => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 10 }}>
                <TouchableOpacity onPress={handleButton1Press} style={{ backgroundColor: 'red', padding: 10, borderRadius: 10 }}>
                    <Text style={{ color: 'white' }}>Button 1</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleButton2Press} style={{ backgroundColor: 'blue', padding: 10, borderRadius: 10 }}>
                    <Text style={{ color: 'white' }}>Button 2</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Community"
                component={ActionScreen}
            />
            {showButtons && renderActionButtons()}
        </Stack.Navigator>
    );
};

export default ActionNavigator;
*/
/*
import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ActionScreen from "../screens/ActionScreen/IndexA";
import { View, Text, TouchableOpacity } from 'react-native';

const Stack = createStackNavigator();

const ActionNavigator = () => {
    const [showButtons, setShowButtons] = useState(false);

    const handleButton1Press = () => {
        console.log('Button 1 pressed');
    };

    const handleButton2Press = () => {
        console.log('Button 2 pressed');
    };

    const renderActionButtons = () => {
        if (showButtons) {
            return (
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 10 }}>
                    <TouchableOpacity onPress={handleButton1Press} style={{ backgroundColor: 'green', padding: 10, borderRadius: 10 }}>
                        <Text style={{ color: 'white' }}>Button 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleButton2Press} style={{ backgroundColor: 'red', padding: 10, borderRadius: 10 }}>
                        <Text style={{ color: 'white' }}>Button 2</Text>
                    </TouchableOpacity>
                </View>
            );
        }
        return null;
    }

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Community"
                component={ActionScreen}
                options={{
                    headerRight: () => (
                        <TouchableOpacity onPress={() => setShowButtons(!showButtons)}>
                            <Text>Show Buttons</Text>
                        </TouchableOpacity>
                    )
                }}
            />
            {renderActionButtons()} // Butonları burada render edin
        </Stack.Navigator>
    );
};

export default ActionNavigator;
*/
// ActionNavigator.js

// ActionNavigator.js

// ActionNavigator.js

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

    const handleButton1Press = () => {
        console.log('Button 1 pressed');
    };

    const handleButton2Press = () => {
        console.log('Button 2 pressed');
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
                    <TouchableOpacity onPress={handleButton1Press} style={{ backgroundColor: 'green', padding: 10, borderRadius: 10 }}>
                        <Text style={{ color: 'white' }}>Button 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleButton2Press} style={{ backgroundColor: 'red', padding: 10, borderRadius: 10 }}>
                        <Text style={{ color: 'white' }}>Button 2</Text>
                    </TouchableOpacity>
                </View>
            )}
        </Stack.Navigator>
    );
};

export default ActionNavigator;
*/