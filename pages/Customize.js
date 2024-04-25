import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { RadioButton } from 'react-native-paper';
import styles from "../styles/style";

export default function Customize() {
    const [checked, setChecked] = useState('first');
    const [blueMode, setBlueMode] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const toggleBlueMode = () => {
        setBlueMode(!blueMode);
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const containerStyle = () => {
        if (blueMode) return styles.blueContainer;
        if (darkMode) return styles.darkContainer;
        return styles.defaultContainer;
    };

    const textStyle = () => {
        if (blueMode) return styles.blueText;
        if (darkMode) return styles.darkText;
        return styles.defaultText;
    };

    return (
        <View style={[styles.CustomizeContainer, containerStyle()]}>
            <Text style={textStyle()}>Customize</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RadioButton
                    value="first"
                    status={ checked === 'first' ? 'checked' : 'unchecked' }
                    onPress={() => {
                        setChecked('first');
                        setBlueMode(false);
                        setDarkMode(false);
                    }}
                />
                <Text style={textStyle()}>Light mode</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RadioButton
                    value="second"
                    status={ checked === 'second' ? 'checked' : 'unchecked' }
                    onPress={() => {
                        setChecked('second');
                        setBlueMode(true);
                        setDarkMode(false);
                    }}
                />
                <Text style={textStyle()}>Default</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RadioButton
                    value="third"
                    status={ checked === 'third' ? 'checked' : 'unchecked' }
                    onPress={() => {
                        setChecked('third');
                        setBlueMode(false);
                        setDarkMode(true);
                    }}
                />
                <Text style={textStyle()}>Dark mode</Text>
            </View>
        </View>
    );
};

