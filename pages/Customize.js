import React, { useState, useContext } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { SelectedLanguage } from '../components/Contexts'
import styles from '../styles/style';
const App = () => {
  const {selectedLanguage, setSelectedLanguage} = useContext(SelectedLanguage);

  return (
    <View style={styles.containerCust}>
      <TouchableOpacity
        style={[styles.radioButtonCust, selectedLanguage === 'en' && styles.selectedButtonCust]}
        onPress={() => setSelectedLanguage('en')}>
        <Text style={styles.buttonTextCust}>English</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.radioButtonCust, selectedLanguage === 'fi' && styles.selectedButtonCust]}
        onPress={() => setSelectedLanguage('fi')}>
        <Text style={styles.buttonTextCust}>Finnish</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.radioButtonCust, selectedLanguage === 'sv' && styles.selectedButtonCust]}
        onPress={() => setSelectedLanguage('sv')}>
        <Text style={styles.buttonTextCust}>Swedish</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;