import React, { useRef, useState } from 'react';
import { StatusBar, StyleSheet, Text, View, Dimensions, Button, DrawerLayoutAndroid, TextInput, Platform, Pressable } from 'react-native';
import { CancelContext, } from './components/Contexts';
import { Icon } from 'react-native-paper';
import Map from './components/Map';
import Weathercams from './pages/Weathercams';
import Customize from './pages/Customize';

export default function App() {
  const drawerRef = useRef(null);
  const [showWeathercams, setShowWeathercams] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [showForecast, setForecast] = useState(false);
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
    drawerRef.current.closeDrawer();
  };

  const openCustomize = () => {
    setShowCustomize(!showCustomize);
    setShowWeathercams(false);
    drawerRef.current.closeDrawer();
  };

  const openForecast = () => {
    setShowCustomize(!showCustomize);
    setShowWeathercams(false);
    drawerRef.current.closeDrawer();
  };
  
  const openWeather = () => {
    setShowCustomize(!showCustomize);
    setShowWeathercams(false);
    drawerRef.current.closeDrawer();
  };

  const close = () => {
    setShowCustomize(false);
    setShowWeathercams(false);
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 10,
    left: 10,
    right: 10,
    zIndex: 2,
  },
  button: {
    marginRight: 10,
  },
  searchBar: {
    flex: 1,
    borderRadius: 10,
    margin: 10,
    color: '#000',
    borderColor: '#666',
    backgroundColor: '#D9D9D9',
    borderWidth: 1,
    height: 45,
    paddingHorizontal: 10,
    fontSize: 18,
  },
  drawerContainer: {
    flex: 1,
    backgroundColor: '#45727C',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingLeft: 20,
    height: Dimensions.get('window').height - (Platform.OS === 'android' ? StatusBar.currentHeight : 0),
  },
  drawerItem: {
    fontSize: 18,
  },
  buttonColor: {
    backgroundColor: '#6C92F3',
    height: 50,
    justifyContent: 'center',
    width: 130,
    borderRadius: 10,
    margin: 5,
  },
  buttonText: {
    fontSize: 20,
    padding: 10,
  },
});