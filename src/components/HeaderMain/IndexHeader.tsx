import React from 'react';
import { View, Text } from "react-native";
import styles from "./styles";

function IndexHeader() {
  return (
    <View style={styles.headerMain}>
      <View style={styles.headerTitle}>
        <Text style={styles.titleText}>Ana Sayfa</Text>
      </View>
      <Text style={styles.subtitleText}>Duyurular</Text>
    </View>
  );
}

export default IndexHeader;
