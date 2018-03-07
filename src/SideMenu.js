import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { DrawerNavigation, NavigationActions } from 'react-navigation';
import { StyleSheet, ScrollView, Text, View, Image } from 'react-native';

const SideMenu = ({ navigation }) => {
  return (
    <View style={styles.container}>
            {/* <View style={styles.logoContainer}> */}
            <View style = {styles.logoContainer}>
                <Image source={require('../src/img/Logo_PurpleBlackLetters_Small.png')} style={styles.logo} />
                <Text style = {styles.dimensions}> DIMENSIONS </Text>
            </View>
          <View>
            <Text style={styles.sectionHeadingStyle} onPress={() => navigation.navigate('Home')}>
              Home
            </Text>
            <Text style={styles.sectionHeadingStyle}onPress={() => navigation.navigate('About')}>
              About
            </Text>
            <Text style={styles.sectionHeadingStyle}onPress={() => navigation.navigate('Speakers')}>
              Speakers
            </Text>
            <Text style={styles.sectionHeadingStyle}onPress={() => navigation.navigate('Schedule')}>
              Schedule
            </Text>
            <Text style={styles.sectionHeadingStyle}onPress={() => navigation.navigate('Board')}>
              Meet the Board
            </Text>
            <Text style={styles.sectionHeadingStyle}onPress={() => navigation.navigate('Sponsors')}>
              Sponsors
            </Text>
          </View>
        <View style={styles.footerContainer}>
          <Text style = {styles.footerText}>Thank you for coming to KASCON29: Dimensions! Please use
              this app for funsies :)
          </Text>
        </View>
      </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    logoContainer: {
      paddingTop: 50,
      paddingBottom:20,
      alignItems: 'center',
      backgroundColor: '#d3d3d3',
    },
    sectionHeadingStyle: {
      paddingVertical: 15,
      paddingHorizontal: 5,
      paddingLeft: 15,
      fontSize: 22,
      fontFamily: 'Avenir',
    },
    footerContainer: {
      bottom: '5%',
      paddingLeft: 15,
      position: 'absolute',
    },
    footerText: {
      fontFamily: 'Avenir',
    },
    logo: {
      width: 240,
      height: 65,
    },
    dimensions: {
      paddingTop: 10,
      fontFamily: 'Avenir',
      fontSize: 25,
      color: 'white',
    }
  });


SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;
