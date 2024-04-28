import React, { useContext, useState } from "react";
import { StyleSheet, View, Alert } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import styles from "../styles/style";
import { MapOpen, Citiesopen, CameraStationsOpen, City } from "./Contexts";

export default function Map() {
    const { setShowMap } = useContext(MapOpen);
    const { setShowCameraStations } = useContext(CameraStationsOpen);
    const { setChosenCity } = useContext(City);

    const handleMapMarker = (cityName) => {
        Alert.alert(
            cityName,
            "This is an alert message with a button",
            [
                {
                    text: "Open Stations",
                    onPress: () => OpenCities(cityName)
                },
                {
                    text: "Close",
                    onPress: () => console.log("Closed")
                }
            ]
        );
    };

    const OpenCities = (cityName) => {
        setShowMap(false);
        setChosenCity(cityName);
        setShowCameraStations(true);
    };

    return (
        <View style={styles.container}>
            <MapView style={styles.map}
                initialRegion={{
                    latitude: 65.0800,
                    longitude: 25.4800,
                    latitudeDelta: 11.1922,
                    longitudeDelta: 11.1421,
                }}
            >
                <Marker
                    coordinate={{latitude: 61.462733, longitude: 23.769505}}
                    title={"Tampere"}
                    onPress={() => handleMapMarker("Tampere")}
                />
                <Marker
                    coordinate={{latitude: 65.0142, longitude: 25.4719}}
                    title={"Oulu"}
                    onPress={() => handleMapMarker("Oulu")}
                />
                <Marker
                    coordinate={{latitude: 60.1756, longitude: 24.9342}}
                    title={"Helsinki"}
                    description={"description"}
                    pinColor="red"
                    onPress={() => handleMapMarker("Helsinki")}
                />
                <Marker
                    coordinate={{latitude: 62.2333, longitude: 25.7333}}
                    title={"Jyväskylä"}
                    description={"description"}
                    pinColor="purple"
                    onPress={() => handleMapMarker("Jyväskylä")}
                />
                <Marker
                    coordinate={{latitude: 66.5028, longitude: 25.7285}}
                    title={"Rovaniemi"}
                    description={"description"}
                    pinColor="pink"
                    onPress={() => handleMapMarker("Rovaniemi")}
                />
                <Marker
                    coordinate={{latitude: 62.8925, longitude: 27.6783}}
                    title={"Kuopio"}
                    description={"description"}
                    pinColor="orange"
                    onPress={() => handleMapMarker("Kuopio")}
                />
                <Marker
                    coordinate={{latitude: 61.6875, longitude: 27.2736}}
                    title={"Mikkeli"}
                    description={"description"}
                    pinColor="beige"
                    onPress={() => handleMapMarker("Mikkeli")}
                />
                <Marker
                    coordinate={{latitude: 60.3000, longitude: 25.0333}}
                    title={"Vantaa"}
                    description={"description"}
                    pinColor="aqua"
                    onPress={() => handleMapMarker("Vantaa")}
                />
                <Marker
                    coordinate={{latitude: 60.2100, longitude: 24.6600}}
                    title={"Espoo"}
                    description={"description"}
                    pinColor="yellow"
                    onPress={() => handleMapMarker("Espoo")}
                />
                <Marker
                    coordinate={{latitude: 60.9804, longitude: 25.6550}}
                    title={"Lahti"}
                    description={"description"}
                    pinColor="darkgreen"
                    onPress={() => handleMapMarker("Lahti")}
                />
                <Marker
                    coordinate={{latitude: 61.4847, longitude: 21.7972}}
                    title={"Pori"}
                    description={"description"}
                    pinColor="maroon"
                    onPress={() => handleMapMarker("Pori")}
                />
                <Marker
                    coordinate={{latitude: 60.8681, longitude: 26.7042}}
                    title={"Kouvola"}
                    description={"description"}
                    pinColor="tomato"
                    onPress={() => handleMapMarker("Kouvola")}
                />
                <Marker
                    coordinate={{latitude: 60.4517, longitude: 22.2700}}
                    title={"Turku"}
                    description={"description"}
                    pinColor="maroon"
                    onPress={() => handleMapMarker("Turku")}
                />
                <Marker
                    coordinate={{latitude: 62.6000, longitude: 29.7639}}
                    title={"Joensuu"}
                    description={"description"}
                    pinColor="magenta"
                    onPress={() => handleMapMarker("Joensuu")}
                />
                <Marker
                    coordinate={{latitude: 61.0583, longitude: 28.1861}}
                    title={"Lappeenranta"}
                    description={"description"}
                    pinColor="yellow"
                    onPress={() => handleMapMarker("Lappeenranta")}
                />
                <Marker
                    coordinate={{latitude: 61.0000, longitude: 24.4414}}
                    title={"Hämeenlinna"}
                    description={"description"}
                    pinColor="yellow"
                    onPress={() => handleMapMarker("Hämeenlinna")}
                />
                <Marker
                    coordinate={{latitude: 63.1000, longitude: 21.6167}}
                    title={"Vaasa"}
                    description={"description"}
                    pinColor="yellow"
                    onPress={() => handleMapMarker("Vaasa")}
                />
                <Marker
                    coordinate={{latitude: 62.7903, longitude: 22.8403}}
                    title={"Seinäjoki"}
                    description={"description"}
                    pinColor="yellow"
                    onPress={() => handleMapMarker("Seinäjoki")}
                />
                <Marker
                    coordinate={{latitude: 60.4667, longitude: 26.9458}}
                    title={"Kotka"}
                    description={"description"}
                    pinColor="yellow"
                    onPress={() => handleMapMarker("Kotka")}
                />
                <Marker
                    coordinate={{latitude: 60.3831, longitude: 23.1331}}
                    title={"Salo"}
                    description={"description"}
                    pinColor="brown"
                    onPress={() => handleMapMarker("Salo")}
                />
                <Marker
                    coordinate={{latitude: 65.9667, longitude: 29.1667}}
                    title={"Kuusamo"}
                    description={"description"}
                    pinColor="red"
                    onPress={() => handleMapMarker("Kuusamo")}
                />
                <Marker
                    coordinate={{latitude: 68.9055, longitude: 27.0176}}
                    title={"Inari"}
                    description={"description"}
                    pinColor="red"
                    onPress={() => handleMapMarker("Inari")}
                />
                <Marker
                    coordinate={{latitude: 68.3840, longitude: 23.6354}}
                    title={"Enontekiö"}
                    description={"description"}
                    pinColor="yellow"
                    onPress={() => handleMapMarker("Enontekiö")}
                />
                <Marker
                    coordinate={{latitude: 67.4149, longitude: 26.5907}}
                    title={"Sodankylä"}
                    description={"description"}
                    pinColor="blue"
                    onPress={() => handleMapMarker("Sodankylä")}
                />
                <Marker
                    coordinate={{latitude: 64.2250, longitude: 27.7333}}
                    title={"Kajaani"}
                    description={"description"}
                    pinColor="blue"
                    onPress={() => handleMapMarker("Kajaani")}
                />
                <Marker
                    coordinate={{latitude: 64.2597, longitude: 23.9486}}
                    title={"Kalajoki"}
                    description={"description"}
                    pinColor="tomato"
                    onPress={() => handleMapMarker("Kalajoki")}
                />
            </MapView>
        </View>
    )
}