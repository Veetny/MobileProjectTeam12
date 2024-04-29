import React, { useState, useEffect, useContext } from "react";
import { View, Text, FlatList, Pressable, Image, Button, ActivityIndicator } from "react-native";
import styles from "../styles/style";
import { Citiesopen, CameraStationsOpen, City } from '../components/Contexts';

export default function CameraStations() {
    const [weatherCameras, setWeatherCameras] = useState([]);
    const [ouluCameraIds, setOuluCameraIds] = useState([]);
    const [stationNames, setStationNames] = useState([]);
    const [stationIds, setStationIds] = useState([]);

    const [weatherIds, setWeatherIds] = useState([]);
    const [weatherNames, setWeatherNames] = useState([]);
    const [showWeather, setShowWeather] = useState(false);
    const [desiredSensorValues, setDesiredSensorValues] = useState([]);

    const sensorInfo = {
        "ILMA": { title: "Temperature (air)", unit: "°C" },
        "TIE_1": { title: "Temperature (road)", unit: "°C" },
        "NÄKYVYYS_KM": { title: "Visibility in km", unit: "km" },
        "SADE": { title: "Is it raining?" },
        "KELI_1": { title: "Road quality" },
        "ILMAN_LÄMPÖTILA_24H_MIN": { title: "Lowest temperature in last 24H", unit: "°C" }
    };


    const URL1 = "https://tie.digitraffic.fi/api/weathercam/v1/stations";
    const URL3 = "https://tie.digitraffic.fi/api/weather/v1/stations";

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
        console.log(`Pressed ${stationName} with ID ${stationId}`);
        const URL2 = "https://tie.digitraffic.fi/api/weathercam/v1/stations/" + stationId;
        setShowPic(true);
        fetch(URL2)
            .then(response => response.json())
            .then((json) => {
                console.log(json.properties.presets[0].imageUrl);
                setWcam(json.properties.presets[0].imageUrl);
            })
            .catch((error) => {
                console.error('Error retrieving image:', error);
                setWcam("");
            });
    };

    useEffect(() => {
        fetch(URL1)
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
            const ids = [];
            for (let i = 0; i < ouluCameraIds.length; i++) {
                const id = ouluCameraIds[i];
                try {
                    const response = await fetch(`${URL1}/${id}`);
                    const json = await response.json();
                    const processedNames = json.properties.names.en;
                    names.push(processedNames);
                    ids.push(id);
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


    useEffect(() => {
        fetch(URL3)
            .then(response => response.json())
            .then(data => {
                setWeatherCameras(data.features);
                const stations = data.features.filter(station => station.properties.name.includes(chosenCity));
                const stationIds = stations.map(station => station.id);
                const stationNames = stations.map(station => station.properties.name);
                setWeatherIds(stationIds);
                setWeatherNames(stationNames);
            })
            .catch(error => console.error('Error fetching weather stations:', error));
    }, []);

    useEffect(() => {
        const fetchStationNames1 = async () => {
            const names = [];
            for (let i = 0; i < weatherIds.length; i++) {
                const id = weatherIds[i];
                try {
                    const response = await fetch(`${URL3}/${id}`);
                    const json = await response.json();
                    const processedNames = json.properties.names.en;
                    names.push(processedNames);
                } catch (error) {
                    console.error('Error fetching weather names:', error);
                }
            }
            setWeatherNames(names);
        }
        if (weatherIds.length > 0) {
            fetchStationNames1();
        }
    }, [weatherIds]);

    useEffect(() => {
        console.log("Weather Names:", weatherNames);
    }, [weatherNames]);

    useEffect(() => {
        console.log(weatherIds);
    }, [weatherIds]);

    useEffect(() => {
        console.log(desiredSensorValues);
    }, [desiredSensorValues]);

    const handleWeatherPress = async (weatherName, index) => {
        console.log(`Pressed weather station ${weatherName} with index ${index}`);
        const URL2 = "https://tie.digitraffic.fi/api/weather/v1/stations/data";
        const weatherId = weatherIds[index];
        setShowWeather(true);
        fetch(URL2)
            .then(response => response.json())
            .then((json) => {
                // Find the station with the matching id
                const stationData = json.stations.find(station => station.id === weatherId);
                // Perform further actions with the stationData
                const desiredSensorNames = ["ILMA", "TIE_1", "SADE", "NÄKYVYYS_KM", "KELI_1", "ILMAN_LÄMPÖTILA_24H_MIN"];
                const desiredSensorValues = stationData.sensorValues.filter(sensor => desiredSensorNames.includes(sensor.name));
                setDesiredSensorValues(desiredSensorValues);
            })
            .catch((error) => {
                console.error('Error retrieving weather data:', error);
            });
    };


    const handleRefresh = () => {
        setRefresh(prevState => !prevState);
    };

    return (
        <View style={styles.KymmeniaPaddingeja}>
            <Pressable onPress={back} style={styles.buttonColor}><Text style={styles.center}>Back to cities</Text></Pressable>
            {isLoading ? (
                <>
                    <Text>Loading cameras of {chosenCity}...</Text>
                    <View style={styles.container}><ActivityIndicator size="large" /></View>
                </>
            ) :
                <>
                    <View>
                        <Text>Choose a road to see weather from:</Text>
                        <FlatList
                            data={weatherNames}
                            renderItem={({ item, index }) => (
                                <Pressable onPress={() => handleWeatherPress(item, index)} style={styles.border1}>
                                    <Text style={styles.textItem1}>{item}</Text>
                                </Pressable>
                            )}
                            keyExtractor={(item, index) => index.toString()}
                            horizontal={true}
                            contentContainerStyle={styles.contentContainer1}
                        />
                    </View>

                    {/* Other JSX */}
                    {showWeather && (
                        <>
                            <Text>Weather of chosen road:</Text>
                            {desiredSensorValues.map(sensor => (
                                <View key={sensor.id} style={styles.weatherDataItem}>
                                    <Text style={styles.weatherDataName}>{sensorInfo[sensor.name].title}</Text>
                                    {sensorInfo[sensor.name].unit && <Text style={styles.weatherDataValue}>{sensor.value} {sensorInfo[sensor.name].unit}</Text>}
                                    {!sensorInfo[sensor.name].unit && <Text style={styles.weatherDataValue}>{sensor.sensorValueDescriptionEn}</Text>}
                                    {sensor.name === "ILMAN_LÄMPÖTILA_24H_MIN" && sensor.value < 3 && <Text style={styles.additionalText}>Temperature has been below 3°C, drive cautiously!</Text>}
                                </View>
                            ))}
                        </>
                    )}

                    <View>
                        <Text>Choose a road to see camera from:</Text>
                        <FlatList
                            data={stationNames}
                            renderItem={({ item, index }) => (
                                <Pressable onPress={() => handleStationPress(item, stationIds[index])} style={styles.border1}>
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
