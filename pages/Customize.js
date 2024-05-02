import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const App = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.radioButton, selectedLanguage === 'en' && styles.selectedButton]}
        onPress={() => setSelectedLanguage('en')}>
        <Text style={styles.buttonText}>English</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.radioButton, selectedLanguage === 'fi' && styles.selectedButton]}
        onPress={() => setSelectedLanguage('fi')}>
        <Text style={styles.buttonText}>Finnish</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.radioButton, selectedLanguage === 'sv' && styles.selectedButton]}
        onPress={() => setSelectedLanguage('sv')}>
        <Text style={styles.buttonText}>Swedish</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButton: {
    backgroundColor: '#eee',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
    borderRadius: 5,
  },
  selectedButton: {
    backgroundColor: 'skyblue',
  },
  buttonText: {
    fontSize: 16,
  },
});

export default App;