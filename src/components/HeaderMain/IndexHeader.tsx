/*
import React from 'react'
import {View, Text, Image} from "react-native"
import styles from "./styles"
import {Entypo} from "@expo/vector-icons"
import { Ionicons } from '@expo/vector-icons';

function index(){
    return(
        <View style={styles.headerMain}>
            <View>
                <Text style={{ fontSize: 30, fontWeight: 'bold',  marginLeft: 20  }}>Ana Sayfa</Text>            
            </View>
                <Ionicons name="settings-sharp" size={40} color="#2e76e8" style={{ marginLeft: 300, marginTop:-38 }}/>
            <View>
                <Text style={{ fontSize: 50, fontWeight: 'bold',  marginLeft: 20 , color:"#2e76e8" }}>Duyurular</Text>            

            </View>
        </View>
    )
}

export default index
*/
import React from 'react'
import { View, Text } from "react-native"
import styles from "./styles"
import { Ionicons } from '@expo/vector-icons';

function IndexHeader() {
    return (
        <View style={styles.headerMain}>
            <View style={styles.headerTitle}>
                <Text style={styles.titleText}>Ana Sayfa</Text>
                <Ionicons name="settings-sharp" size={40} color="#2e76e8" style={styles.settingsIcon} />
            </View>
            <View>
                <Text style={styles.subtitleText}>Duyurular</Text>
            </View>
        </View>
    )
}

export default IndexHeader
