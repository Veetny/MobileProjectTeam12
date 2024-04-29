import React, { useState, useEffect, useContext } from "react";
import { View, Text, FlatList, Pressable, Image, Button, ActivityIndicator } from "react-native";
import styles from "../styles/style";
import { Citiesopen, CameraStationsOpen, City } from '../components/Contexts';

export default function CameraStations() {
    const [weatherCameras, setWeatherCameras] = useState([]);
    const [ouluCameraIds, setOuluCameraIds] = useState([]);
    const [stationNames, setStationNames] = useState([]);
    const [stationIds, setStationIds] = useState([]);
    const URL = "https://tie.digitraffic.fi/api/weathercam/v1/stations";

    const { setShowCameraStations } = useContext(CameraStationsOpen);
    const { setShowForecast } = useContext(Citiesopen);
    const { chosenCity } = useContext(City);

    const [showPic, setShowPic] = useState(false);
    const [wcam, setWcam] = useState("./man.png");
    const [refresh, setRefresh] = useState(false);

    const [isLoading, setIsLoading] = useState(true);

    const back = () => {
        setShowCameraStations(false);
        setShowForecast(true);
    };

    const handleStationPress = (stationName, stationId) => {
        console.log(`Pressed ${stationName} with ID ${stationId}`); // Log both station name and id
        const URL1 = "https://tie.digitraffic.fi/api/weathercam/v1/stations/" + stationId;
        setShowPic(true);
        fetch(URL1)
            .then(response => response.json())
            .then((json) => {
                console.log(json.properties.presets[0].imageUrl);
                setWcam(json.properties.presets[0].imageUrl);
            })
            .catch((error) => {
                console.error('Error retrieving image:', error);
                setWcam(""); // Reset image URL in case of error
            });
    };

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
            const ids = []; // Initialize array for station ids
            for (let i = 0; i < ouluCameraIds.length; i++) {
                const id = ouluCameraIds[i];
                try {
                    const response = await fetch(`${URL}/${id}`);
                    const json = await response.json();
                    const processedNames = json.properties.names.en;
                    names.push(processedNames);
                    ids.push(id); // Push id into array
                } catch (error) {
                    console.error('Error fetching station details:', error);
                }
            }
            setStationNames(names);
            setStationIds(ids);
            setIsLoading(false);
        };

        if (ouluCameraIds.length > 0) {
            fetchStationNames();
        }
    }, [ouluCameraIds]);

    const handleRefresh = () => {
        setRefresh(prevState => !prevState); // Toggle refresh state to trigger image reload
    };

    return (
        <View style={styles.KymmeniaPaddingeja}>
            <Pressable onPress={back} style={styles.buttonColor}><Text style={styles.center}>Back to cities</Text></Pressable>
            {isLoading ? (
                <>
                    <Text>Loading roads of {chosenCity}...</Text>
                    <View style={styles.container}><ActivityIndicator size="large" /></View>
                </>
            ) :
                <>
                    <View>
                        <FlatList
                            data={stationNames}
                            renderItem={({ item, index }) => (
                                <Pressable onPress={() => handleStationPress(item, stationIds[index])}>
                                    <Text style={styles.textItem1}>{item}</Text>
                                </Pressable>
                            )}
                            keyExtractor={(item, index) => index.toString()}
                            horizontal={true}
                            contentContainerStyle={styles.contentContainer1}
                        />
                    </View>
                </>
            }


            <View style={styles.container}>
                {showPic && (
                    <>
                        <Text>Image of chosen road</Text>
                        <Image
                            source={{ uri: wcam }}
                            style={styles.image}
                            onError={(error) => console.log("Image loading error:", error)}
                        />
                        <Button title="Refresh" onPress={handleRefresh}></Button>
                    </>
                )}
            </View>

        </View>
    );
}
