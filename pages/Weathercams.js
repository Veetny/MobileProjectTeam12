import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View, Button, Image } from 'react-native';

const URL = "https://tie.digitraffic.fi/api/weathercam/v1/stations/C12595";




export default function WeatherCam() {

  const [wcam, setWcam] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refresh, setRefresh] = useState();




    const [weatherCameras, setWeatherCameras] = useState([]);
  
    useEffect(() => {
      fetch('https://tie.digitraffic.fi/api/weathercam/v1/stations')
        .then(response => response.json())
        .then(data => {
          setWeatherCameras(data.features);
        })
        .catch(error => console.error('Error fetching weather cameras:', error));
    }, []);
  
    const findCamerasInOulu = () => {
      const ouluCameras = weatherCameras.filter(camera => camera.properties.name.includes('Helsinki'));
      const ouluCameraIds = ouluCameras.map(camera => camera.properties.id);
      console.log('Weather Cameras in Oulu:', ouluCameraIds);
    };
  
    


  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then((json) => {
        console.log(json.properties.presets[0].imageUrl);
        setWcam(json.properties.presets[0].imageUrl);
        setError(null);
        setIsLoading(false);
      }, (error) => {
        setError("Error retrieving image!");
        setIsLoading(false);
        console.log(error);
      })
  }, [refresh])

  const getNewWcam = () => {
    setRefresh({});
  }

  if (isLoading) {
    return <View style={styles.container}><ActivityIndicator size="large" /></View>
  } else if (error) {
    return <View style={styles.container}><Text>{error}</Text></View>
  } else {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: wcam }}
          style={styles.image}
          onError={(error) => console.log("Image loading error:", error)}
        />
        <Button title="Refresh" onPress={() => getNewWcam}></Button>
        <View>
        <Text>Weather Cameras in Oulu</Text>
        <Text onPress={findCamerasInOulu}>Click to find</Text>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 20,
  },
  wcam: {
    marginTop: 10,
    marginBottom: 10,
  },
  image: {
    width: 180,
    height: 110
  }
});