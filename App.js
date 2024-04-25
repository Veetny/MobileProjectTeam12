import React, { useRef, useState } from 'react';
import { StatusBar, StyleSheet, Text, View, Dimensions, Button, DrawerLayoutAndroid, TextInput, Platform, Pressable } from 'react-native';
import { CancelContext, } from './components/Contexts';
import { Icon } from 'react-native-paper';
import Map from './components/Map';
import Weathercams from './pages/Weathercams';
import Customize from './pages/Customize';
import Cities from './pages/Cities';
import Weather from './pages/Weather';
import styles from './styles/style';
import CameraStations from './pages/CameraStations';

import { Citiesopen, CameraStationsOpen, City } from './components/Contexts';

export default function App() {
  const drawerRef = useRef(null);
  const [showWeathercams, setShowWeathercams] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [showForecast, setShowForecast] = useState(false);
  const [showWeather, setShowWeather] = useState(false);
  const [showMap, setShowMap] = useState(true);
  const [showCameraStations, setShowCameraStations] = useState(false);
  const [chosenCity, setChosenCity] = useState("Oulu");

  const [cancel, setCancel] = useState([]);

  const openDrawer = () => {
    drawerRef.current.openDrawer();
  };

  const closeDrawer = () => {
    drawerRef.current.closeDrawer();
  };

  const openWeathercams = () => {
    setShowWeathercams(true);
    setShowCustomize(false);
    setShowForecast(false);
    setShowWeather(false);
    setShowMap(false);
    setShowCameraStations(false);
    drawerRef.current.closeDrawer();
  };

  const openCustomize = () => {
    setShowCustomize(true);
    setShowWeathercams(false);
    setShowForecast(false);
    setShowWeather(false);
    setShowMap(false);
    setShowCameraStations(false);
    drawerRef.current.closeDrawer();
  };

  const openForecast = () => {
    setShowForecast(true);
    setShowWeathercams(false);
    setShowCustomize(false);
    setShowWeather(false);
    setShowMap(false);
    setShowCameraStations(false);
    drawerRef.current.closeDrawer();
  };

  const openWeather = () => {
    setShowWeather(true);
    setShowWeathercams(false);
    setShowCustomize(false);
    setShowForecast(false);
    setShowMap(false);
    setShowCameraStations(false);
    drawerRef.current.closeDrawer();
  };

  const close = () => {
    setShowCustomize(false);
    setShowWeathercams(false);
    setShowForecast(false);
    setShowWeather(false);
    setShowCameraStations(false);
    setShowMap(true);
  }

  return (
    <Citiesopen.Provider value={{ showForecast, setShowForecast }}>
      <CameraStationsOpen.Provider value={{ showCameraStations, setShowCameraStations }}>
        <City.Provider value={{ chosenCity, setChosenCity }}>
          <DrawerLayoutAndroid
            ref={drawerRef}
            drawerWidth={Dimensions.get('window').width * 0.8}
            drawerPosition="left"
            renderNavigationView={() => (
              <View style={styles.drawerContainer}>
                <Pressable style={styles.buttonColor} onPress={closeDrawer}>
                  <Text style={styles.buttonText}>Close</Text>
                </Pressable>
                <Pressable style={styles.buttonColor} onPress={openWeathercams}>
                  <Text style={styles.drawerItem}>Weathercams</Text>
                </Pressable>
                <Pressable style={styles.buttonColor} onPress={openForecast}>
                  <Text style={styles.drawerItem}>Forecast</Text>
                </Pressable>
                <Pressable style={styles.buttonColor} onPress={openWeather}>
                  <Text style={styles.drawerItem}>Current weather</Text>
                </Pressable>
                <Pressable style={styles.buttonColor} onPress={openCustomize}>
                  <Text style={styles.drawerItem}>Customize</Text>
                </Pressable>
              </View>
            )}
          >
            <View style={styles.container}>
              <StatusBar backgroundColor="#fff" barStyle="dark-content" />
              {showMap ? (
                <Map style={styles.map} />
              ) : showWeathercams ? (
                <Weathercams />
              ) : showForecast ? (
                <Cities />
              ) : showWeather ? (
                <Weather />
              ) : showCustomize ? (
                <Customize />
              ) : showCameraStations ? (
                <CameraStations />
              ) : null}

              <View style={styles.searchContainer}>
                {!showWeathercams && !showCustomize && !showForecast && !showWeather ? (
                  <>
                    <Button style={styles.button} title="☰" onPress={openDrawer} />
                    <TextInput
                      style={styles.searchBar}
                      placeholder={'Search'}
                      placeholderTextColor={'#666'}
                    />
                  </>
                ) : (
                  <>
                    <Pressable onPress={close}>
                      <Icon color={'black'} source='close-circle-outline' size={32} />
                    </Pressable>
                    <Button style={styles.button} title="☰" onPress={openDrawer} />
                  </>
                )}


              </View>
            </View>
          </DrawerLayoutAndroid>
        </City.Provider>
      </CameraStationsOpen.Provider>
    </Citiesopen.Provider>

  );
}

