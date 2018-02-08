import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
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
        {/* put your own code after this */}
    {/* <View style = {styles.container}> 
      <View style={styles.speakerContainer}>
        <Text style = {styles.speakerText}>
          Jin Ha
        </Text>
        <Image source={require('./jin_ha.jpeg')}/>
      </View>
    </View> */}
  {/* </ScrollView> */}
    </View>
    )
}

export default SpeakersScreen;

// check graphics dimensions
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
      backgroundColor: 'rgba(52, 52, 52, 0)',
      fontWeight: 'bold',
      fontFamily: 'Avenir',
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      top: '5%',
    },
    // old version without view beneath
    // titleText: {
    //   fontSize: 40,
    //   color: 'white',
    //   backgroundColor: 'rgba(52, 52, 52, 0)',
    //   fontWeight: 'bold',
    //   position: 'absolute',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   top: '5%',
    // },
    speakerText: {
      fontSize: 35,
    },
    speakerContainer: {
      justifyContent: 'center',
      position: 'absolute',
      top: 20,
      alignItems: 'center',
      borderRadius: 2,
      borderWidth: 0.5,
      borderColor: '#fff',
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
      top: '1%',
      left: '4%',
    },
    hamburger: {
      width: 40,
      height: 40,
    },
    image: {
      width: 100,
      height: 100,
    }
  });
  
  