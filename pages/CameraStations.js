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

    const [forecastIds, setForecastIds] = useState([]);
    const [forecastNames, setForecastNames] = useState([]);
    const [showFor, setShowFor] = useState(false);
    const [desiredForecastValues, setDesiredForecastValues] = useState([]);
    const [selectedForecastId, setSelectedForecastId] = useState(0);

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
    const URL4 = "https://tie.digitraffic.fi/api/weather/v1/forecast-sections-simple";

    const { setShowCameraStations } = useContext(CameraStationsOpen);
    const { setShowForecast } = useContext(Citiesopen);
    const { chosenCity } = useContext(City);

    const [showPic, setShowPic] = useState(false);
    const [wcam, setWcam] = useState("./man.png");
    const [refresh, setRefresh] = useState(false);

    const [chooseCam, setChooseCam] = useState(false);
    const [chooseWeather, setChooseWeather] = useState(false);
    const [chooseForecast, setChooseForecast] = useState(false);


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
                const stationData = json.stations.find(station => station.id === weatherId);
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

    const weatherChosen = () => {
        setChooseCam(false);
        setChooseForecast(false);
        setChooseWeather(true);
    };

    const camerasChosen = () => {
        setChooseCam(true);
        setChooseForecast(false);
        setChooseWeather(false);
    };

    const forecastChosen = () => {
        setChooseCam(false);
        setChooseForecast(true);
        setChooseWeather(false);
    };

    useEffect(() => {
        fetch(URL4)
            .then(response => response.json())
            .then(data => {
                const stations = data.features.filter(station => station.properties.description.includes(chosenCity));
                const stationIds = stations.map(station => station.id);
                const stationNames = stations.map(station => station.properties.description);
                setForecastIds(stationIds);
                setForecastNames(stationNames);
            })
            .catch(error => console.error('Error fetching forecast stations:', error));
    }, []);

    const handleForecastPress = async (forecastName, index) => {
        console.log(`Pressed forecast station ${forecastName} with index ${index}`);
        const forecastId = forecastIds[index];
        setShowFor(true);
        fetch(`${URL4}/${forecastId}/forecasts`)
            .then(response => response.json())
            .then((json) => {
                setDesiredForecastValues(json.forecasts);
            })
            .catch((error) => {
                console.error('Error retrieving forecast data:', error);
            });
    };

    const handleForecastIdPress = (id) => {
        setSelectedForecastId(id);
    };



    return (
        <View style={styles.KymmeniaPaddingeja}>
            <Pressable onPress={back} style={styles.buttonColor}><Text style={styles.center}>Back to cities</Text></Pressable>
            {isLoading ? (
                <>
                    <Text>Loading stations of {chosenCity}...</Text>
                    <View style={styles.container}><ActivityIndicator size="large" /></View>
                </>
            ) :
                <>
                    <View style={styles.viewi}>
                        <Pressable style={styles.border1} onPress={camerasChosen}><Text style={styles.textItem1}>Cameras</Text></Pressable>
                        <Pressable style={styles.border1} onPress={weatherChosen}><Text style={styles.textItem1}>Weather</Text></Pressable>
                        <Pressable style={styles.border1} onPress={forecastChosen}><Text style={styles.textItem1}>Forecast</Text></Pressable>
                    </View>
                    {chooseWeather ? (
                        <>
                            <View>
                                <Text style={styles.stationText}>Choose a road to see weather from:</Text>
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

                            {showWeather && (
                                <>
                                    <Text style={styles.stationText}>Weather of chosen road:</Text>
                                    {desiredSensorValues.map(sensor => (
                                        <View key={sensor.id} style={styles.weatherDataItem}>
                                            <Text style={styles.stationText}>{sensorInfo[sensor.name].title}</Text>
                                            {sensorInfo[sensor.name].unit && <Text style={styles.stationText}>{sensor.value} {sensorInfo[sensor.name].unit}</Text>}
                                            {!sensorInfo[sensor.name].unit && <Text style={styles.stationText}>{sensor.sensorValueDescriptionEn}</Text>}
                                            {sensor.name === "ILMAN_LÄMPÖTILA_24H_MIN" && sensor.value < 3 && <Text style={styles.additionalText}>Temperature has been below 3°C and can be slippery, drive cautiously!</Text>}
                                            {sensor.name === "NÄKYVYYS_KM" && sensor.value < 1 && <Text style={styles.additionalText}>Visibility is below 1 km, drive cautiously!</Text>}
                                        </View>
                                    ))}
                                </>
                            )}
                        </>
                    ) : chooseCam ? (
                        <>
                            <View>
                                <Text style={styles.stationText}>Choose a road to see camera from:</Text>
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
                            <View style={styles.container}>
                                {showPic && (
                                    <>
                                        <Text  style={styles.stationText}>Image of chosen road</Text>
                                        <Image
                                            source={{ uri: wcam }}
                                            style={styles.image}
                                            onError={(error) => console.log("Image loading error:", error)}
                                        />
                                        <Button title="Refresh" onPress={handleRefresh}></Button>
                                    </>
                                )}
                            </View>
                        </>
                    ) : chooseForecast ? (
                        <>
                            <View>
                                <Text style={styles.stationText}>Choose a road to see weather from:</Text>
                                <FlatList
                                    data={forecastNames}
                                    renderItem={({ item, index }) => (
                                        <Pressable onPress={() => handleForecastPress(item, index)} style={styles.border1}>
                                            <Text style={styles.textItem1}>{item}</Text>
                                        </Pressable>
                                    )}
                                    keyExtractor={(item, index) => index.toString()}
                                    horizontal={true}
                                    contentContainerStyle={styles.contentContainer1}
                                />
                            </View>

                            {showFor && desiredForecastValues && (
                                <>
                                    <View style={styles.viewi}>
                                        {[0, 1, 2, 3, 4].map(id => (
                                            <Pressable
                                                key={id}
                                                onPress={() => setSelectedForecastId(id)}
                                                style={styles.border1}
                                            >
                                                <Text style={styles.textItem1}>
                                                    {id === 0 ? "Current" : id === 4 ? "12 Hours" : `${id * 2} Hours`}
                                                </Text>
                                            </Pressable>
                                        ))}
                                    </View>
                                    <Text style={styles.stationText}>Forecast of chosen road:</Text>
                                    {desiredForecastValues[selectedForecastId] && (
                                        <View style={styles.weatherDataItem}>
                                            <Text style={styles.stationText}>Forecast Name: {desiredForecastValues[selectedForecastId].forecastName}</Text>
                                            <Text style={styles.stationText}>Daylight: {desiredForecastValues[selectedForecastId].daylight.toString()}</Text>
                                            <Text style={styles.stationText}>Road Temperature: {desiredForecastValues[selectedForecastId].roadTemperature} °C</Text>
                                            <Text style={styles.stationText}>Temperature: {desiredForecastValues[selectedForecastId].temperature} °C</Text>
                                            <Text style={styles.stationText}>Overall Road Condition: {desiredForecastValues[selectedForecastId].overallRoadCondition}</Text>
                                            {desiredForecastValues[selectedForecastId].forecastConditionReason && (
                                                <Text style={styles.stationText}>Road Condition Reason: {desiredForecastValues[selectedForecastId].forecastConditionReason.roadCondition}</Text>
                                            )}
                                        </View>
                                    )}
                                </>
                            )}

                        </>
                    ) : null}

                </>
            }
        </View>
    );
}
