import React, { useRef } from 'react';
import { StatusBar, StyleSheet, Text, View, Dimensions, Button, DrawerLayoutAndroid, TextInput, Platform, Pressable } from 'react-native';
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
            <Pressable style={styles.ButtonColor} onPress={closeDrawer} ><Text style={styles.Buttontext}>Close</Text></Pressable>
            <Text style={styles.drawerItem}>Forecast</Text>
            <Text style={styles.drawerItem}>Present weather</Text>
            <Text style={styles.drawerItem}>Customize</Text>
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
    backgroundColor: '#ABD5DE',
    paddingHorizontal: 10,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight -30 : 0,
  },
  button: {
    maxWidth: 130,

  },
  ButtonColor: {
    backgroundColor: '#6C92F3',
    height: 50,
    justifyContent: 'center',
    width: 130,
    borderRadius: 10,
  },
  Buttontext: {
    fontSize: 20,
    padding: 10,
  },
  SearchBar: {
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
    paddingLeft: 20,
  },
  drawerItem: {
    fontSize: 18,
    marginBottom: 10,
  },
});