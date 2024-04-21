import React from "react";
import { StyleSheet, View, Dimensions, Platform, StatusBar } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import Constants from 'expo-constants';
import styles from "../styles/style";

export default function Map() {
    return (
        <View style={styles.container}>
            <MapView style={styles.map}
                initialRegion={{
                    latitude: 65.0800,
                    longitude: 25.4800,
                    latitudeDelta: 11.1922,
                    longitudeDelta: 11.1421,
                }}
            >
        <Marker
            coordinate={{latitude: 61.462733,
            longitude: 23.769505}}
            title={"title"}
            description={"description"}
         />
      
            </MapView>
        </View>
    )
}
