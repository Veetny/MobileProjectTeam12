import { StatusBar, StyleSheet, Text, View, Dimensions, Button, DrawerLayoutAndroid, TextInput, Platform, Pressable } from 'react-native';
import Constants from 'expo-constants';


export default StyleSheet.create({
    container: {
      flex: 1,
      position: 'relative',
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height - Constants.statusBarHeight,
      flex: 1,
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
    KymmeniaPaddingeja: {
    paddingTop: 100,
    paddingRight: 10,
    },
    ForecastContainer:{
        flex: 1,
        justifyContent:'top',
        paddingTop: 75,
        backgroundColor: '#45727C',
    },
    ForecastSearch:{
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 10,
        marginHorizontal: 20,
        backgroundColor: '#D9D9D9',
        paddingHorizontal: 10,
        height: 40,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#666',
    },
    searchIconFore:{
        marginRight: 8,
        color: '#6C92F3',
    },
    searchInputFore: {
        fontSize: 16,
    },
    listText: {
        marginTop: 10,
        fontSize: 16,
        paddingHorizontal: 20,
        height: 2000,
    },
    textItem1:{
      margin: 5
    },
    contentContainer1:{
      minWidth: '100%'
    },
    CustomizeContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  },
  defaultContainer: {
      backgroundColor: 'white',
  },
  blueContainer: {
      backgroundColor: 'blue',
  },
  darkContainer: {
      backgroundColor: 'black',
  },
  defaultText: {
      color: 'black',
      fontSize: 20,
  },
  blueText: {
      color: 'white',
      fontSize: 20,
  },
  darkText: {
      color: 'white',
      fontSize: 20,
  },
  image: {
    height: 200
  },
  });