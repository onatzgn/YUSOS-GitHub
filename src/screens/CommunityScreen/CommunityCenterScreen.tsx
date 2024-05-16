import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import CardComponent from './CardComponent';

const windowDimensions = Dimensions.get('window');
const windowWidth = windowDimensions.width;
const windowHeight = windowDimensions.height;

const CommunityCenterScreen = ({ navigation }) => {
    const cards = [
        { title: 'Çorba Dağıtım' },
        { title: 'Kıyafet Toplama' },
        { title: 'Erzak Toplama' },
    ];

    const onPressHelpCenter = () => {
        navigation.navigate('HelpCenterScreen');
    };

    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <Text style={styles.titleText}>Yardım Merkezi</Text>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.button} onPress={onPressHelpCenter}>
                        <Text style={styles.buttonText}>Acil Durum</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button1} onPress={() => {}}>
                        <Text style={styles.buttonText}>   Topluluk   </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.cardContainer}>
                    {cards.map((card, index) => (
                        <CardComponent key={index} title={card.title} />
                    ))}
                </View>
            </SafeAreaView>
        </ScrollView>
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
        paddingHorizontal: windowWidth * 0.055,
        marginBottom: windowHeight * 0.03,
        marginTop: windowHeight * 0.05,
    },
    button: {
        backgroundColor: 'lightblue',
        paddingVertical: windowHeight * 0.015,
        paddingHorizontal: windowWidth * 0.053,
        borderRadius: windowWidth * 0.08,
        marginLeft: windowWidth * 0.067,
    },
    button1: {
        backgroundColor: '#2e76e8',
        paddingVertical: windowHeight * 0.015,
        paddingHorizontal: windowWidth * 0.053,
        borderRadius: windowWidth * 0.08,
        marginRight: windowWidth * 0.067,
    },
    buttonText: {
        fontSize: windowWidth * 0.043,
        fontWeight: 'bold',
    },
    cardContainer: {
        width: '100%',
        paddingHorizontal: windowWidth * 0.053,
        marginTop: windowHeight * 0.03,
    },
    titleText: {
        fontSize: windowWidth * 0.08,
        fontWeight: 'bold',
        color: '#000',
        marginTop: windowHeight * 0.03,
        marginRight: windowWidth * 0.32,
    },
});

export default CommunityCenterScreen;
