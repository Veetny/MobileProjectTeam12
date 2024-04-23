import { useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { Icon } from 'react-native-paper';
import styles from "../styles/style";


export default function Forecast() {
    const [searchQuery, setSearchQuery] = ('');

    const handleSearch = (text) => {
        setSearchQuery(text);
    };
    const toHelsinki = () => {
        console.log("clickattu");
    };

    return (
        <View style={styles.ForecastContainer}>
                <Text style={styles.listText}>
                <Pressable onPress={toHelsinki}><Text>Helsinki</Text></Pressable>
                {"\n"}
                <Pressable><Text>Espoo</Text></Pressable>
                {"\n"}
                <Pressable><Text>Tampere</Text></Pressable>
                {"\n"}
                <Pressable><Text>Vantaa</Text></Pressable>
                {"\n"}
                <Pressable><Text>Oulu</Text></Pressable>
                {"\n"}
                <Pressable><Text>Turku</Text></Pressable>
                {"\n"}
                <Pressable><Text>Jyväskylä</Text></Pressable>
                {"\n"}
                <Pressable><Text>Lahti</Text></Pressable>
                {"\n"}
                <Pressable><Text>Kuopio</Text></Pressable>
                {"\n"}
                <Pressable><Text>Pori</Text></Pressable>
                {"\n"}
                <Pressable><Text>Kouvola</Text></Pressable>
                {"\n"}
                <Pressable><Text>Joensuu</Text></Pressable>
                {"\n"}
                <Pressable><Text>Lappeenranta</Text></Pressable>
                {"\n"}
                <Pressable><Text>Hämeenlinna</Text></Pressable>
                {"\n"}
                <Pressable><Text>Vaasa</Text></Pressable>
                {"\n"}
                <Pressable><Text>Seinäjoki</Text></Pressable>
                {"\n"}
                <Pressable><Text>Rovaniemi</Text></Pressable>
                {"\n"}
                <Pressable><Text>Mikkeli</Text></Pressable>
                {"\n"}
                <Pressable><Text>Kotka</Text></Pressable>
                {"\n"}
                <Pressable><Text>Tommi Salo</Text></Pressable>
                </Text>
        </View>

    );
}
