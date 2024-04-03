import React from "react";
import { StyleSheet, View, Dimensions, TextInput } from "react-native";
import MapView from 'react-native-maps';
import Constants from 'expo-constants';

export default function Map(){
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

            </MapView>
            <View style={{ position: 'absolute', top: 30, width: '80%' }}>
    <TextInput
      style={{
        borderRadius: 10,
        margin: 10,
        color: '#000',
        borderColor: '#666',
        backgroundColor: '#FFF',
        borderWidth: 1,
        height: 45,
        paddingHorizontal: 10,
        fontSize: 18,
      }}
      placeholder={'Search'}
      placeholderTextColor={'#666'}
    />
  </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - Constants.statusBarHeight,
    }
})