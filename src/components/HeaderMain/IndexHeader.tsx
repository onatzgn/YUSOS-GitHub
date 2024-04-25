import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from "react-native";
import styles from "./styles";
import { Ionicons } from '@expo/vector-icons';

function IndexHeader({ toggleLanguageOptions }) {
  const [languageOptionsVisible, setLanguageOptionsVisible] = useState(false);

  return (
    <View style={styles.headerMain}>
      <View style={styles.headerTitle}>
        <Text style={styles.titleText}>Ana Sayfa</Text>
        <TouchableOpacity
          onPress={() => setLanguageOptionsVisible(true)}
          style={styles.settingsIcon}
        >
          <Ionicons name="settings-sharp" size={40} color="#2e76e8" />
        </TouchableOpacity>
      </View>
      <Text style={styles.subtitleText}>Duyurular</Text>

      <Modal
        visible={languageOptionsVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setLanguageOptionsVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalContainer}
          activeOpacity={1}
          onPressOut={() => setLanguageOptionsVisible(false)}
        >
          <View style={styles.languageDropdown}>
            <TouchableOpacity onPress={() => console.log('Türkçe selected')} style={styles.languageButton}>
              <Text>Türkçe</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('English selected')} style={styles.languageButton}>
              <Text>English</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

export default IndexHeader;
