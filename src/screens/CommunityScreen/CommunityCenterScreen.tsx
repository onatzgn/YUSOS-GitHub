import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView,Alert } from 'react-native';

const CommunityCenterScreen = ({ navigation }) => {
    const onPressHelpCenter = () => {
        navigation.navigate('HelpCenterScreen');
    };

    const onPressCommunityCenter = () => {
        navigation.navigate('CommunityCenterScreen');
    };

    const onPressJoin = () => {
        // Add your join action here
        Alert.alert("Joined")
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button} onPress={onPressHelpCenter}>
                    <Text style={styles.buttonText}>Yardım Merkezi</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Topluluk Merkezi</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.cardContainer}>
                {/* First Card */}
                <View style={styles.card}>
                    <Text style={styles.cardText}>Card of Community Screen</Text>
                    <TouchableOpacity style={styles.addButton} onPress={onPressJoin}>
                        <Text style={styles.buttonText}>Katıl</Text>
                    </TouchableOpacity>
                </View>
                {/* Second Card */}
                <View style={styles.card}>
                    <Text style={styles.cardText}>Card 2</Text>
                    <TouchableOpacity style={styles.addButton} onPress={onPressJoin}>
                        <Text style={styles.buttonText}>Katıl</Text>
                    </TouchableOpacity>
                </View>
                {/* Third Card */}
                <View style={styles.card}>
                    <Text style={styles.cardText}>Card 3</Text>
                    <TouchableOpacity style={styles.addButton} onPress={onPressJoin}>
                        <Text style={styles.buttonText}>Katıl</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'lightblue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    cardContainer: {
        width: '100%',
        paddingHorizontal: 20,
        marginTop: 20,
    },
    card: {
        width: '100%',
        height: 100,
        backgroundColor: 'lightgray',
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    cardText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    addButton: {
        backgroundColor: 'lightblue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
});

export default CommunityCenterScreen;
