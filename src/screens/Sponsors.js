import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';

const SponsorsScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Image source={require('../img/banner.png')}  style = {styles.bannerContainer} />
        <View style={styles.hamburgerContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
            <Image source={require('../img/Hamburger_icon_white.png')} style={styles.hamburger} />
          </TouchableOpacity>
        </View>
        <Text style={styles.titleText}>
          Sponsors
        </Text>
        {/* put your own code after this */}
      </View>
  )
}

// avenir
export default SponsorsScreen;

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
    position: 'absolute',
    fontFamily: 'Avenir',
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
  },
  image: {
    width: '100%',
    height: '100%',
  }
});

