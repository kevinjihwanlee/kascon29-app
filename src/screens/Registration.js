import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { DrawerNavigator, SafeAreaView } from 'react-navigation';

const RegistrationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../img/banner.png')}  style = {styles.bannerContainer} />
      <View style={styles.hamburgerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
          <Image source={require('../img/Hamburger_icon_white.png')} style={styles.hamburger} />
        </TouchableOpacity>
      </View>
      <Text style={styles.titleText}>
        Registration
      </Text>
      {/* put your own code after this */}
        <Text style={styles.bodyText}>
        'Click the link below to register for KASCON 29 through Eventbrite. Please keep in mind that prices will vary depending on their respective registration cycles, which are listed below.'
        </Text>
    </View>
  )
}

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: '5%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerContainer: {
    resizeMode: 'contain',
      position: 'absolute',
      top: '-45%',
      width: 390,
  },
  baseText: {
    fontFamily: 'Avenir',
  },
  titleText: {
    fontSize: 40,
    color: 'white',
    fontFamily: 'Avenir',
    backgroundColor: 'rgba(52, 52, 52, 0)',
    fontWeight: 'bold',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: '5%',
  },
  hamburgerContainer: {
    position: 'absolute',
    top: '1%',
    left: '4%',
  },
  hamburger: {
    width: 40,
    height: 40,
  }
});
