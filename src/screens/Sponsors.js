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
          <View style = {styles.introTextContainer}>
            <Text style = {styles.introText}>
              We'd like to extend a huge thank you to all our generous sponsors. KASCON29: Dimensions would not have been possible without them.
            </Text>
          </View>
          <Text style={styles.insidetitleText}>
            SILVER
          </Text>
          <View style = {styles.sponsLogos}>
            <Image source={require('../img/baekjeong_logo.jpg')} style = {styles.baekjeongLogo}/>
          </View>
          <Text style={styles.insidetitleText}>
            BRONZE
          </Text>
          <View style = {styles.sponsLogos}>
            <Image source={require('../img/bodyfriend_logo.png')} style = {styles.bodyfriendLogo}/>
          </View>
          <View style = {styles.sponsLogos}>
            <Image source={require('../img/mapogalmaegi_logo.png')} style = {styles.baekjeongLogo}/>
          </View>
          <View style = {styles.sponsLogos}>
            <Image source={require('../img/vigpartners_logo.jpeg')} style = {styles.baekjeongLogo}/>
          </View>
          <Text style={styles.insidetitleText}>
            EXECUTIVE
          </Text>
          <View style = {styles.sponsLogos}>
            <Image source={require('../img/lemieux_logo.png')} style = {styles.baekjeongLogo}/>
          </View>
          <View style = {styles.sponsLogos}>  
            <Image source={require('../img/sohnandko_logo.jpg')} style = {styles.baekjeongLogo}/>
          </View>
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
  sponsLogos: {
    paddingBottom: 10,
  },
  baseText: {
    fontFamily: 'Avenir',
  },
  introText: {
    fontSize: 20,
    fontFamily: 'Avenir',
    fontWeight: 'normal',
    color: '#EEEEEE',
    justifyContent: 'center',
    textAlign: 'center',
  },
  introTextContainer: {
    borderBottomColor: '#EEEEEE',
    borderBottomWidth: 1,
    marginTop: 10,
   // marginBottom: 15,
    paddingBottom: 15,
    marginLeft: 15,
    marginRight: 15,
  },
  baekjeongLogo: {
    resizeMode: 'cover',
    width: 200,
    height: 100,
  },
  bodyfriendLogo: {
    resizeMode: 'cover',
    width: 200,
    height: 70,
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
    width: '100%',
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


