import { useContext, useState } from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import { Citiesopen, CameraStationsOpen, City } from '../components/Contexts';
import styles from "../styles/style";

export default function Forecast() {
    const { setShowCameraStations } = useContext(CameraStationsOpen);
    const { setShowForecast } = useContext(Citiesopen);
    const { setChosenCity } = useContext(City);

  

    const navigateToCity = (cityName) => {
        setChosenCity(cityName);
        setShowCameraStations(true);
        setShowForecast(false);
    };

    const cities = [
        "Helsinki", "Espoo", "Tampere", "Vantaa", "Oulu", "Turku", "Jyväskylä", "Lahti",
        "Kuopio", "Pori", "Kouvola", "Joensuu", "Lappeenranta", "Hämeenlinna", "Vaasa",
        "Seinäjoki", "Rovaniemi", "Mikkeli", "Kotka", "Salo", "Kuusamo", "Inari",
        "Enontekiö", "Sodankylä", "Kalajoki", "Kajaani"
    ];

    return (
        <View style={styles.ForecastContainer}>
            <ScrollView>
                {cities.map(city => (
                    <Pressable key={city} style={styles.border1} onPress={() => navigateToCity(city)}>
                        <Text style={styles.cities}>{city}</Text>
                    </Pressable>
                ))}
            </ScrollView>
        </View>
    );
}
 