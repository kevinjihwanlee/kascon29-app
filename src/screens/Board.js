import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { DrawerNavigator, SafeAreaView } from 'react-navigation';

const BoardScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../img/banner.png')}  style = {styles.bannerContainer} />
      <View style={styles.hamburgerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
          <Image source={require('../img/Hamburger_icon_white.png')} style={styles.hamburger} />
        </TouchableOpacity>
      </View>
      <Text style={styles.titleText}>
        Meet the Board
      </Text>
      <ScrollView contentContainerStyle={styles.textContainer}>
        <Text style={styles.insidetitleText}>
          Meet the Board of KASCON 2018
        </Text>
        <Text style={styles.insideText}>
        text about board of kascon etc blablablabla cool what haha
        </Text>
      </ScrollView>
    </View>
  )
}

export default BoardScreen;

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 6 / 16);

// check graphics dimensions
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
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
  titleText: {
    fontSize: 30,
    color: 'white',
    backgroundColor: 'rgba(52, 52, 52, 0)',
    fontWeight: 'bold',
    fontFamily: 'Avenir',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: '6.5%',
  },
  textContainer: {
    alignItems: 'flex-start',
    marginLeft: 15,
    marginRight: 15,

  },
  insidetitleText: {
    fontSize: 20,
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    alignItems: 'flex-start',
    marginTop: 15,
  },
  insideText: {
    fontSize: 18,
    fontFamily: 'Avenir',
    fontWeight: 'normal',
    paddingTop: 10,
    paddingBottom: 15,
  },
  boardImage: {
    width: 150,
    height: 150,
    marginTop: 15,
  },
  hamburgerContainer: {
    position: 'absolute',
    top: '7%',
    left: '4%',
  },
  hamburger: {
    width: 38,
    height: 38,
  }
});
