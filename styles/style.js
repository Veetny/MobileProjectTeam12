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
    center: {
      textAlign: "center"
    },
    buttonText: {
      fontSize: 20,
      padding: 10,
    },
    KymmeniaPaddingeja: {
    paddingTop: 100,
    paddingRight: 10,
    backgroundColor: '#45727C',
    flex: 1,
    },
    ForecastContainer:{
        flex: 1,
        justifyContent:'top',
        paddingTop: 75,
        backgroundColor: '#45727C',
    },
    searchIconFore:{
        marginRight: 8,
        color: '#6C92F3',
    },
    listText: {
        marginTop: 10,
        fontSize: 16,
        paddingHorizontal: 20,
        height: 2000,
    },
    textItem1:{
      margin: 5,
      color: "black",
      padding: 3
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
  border1:{
    backgroundColor: "lightblue",
    border: 2,
    borderRadius: 3,
    borderColor: "black",
    borderWidth: 1,
    margin: 1,
  },
  stationText: {
    padding: 5,
    color: "white",
  },
  stationText2: {
    paddingLeft: 5
  },
  additionalText: {
    color: "red",
    fontWeight: "bold",
    paddingLeft: 5
  },
  viewi:{
    flexDirection: 'row',
  },
  cities:{
    fontSize: 20,
    margin: 6,
  },
  containerCust: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#45727C',
  },
  radioButtonCust: {
    backgroundColor: '#eee',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
    borderRadius: 5,
  },
  selectedButtonCust: {
    backgroundColor: 'skyblue',
  },
  buttonTextCust: {
    fontSize: 16,
  },
  });