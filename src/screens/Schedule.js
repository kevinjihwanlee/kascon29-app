import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';

const ScheduleScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Image source={require('../img/banner.png')}  style = {styles.bannerContainer} />
        <View style={styles.hamburgerContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
            <Image source={require('../img/Hamburger_icon_white.png')} style={styles.hamburger} />
          </TouchableOpacity>
        </View>
        <Text style={styles.titleText}>
          Schedule
        </Text>
        <ScrollView contentContainerStyle={styles.textContainer}>
          <Image source={require('../img/Schedule.jpg')} style = {styles.schedule}/>
        </ScrollView>
      </View>
  )
}

export default ScheduleScreen;

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
  schedule: {
    resizeMode: 'cover',
    width: 350,
  },
  textContainer: {
    alignItems: 'flex-start',
    margin: 15,
    justifyContent: 'center',
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

