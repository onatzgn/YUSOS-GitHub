import { StyleSheet, Dimensions } from "react-native";
const {height} = Dimensions.get('window')
const styles = StyleSheet.create({
    headerMain:{
        height:height*0.064,
    }
})

export default styles;