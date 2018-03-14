import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { DrawerNavigation } from 'react-navigation';


const SpeakersScreen = ({ navigation }) => {
    return (
    <View style={styles.container}>
      <Image source={require('../img/banner.png')}  style = {styles.bannerContainer} />
      <View style={styles.hamburgerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
          <Image source={require('../img/Hamburger_icon_white.png')} style={styles.hamburger} />
        </TouchableOpacity>
      </View>
      <Text style={styles.titleText}>
        Speakers
      </Text>
      <ScrollView contentContainerStyle={styles.textContainer}>
        <Text style={styles.insidetitleText}>
          Opening Speaker
        </Text>
        <View style={styles.speakerContainer}>
          <Image source={require('../img/Jin_Ha.jpg')} style={styles.Jin_Ha} />
        </View>
        <Text style={styles.insidetitleText}>
          Korean Americans in Journalism
        </Text>
        <Text style={styles.insidetitleText}>
          Korean Americans in Academia
        </Text>
        <View style={styles.speakerContainer}>
          <Image source={require('../img/Jin_Ha.jpg')} style={styles.Jin_Ha} />
        </View>
        <Text style={styles.insidetitleText}>
          Korean Americans in Fashion
        </Text>
        <Text style={styles.insidetitleText}>
          Korean Americans in Law
        </Text>
        <Text style={styles.insidetitleText}>
          Korean Americans in Entrepreneurship
        </Text>
        <Text style={styles.insidetitleText}>
          Korean Americans in Women
        </Text>
        <Text style={styles.insidetitleText}>
          Closing Speaker
        </Text>
      </ScrollView>
    </View>
    )


}

export default SpeakersScreen;

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 6 / 16);

// check graphics dimensions
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#240A40',
      alignItems: 'center',
    },
    Jin_Ha: {
      //top: '10%',
      resizeMode: 'cover',
      width: '95%',
      height: '65%',
      alignItems: 'center',
      //justifyContent: 'center',
    },
    textContainer: {
      alignItems: 'flex-start',
      marginLeft: 15,
      marginRight: 15,
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
    insidetitleText: {
      fontSize: 25,
      fontFamily: 'Avenir',
      fontWeight: 'bold',
      alignItems: 'flex-start',
      marginTop: 15,
    },
    speakerContainer: {
      alignItems: 'center',
    },
    logo: {
      width: 575,
      height: 80,
    },
    logoContainer: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      top: '25%',
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
      width: 100,
      height: 100,
    }
  });
