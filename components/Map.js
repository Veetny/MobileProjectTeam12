import React, { useContext } from "react";
import { StyleSheet, View, Dimensions, Platform, StatusBar, Alert, Image, TouchableOpacity, Text } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import Constants from 'expo-constants';
import styles from "../styles/style";
import { MapOpen, Citiesopen } from "./Contexts";

export default function Map() {
    const { setShowMap } = useContext(MapOpen);
    const { setShowForecast } = useContext(Citiesopen);
    const images = "https://weathercam.digitraffic.fi/C1259501.jpg"
    const handleMapMarkerMaik = () => {
        Alert.alert(
            "Oulu",
            "tigermafia",
            [
                {
                    text: "Open Cities",
                    onPress: OpenCities
                },
                {
                    text: "Close",
                    onPress: () => console.log("skibidi")
                }
            ]
        );
    };

    const OpenCities = () => {
        setShowMap(false);
        setShowForecast(true);
    };

    const handleMapMarker = () => {
        Alert.alert(
            "Tampere",
            "This is an alert message with a button",
            [
                {
                    
                    text: "OK",
                    onPress: () => console.log("OK Pressed")
                }
            ]
        );
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
                    description={"description"}
                    pinColor="blue"
                    onPress={handleMapMarker}
                />
                <Marker
                    coordinate={{latitude: 65.0142, longitude: 25.4719}}
                    title={"Oulun pylly"}
                    description={"description"}
                    pinColor="green"
                    onPress={handleMapMarkerMaik}
                />
                <Marker
                    coordinate={{latitude: 60.1756, longitude: 24.9342}}
                    title={"Helsinki"}
                    description={"description"}
                    pinColor="red"
                    onPress={handleMapMarker}
                />
                <Marker
                    coordinate={{latitude: 62.2333, longitude: 25.7333}}
                    title={"Jyväskylä"}
                    description={"description"}
                    pinColor="purple"
                    onPress={handleMapMarker}
                />
                <Marker
                    coordinate={{latitude: 66.5028, longitude: 25.7285}}
                    title={"Rovaniemi"}
                    description={"description"}
                    pinColor="pink"
                    onPress={handleMapMarker}
                />
                <Marker
                    coordinate={{latitude: 62.8925, longitude: 27.6783}}
                    title={"Kuopio"}
                    description={"description"}
                    pinColor="orange"
                    onPress={handleMapMarker}
                />
                <Marker
                    coordinate={{latitude: 61.6875, longitude: 27.2736}}
                    title={"Mikkeli"}
                    description={"description"}
                    pinColor="beige"
                    onPress={handleMapMarker}
                />
                <Marker
                    coordinate={{latitude: 60.3000, longitude: 25.0333}}
                    title={"Vantaa"}
                    description={"description"}
                    pinColor="aqua"
                    onPress={handleMapMarker}
                />
                <Marker
                    coordinate={{latitude: 60.2100, longitude: 24.6600}}
                    title={"Espoo"}
                    description={"description"}
                    pinColor="yellow"
                    onPress={handleMapMarker}
                />
                <Marker
                    coordinate={{latitude: 60.9804, longitude: 25.6550}}
                    title={"Lahti"}
                    description={"description"}
                    pinColor="darkgreen"
                    onPress={handleMapMarker}
                />
                <Marker
                    coordinate={{latitude: 61.4847, longitude: 21.7972}}
                    title={"Pori"}
                    description={"description"}
                    pinColor="maroon"
                    onPress={handleMapMarker}
                />
                <Marker
                    coordinate={{latitude: 60.8681, longitude: 26.7042}}
                    title={"Kouvola"}
                    description={"description"}
                    pinColor="tomato"
                    onPress={handleMapMarker}
                />
                <Marker
                    coordinate={{latitude: 62.6000, longitude: 29.7639}}
                    title={"Joensuu"}
                    description={"description"}
                    pinColor="magenta"
                    onPress={handleMapMarker}
                />
                <Marker
                    coordinate={{latitude: 61.0583, longitude: 28.1861}}
                    title={"Lappeenranta"}
                    description={"description"}
                    pinColor="yellow"
                    onPress={handleMapMarker}
                />
                <Marker
                    coordinate={{latitude: 61.0000, longitude: 24.4414}}
                    title={"Hämeenlinna"}
                    description={"description"}
                    pinColor="yellow"
                    onPress={handleMapMarker}
                />
                <Marker
                    coordinate={{latitude: 63.1000, longitude: 21.6167}}
                    title={"Vaasa"}
                    description={"description"}
                    pinColor="yellow"
                    onPress={handleMapMarker}
                />
                <Marker
                    coordinate={{latitude: 62.7903, longitude: 22.8403}}
                    title={"Seinäjoki"}
                    description={"description"}
                    pinColor="yellow"
                    onPress={handleMapMarker}
                />
                <Marker
                    coordinate={{latitude: 60.4667, longitude: 26.9458}}
                    title={"Kotka"}
                    description={"description"}
                    pinColor="yellow"
                    onPress={handleMapMarker}
                />
                <Marker
                    coordinate={{latitude: 60.3831, longitude: 23.1331}}
                    title={"Salo"}
                    description={"description"}
                    pinColor="brown"
                    onPress={handleMapMarker}
                />
            </MapView>
        </View>
    )
}