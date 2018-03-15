import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import PinchZoomView from 'react-native-pinch-zoom-view';

const MapsScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Image source={require('../img/banner.png')}  style = {styles.bannerContainer} />
        <View style={styles.hamburgerContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
            <Image source={require('../img/Hamburger_icon_white.png')} style={styles.hamburger} />
          </TouchableOpacity>
        </View>
        <Text style={styles.titleText}>
          Maps
        </Text>
        <ScrollView contentContainerStyle={styles.textContainer}>
          <Text style = {styles.insidetitleText}>
            Norris Center
          </Text>
          <PinchZoomView>
          <View style = {styles.mapContainer}>
            <Image source={require('../img/Norris_2_Floor.jpg')} style = {styles.maps}/>
          </View>
          </PinchZoomView>
          <PinchZoomView>
          <View style = {styles.mapContainer}>
            <Image source={require('../img/Norris_3_Floor.jpg')} style = {styles.maps}/>
          </View>
          </PinchZoomView>
          <Text style = {styles.insidetitleText}>
            Northwestern Campus
          </Text>
          <PinchZoomView>
          <View style = {styles.mapContainer}>
            <Image source={require('../img/EV_campusmap.jpeg')} style = {styles.maps}/>
          </View>
          </PinchZoomView>
          <Text style = {styles.insidetitleText}>
            Evanston
          </Text>
          <PinchZoomView>
          <View style = {styles.mapContainer}>
            <Image source={require('../img/Evanston_Map.jpeg')} resizeMode = 'cover'style = {styles.maps}/>
          </View>
          </PinchZoomView>
        </ScrollView>
      </View>
  )
}

export default MapsScreen;

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 6 / 16);

// check graphics dimensions
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#240A40',
      alignItems: 'center',
      justifyContent: 'center',
    },
    bannerContainer: {
      resizeMode: 'cover',
      top: 0,
      width: '110%',
      height: imageHeight - 20,
    },
  baseText: {
    fontFamily: 'Avenir',
  },
  textContainer: {
    //alignItems: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
    //margin: 15,
    justifyContent: 'center',
  },
  insidetitleText: {
    fontSize: 30,
    margin: 15,
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    color: '#EEEEEE',
  },
  titleText: {
    fontSize: 35,
    color: 'white',
    backgroundColor: 'rgba(52, 52, 52, 0)',
    fontWeight: 'bold',
    fontFamily: 'Avenir',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: '6.5%',
  },
  maps: {
    flex: 1,
    resizeMode: 'contain',
    width: dimensions.width*.95,
    height: 375,
    //height: null,
  },
  mapContainer: {
    flex: 1,
    paddingBottom: 15,
    //margin: 15,
  },
  hamburgerContainer: {
    position: 'absolute',
    top: '7%',
    left: '4%',
  },
  hamburger: {
    width: 38,
    height: 38,
  },
  image: {
    width: '100%',
    height: '100%',
  }
});

