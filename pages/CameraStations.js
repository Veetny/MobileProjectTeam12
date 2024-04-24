import React, { useState, useEffect, useContext } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import styles from "../styles/style";

import { Citiesopen, CameraStationsOpen, City } from '../components/Contexts';

export default function CameraStations() {
    const [weatherCameras, setWeatherCameras] = useState([]);
    const [ouluCameraIds, setOuluCameraIds] = useState([]);
    const [stationNames, setStationNames] = useState([]);
    const URL = "https://tie.digitraffic.fi/api/weathercam/v1/stations";

    const { showCities } = useContext(Citiesopen);
    const { chosenCity } = useContext(City);
    

    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                setWeatherCameras(data.features);
                const ouluCameras = data.features.filter(camera => camera.properties.name.includes(chosenCity));
                const ouluCameraIds = ouluCameras.map(camera => camera.properties.id);
                setOuluCameraIds(ouluCameraIds);
            })
            .catch(error => console.error('Error fetching weather cameras:', error));
    }, []);

    useEffect(() => {
        const fetchStationNames = async () => {
            const names = [];
            for (let i = 0; i < ouluCameraIds.length; i++) {
                const id = ouluCameraIds[i];
                try {
                    const response = await fetch(`${URL}/${id}`);
                    const json = await response.json();
                    // Remove spaces between characters in names
                    const processedNames = json.properties.names.en.replace(/\s/g, "");
                    names.push(processedNames);
                } catch (error) {
                    console.error('Error fetching station details:', error);
                }
            }
            setStationNames(names);
        };

        if (ouluCameraIds.length > 0) {
            fetchStationNames();
        }
    }, [ouluCameraIds]);

    return (
        <View style={styles.KymmeniaPaddingeja}>
            <View >
                <FlatList
                    data={stationNames}
                    renderItem={({ item }) => (
                        <Text style={styles.textItem1}>{item}</Text>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal={true}
                    contentContainerStyle={styles.contentContainer1}
                />
            </View>
        </View>
    );
}

