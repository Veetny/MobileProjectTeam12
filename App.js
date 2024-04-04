import React, { useRef } from 'react';
import { StatusBar, StyleSheet, Text, View, Dimensions, Button, DrawerLayoutAndroid } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Map from './components/Map';

export default function App() {
  const drawerRef = useRef(null);

  const openDrawer = () => {
    drawerRef.current.openDrawer();
  };

  const closeDrawer = () => {
    drawerRef.current.closeDrawer();
  };

  return (
    <DrawerLayoutAndroid
      ref={drawerRef}
      drawerWidth={Dimensions.get('window').width * 0.8}
      drawerPosition="left"
      renderNavigationView={() => (
        <View style={styles.drawerContainer}>
          <Button title="Close" onPress={closeDrawer} />
          <Text style={styles.drawerItem}>Menu Item 1</Text>
          <Text style={styles.drawerItem}>Menu Item 2</Text>
          <Text style={styles.drawerItem}>Menu Item 3</Text>
        </View>
      )}
    >
      <View style={styles.container}>
        <Button style={styles.button} title="☰" onPress={openDrawer} />
        <Map />
      </View>
    </DrawerLayoutAndroid>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    top: 25,
  },
  button: {
    alignItems: 'flex-start',
    top: 150,
    maxWidth: 130,
    height: 100,
  },
  drawerContainer: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: 50,
    paddingLeft: 20,
  },
  drawerItem: {
    fontSize: 18,
    marginBottom: 10,
  },
});