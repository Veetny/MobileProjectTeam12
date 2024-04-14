import { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Icon } from 'react-native-paper';
import styles from "../styles/style";


export default function Forecast() {
const [searchQuery, setSearchQuery] = ('');

const handleSearch = (text) => {
    setSearchQuery(text);
};

    return (
        <View style={styles.ForecastContainer}>
            <View style={styles.ForecastSearch}>
            <Text style={styles.KymmeniaPaddingeja}></Text>
                <Icon name="search" size={24} style={styles.searchIconFore} />
            <TextInput
            style={styles.searchInputFore}
            placeholder="Search..."
            value={searchQuery}
            onChangeText={handleSearch}
            />
        </View>
        </View>

    );
}
