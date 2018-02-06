import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { DrawerNavigator, SafeAreaView } from 'react-navigation';

const RegistrationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.hamburgerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
          <Image source={require('../img/Hamburger_icon.png')} style={styles.hamburger} />
        </TouchableOpacity>
      </View>
      <Text style={styles.titleText}>
        'Registration'
        </Text>
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
  baseText: {
    fontFamily: 'Avenir',
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
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
