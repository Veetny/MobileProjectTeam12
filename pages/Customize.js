import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { RadioButton } from 'react-native-paper';

export default function Customize() {
    const [checked, setChecked] = useState('first');
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const containerStyle = darkMode ? styles.darkContainer : styles.lightContainer;
    const textStyle = darkMode ? styles.darkText : styles.lightText;

    return (
        <View style={[styles.container, containerStyle]}>
            <Text style={textStyle}>Customize</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RadioButton
                    value="first"
                    status={ checked === 'first' ? 'checked' : 'unchecked' }
                    onPress={() => {
                        setChecked('first');
                        setDarkMode(false); // Reset to default mode
                    }}
                />
                <Text style={textStyle}>Default</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RadioButton
                    value="second"
                    status={ checked === 'second' ? 'checked' : 'unchecked' }
                    onPress={() => {
                        setChecked('second');
                        setDarkMode(false); // Reset to default mode
                    }}
                />
                <Text style={textStyle}>Light Mode</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RadioButton
                    value="third"
                    status={ checked === 'third' ? 'checked' : 'unchecked' }
                    onPress={() => {
                        setChecked('third');
                        setDarkMode(true); // Enable dark mode
                    }}
                />
                <Text style={textStyle}>Dark Mode</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    lightContainer: {
        backgroundColor: 'white',
    },
    darkContainer: {
        backgroundColor: 'black',
    },
    lightText: {
        color: 'black',
        fontSize: 20,
    },
    darkText: {
        color: 'white',
        fontSize: 20,
    },
});