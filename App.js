import React, { useRef } from 'react';
import { StatusBar, StyleSheet, Text, View, Dimensions, Button, DrawerLayoutAndroid, TextInput, Platform } from 'react-native';
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
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.header}>
        <Button style={styles.button} title="☰" onPress={openDrawer} />
        <TextInput style={styles.SearchBar}
          placeholder={'Search'}
          placeholderTextColor={'#666'}
        />
      </View>
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
        <Map />
      </DrawerLayoutAndroid>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight -30 : 0,
  },
  button: {
    maxWidth: 130,
  },
  SearchBar: {
    flex: 1,
    borderRadius: 10,
    margin: 10,
    color: '#000',
    borderColor: '#666',
    backgroundColor: '#FFF',
    borderWidth: 1,
    height: 45,
    paddingHorizontal: 10,
    fontSize: 18,
  },
  drawerContainer: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingLeft: 20,
  },
  drawerItem: {
    fontSize: 18,
    marginBottom: 10,
  },
});