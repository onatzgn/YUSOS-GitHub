/*
import { StyleSheet, Dimensions } from "react-native";
const {height} = Dimensions.get('window')
const styles = StyleSheet.create({
    headerMain:{
        height:height*0.064,
    }
})

export default styles;
*/
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    headerMain: {
        flexDirection: 'column',
        marginTop: '18%',
        paddingHorizontal: 20,
    },
    headerTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    titleText: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    settingsIcon: {
        marginLeft: 'auto', // Sağa yaslanmış görünmesini sağlar
        marginTop: -8, // Gerekli ayarlama
    },
    subtitleText: {
        fontSize: 45,
        fontWeight: 'bold',
        color: "#2e76e8",
    },
});

export default styles;
