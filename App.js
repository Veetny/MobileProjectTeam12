import React, { useRef, useState } from 'react';
import { StatusBar, StyleSheet, Text, View, Dimensions, Button, DrawerLayoutAndroid, TextInput, Platform, Pressable } from 'react-native';
import { CancelContext, } from './components/Contexts';
import { Icon } from 'react-native-paper';
import Map from './components/Map';
import Customize from './pages/Customize';
import Cities from './pages/Cities';
import Weather from './pages/Weather';
import styles from './styles/style';
import CameraStations from './pages/CameraStations';

import { Citiesopen, CameraStationsOpen, City, MapOpen, SelectedLanguage } from './components/Contexts';

export default function App() {
  const drawerRef = useRef(null);
  const [showCustomize, setShowCustomize] = useState(false);
  const [showForecast, setShowForecast] = useState(false);
  const [showWeather, setShowWeather] = useState(false);
  const [showMap, setShowMap] = useState(true);
  const [showCameraStations, setShowCameraStations] = useState(false);
  const [chosenCity, setChosenCity] = useState("Oulu");
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const [cancel, setCancel] = useState([]);

  const openDrawer = () => {
    drawerRef.current.openDrawer();
  };

  const closeDrawer = () => {
    drawerRef.current.closeDrawer();
  };



  const openCustomize = () => {
    setShowCustomize(true);
    setShowForecast(false);
    setShowWeather(false);
    setShowMap(false);
    setShowCameraStations(false);
    drawerRef.current.closeDrawer();
  };

  const openForecast = () => {
    setShowForecast(true);
    setShowCustomize(false);
    setShowWeather(false);
    setShowMap(false);
    setShowCameraStations(false);
    drawerRef.current.closeDrawer();
  };

  const openWeather = () => {
    setShowWeather(true);
    setShowCustomize(false);
    setShowForecast(false);
    setShowMap(false);
    setShowCameraStations(false);
    drawerRef.current.closeDrawer();
  };

  const close = () => {
    setShowCustomize(false);
    setShowForecast(false);
    setShowWeather(false);
    setShowCameraStations(false);
    setShowMap(true);
  }

  return (
    <MapOpen.Provider value={{ showMap, setShowMap }}>
      <Citiesopen.Provider value={{ showForecast, setShowForecast }}>
        <CameraStationsOpen.Provider value={{ showCameraStations, setShowCameraStations }}>
          <City.Provider value={{ chosenCity, setChosenCity }}>
            <SelectedLanguage.Provider value={{ selectedLanguage, setSelectedLanguage }}>
              <DrawerLayoutAndroid
                ref={drawerRef}
                drawerWidth={Dimensions.get('window').width * 0.8}
                drawerPosition="left"
                renderNavigationView={() => (
                  <View style={styles.drawerContainer}>
                      <Pressable style={styles.buttonColor} onPress={closeDrawer}>
                          <Text style={styles.buttonText}>
                              {{
                                  en: "Close",
                                  sv: "Stäng",
                                  fi: "Sulje"
                              }[selectedLanguage]}
                          </Text>
                      </Pressable>
                      <Pressable style={styles.buttonColor} onPress={openForecast}>
                          <Text style={styles.drawerItem}>
                              {{
                                  en: "Cities",
                                  sv: "Städer",
                                  fi: "Kaupungit"
                              }[selectedLanguage]}
                          </Text>
                      </Pressable>
                      <Pressable style={styles.buttonColor} onPress={openCustomize}>
                          <Text style={styles.drawerItem}>
                              {{
                                  en: "Customize",
                                  sv: "Anpassa",
                                  fi: "Mukauta"
                              }[selectedLanguage]}
                          </Text>
                      </Pressable>
                  </View>
              )}
              >
                <View style={styles.container}>
                  <StatusBar backgroundColor="#fff" barStyle="dark-content" />
                  {showMap ? (
                    <Map style={styles.map} />
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
                    {!showCustomize && !showForecast && !showWeather && !showCameraStations ? (
                      <>
                        <Button style={styles.button} title="☰" onPress={openDrawer} />
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
            </SelectedLanguage.Provider>
          </City.Provider>
        </CameraStationsOpen.Provider>
      </Citiesopen.Provider>
    </MapOpen.Provider>
  );
}

