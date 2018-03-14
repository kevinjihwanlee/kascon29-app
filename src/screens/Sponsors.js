import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';

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
        <ScrollView contentContainerStyle={styles.textContainer}>
          <Text style={styles.insidetitleText}>
            GOLD
          </Text>
          <Text style={styles.insidetitleText}>
            SILVER
          </Text>
          <Text style={styles.insidetitleText}>
            BRONZE
          </Text>
          <Text style={styles.insidetitleText}>
            EXECUTIVE
          </Text>
      </ScrollView>
      </View>
  )
}

// avenir
export default SponsorsScreen;

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 6 / 16);

// check graphics dimensions
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#240A40',
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
  textContainer: {
    alignItems: 'center',
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
  insideText: {
    fontSize: 18,
    fontFamily: 'Avenir',
    fontWeight: 'normal',
    color: 'white',
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


