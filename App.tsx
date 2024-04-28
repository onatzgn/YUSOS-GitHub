import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import RootNavigator from "./src/navigator/RootNavigator"
import 'react-native-gesture-handler';

export default function App() {
  return (
    /*
    <View style={styles.container}>
        <HomeScreen />
    </View>
    */
    <NavigationContainer>
      <RootNavigator/>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //marginTop: '18%',
  },


  
});
