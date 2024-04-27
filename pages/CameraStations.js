import React, { useState, useEffect, useContext } from "react";
import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import styles from "../styles/style";

import { Citiesopen, CameraStationsOpen, City } from '../components/Contexts';

export default function CameraStations() {
    const [weatherCameras, setWeatherCameras] = useState([]);
    const [ouluCameraIds, setOuluCameraIds] = useState([]);
    const [stationNames, setStationNames] = useState([]);
    const URL = "https://tie.digitraffic.fi/api/weathercam/v1/stations";

    const { showCities } = useContext(Citiesopen);
    const { chosenCity } = useContext(City);
    const { setShowCameraStations } = useContext(CameraStationsOpen);
    const { setShowForecast } = useContext(Citiesopen);
    

    const back = () => {
        setShowCameraStations(false);
        setShowForecast(true);
    };

    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                setWeatherCameras(data.features);
                const ouluCameras = data.features.filter(camera => camera.properties.name.includes(chosenCity));
                const ouluCameraIds = ouluCameras.map(camera => camera.properties.id);
                setOuluCameraIds(ouluCameraIds);
                console.log(ouluCameraIds);
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
                    const processedNames = json.properties.names.en;
                    names.push(processedNames);
                } catch (error) {
                    console.error('Error fetching station details:', error);
                }
            }
            setStationNames(names);
            console.log(names);
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
            <Pressable onPress={back}><Text>Back to cities</Text></Pressable>
        </View>
    );
}

