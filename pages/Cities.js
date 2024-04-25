import { useContext, useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { Icon } from 'react-native-paper';
import styles from "../styles/style";

import { Citiesopen, CameraStationsOpen, City } from '../components/Contexts';



export default function Forecast() {
    const [searchQuery, setSearchQuery] = ('');

    const { setShowCameraStations } = useContext(CameraStationsOpen);
    const { setShowForecast } = useContext(Citiesopen);
    const { setChosenCity } = useContext(City);

    const handleSearch = (text) => {
        setSearchQuery(text);
    };
    const toHelsinki = () => {
        setChosenCity("Helsinki");
        setShowCameraStations(true);
        setShowForecast(false);
    };
    const toEspoo = () => {
        setChosenCity("Espoo");
        setShowCameraStations(true);
        setShowForecast(false);
    };
    const toTampere = () => {
        setChosenCity("Tampere");
        setShowCameraStations(true);
        setShowForecast(false);
    };
    const toVantaa = () => {
        setChosenCity("Vantaa");
        setShowCameraStations(true);
        setShowForecast(false);
    };
    const toOulu = () => {
        setChosenCity("Oulu");
        setShowCameraStations(true);
        setShowForecast(false);
    };
    const toTurku = () => {
        setChosenCity("Turku");
        setShowCameraStations(true);
        setShowForecast(false);
    };
    const toJyväskylä = () => {
        setChosenCity("Jyväskylä");
        setShowCameraStations(true);
        setShowForecast(false);
    };
    const toLahti = () => {
        setChosenCity("Lahti");
        setShowCameraStations(true);
        setShowForecast(false);
    };
    const toKuopio = () => {
        setChosenCity("Kuopio");
        setShowCameraStations(true);
        setShowForecast(false);
    };
    const toPori = () => {
        setChosenCity("Pori");
        setShowCameraStations(true);
        setShowForecast(false);
    };
    const toKouvola = () => {
        setChosenCity("Kouvola");
        setShowCameraStations(true);
        setShowForecast(false);
    };
    const toJoensuu = () => {
        setChosenCity("Joensuu");
        setShowCameraStations(true);
        setShowForecast(false);
    };
    const toLappeenranta = () => {
        setChosenCity("Lappeenranta");
        setShowCameraStations(true);
        setShowForecast(false);
    };
    const toHämeenlinna = () => {
        setChosenCity("Hämeenlinna");
        setShowCameraStations(true);
        setShowForecast(false);
    };
    const toVaasa = () => {
        setChosenCity("Vaasa");
        setShowCameraStations(true);
        setShowForecast(false);
    };
    const toSeinäjoki = () => {
        setChosenCity("Seinäjoki");
        setShowCameraStations(true);
        setShowForecast(false);
    };
    const toRovaniemi = () => {
        setChosenCity("Rovaniemi");
        setShowCameraStations(true);
        setShowForecast(false);
    };
    const toMikkeli = () => {
        setChosenCity("Mikkeli");
        setShowCameraStations(true);
        setShowForecast(false);
    };
    const toKotka = () => {
        setChosenCity("Kotka");
        setShowCameraStations(true);
        setShowForecast(false);
    };
    const toSalo = () => {
        setChosenCity("Salo");
        setShowCameraStations(true);
        setShowForecast(false);
    };

    return (
        <View style={styles.ForecastContainer}>
                <Text style={styles.listText}>
                <Pressable onPress={toHelsinki}><Text>Helsinki</Text></Pressable>
                {"\n"}
                <Pressable onPress={toEspoo}><Text>Espoo</Text></Pressable>
                {"\n"}
                <Pressable onPress={toTampere}><Text>Tampere</Text></Pressable>
                {"\n"}
                <Pressable onPress={toVantaa}><Text>Vantaa</Text></Pressable>
                {"\n"}
                <Pressable onPress={toOulu}><Text>Oulu</Text></Pressable>
                {"\n"}
                <Pressable onPress={toTurku}><Text>Turku</Text></Pressable>
                {"\n"}
                <Pressable onPress={toJyväskylä}><Text>Jyväskylä</Text></Pressable>
                {"\n"}
                <Pressable onPress={toLahti}><Text>Lahti</Text></Pressable>
                {"\n"}
                <Pressable onPress={toKuopio}><Text>Kuopio</Text></Pressable>
                {"\n"}
                <Pressable onPress={toPori}><Text>Pori</Text></Pressable>
                {"\n"}
                <Pressable onPress={toKouvola}><Text>Kouvola</Text></Pressable>
                {"\n"}
                <Pressable onPress={toJoensuu}><Text>Joensuu</Text></Pressable>
                {"\n"}
                <Pressable onPress={toLappeenranta}><Text>Lappeenranta</Text></Pressable>
                {"\n"}
                <Pressable onPress={toHämeenlinna}><Text>Hämeenlinna</Text></Pressable>
                {"\n"}
                <Pressable onPress={toVaasa}><Text>Vaasa</Text></Pressable>
                {"\n"}
                <Pressable onPress={toSeinäjoki}><Text>Seinäjoki</Text></Pressable>
                {"\n"}
                <Pressable onPress={toRovaniemi}><Text>Rovaniemi</Text></Pressable>
                {"\n"}
                <Pressable onPress={toMikkeli}><Text>Mikkeli</Text></Pressable>
                {"\n"}
                <Pressable onPress={toKotka}><Text>Kotka</Text></Pressable>
                {"\n"}
                <Pressable onPress={toSalo}><Text>Tommi Salo</Text></Pressable>
                </Text>
        </View>

    );
}
