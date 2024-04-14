import React, { useRef, useState } from 'react';
import { StatusBar, StyleSheet, Text, View, Dimensions, Button, DrawerLayoutAndroid, TextInput, Platform, Pressable } from 'react-native';
import { CancelContext, } from './components/Contexts';
import { Icon } from 'react-native-paper';
import Map from './components/Map';
import Weathercams from './pages/Weathercams';
import Customize from './pages/Customize';
import Forecast from './pages/Forecast';
import Weather from './pages/Weather';
import styles from './styles/style';

export default function App() {
  const drawerRef = useRef(null);
  const [showWeathercams, setShowWeathercams] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [showForecast, setShowForecast] = useState(false);
  const [showWeather, setShowWeather] = useState(false);

  const [cancel, setCancel] = useState([]);

  const openDrawer = () => {
    drawerRef.current.openDrawer();
  };

  const closeDrawer = () => {
    drawerRef.current.closeDrawer();
  };

  const openWeathercams = () => {
    setShowWeathercams(!showWeathercams);
    setShowCustomize(false);
    setShowForecast(false);
    setShowWeather(false);
    drawerRef.current.closeDrawer();
  };

  const openCustomize = () => {
    setShowCustomize(!showCustomize);
    setShowWeathercams(false);
    setShowForecast(false);
    setShowWeather(false);
    drawerRef.current.closeDrawer();
  };

  const openForecast = () => {
    setShowForecast(!showForecast);
    setShowWeathercams(false);
    setShowCustomize(false);
    setShowWeather(false);
    drawerRef.current.closeDrawer();
  };

  const openWeather = () => {
    setShowWeather(!showWeather);
    setShowWeathercams(false);
    setShowCustomize(false);
    setShowForecast(false);
    drawerRef.current.closeDrawer();
  };

  const close = () => {
    setShowCustomize(false);
    setShowWeathercams(false);
    setShowForecast(false);
    setShowWeather(false);
  }

  return (

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
        {!showWeathercams && !showCustomize ? (
          <Map style={styles.map} />
        ) : showWeathercams ? (
          <Weathercams />
        )  : showForecast ? (
          <Forecast />
        ) : showWeather ? (
          <Weather />
        ) : showCustomize ? (
          <Customize />
        ) : null}
        
        <View style={styles.searchContainer}>
        {!showWeathercams && !showCustomize ? (
          <>
          <Button style={styles.button} title="☰" onPress={openDrawer} />
          <TextInput
            style={styles.searchBar}
            placeholder={'Search'}
            placeholderTextColor={'#666'}
          />
          </>
        ) :  (
          <>
          <Pressable onPress={close}>
            <Icon color={'black'} source='close-circle-outline' size={32} />
          </Pressable>
          <Button style={styles.button} title="☰" onPress={openDrawer} />
          </>
        ) }
          
          
        </View>
      </View>
    </DrawerLayoutAndroid>
  );
}

