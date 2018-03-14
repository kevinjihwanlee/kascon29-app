import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { DrawerNavigator, SafeAreaView } from 'react-navigation';

const AboutScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../img/banner.png')}  style = {styles.bannerContainer} />
      <View style={styles.hamburgerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
          <Image source={require('../img/Hamburger_icon_white.png')} style={styles.hamburger} />
        </TouchableOpacity>
      </View>
      <Text style={styles.titleText}>
        About
      </Text>
      <ScrollView contentContainerStyle={styles.textContainer}>
        <View style = {styles.sectionContainer}>
        <View style = {styles.insideTitle}>
          <Text style={styles.insidetitleText}>
            About KASCON
          </Text>
          </View>
          <Text style={styles.insideText}>
            The Korean American Students Conference (KASCON) is the largest and oldest student-run ethnic-specific conference in the United States. Since its inception at Princeton University in 1987, KASCON has touched the lives of thousands of Korean Americans, bringing strength and cohesion to the greater Korean American community by showcasing successful Korean American leaders from a variety of industries and fields, including business, politics, and fashion. Through various workshops, speaker panels, and networking events, KASCON aims to facilitate conversations and discourse about the ways in which our bicultural values shape our personal and professional developments, making positive differences in our respective communities and beyond.
          </Text>
        </View>
        <View style = {styles.sectionContainer}>
        <View style = {styles.insideTitle}>
          <Text style={styles.insidetitleText}>
            The Mirae Foundation
          </Text>
          </View>
          <Text style={styles.insideText}>
            Founded in 1991, the Mirae Foundation is an independent, 501(c)3 not-for-profit organization that devotes 100% of its resources to endeavors such as KASCON in order to foster leadership in new generations of the Korean American community. The Foundation serves as a permanent advisory body to KASCON, linking past and current organizers, speakers, and supporters.
          </Text>
        </View>
        <View style = {styles.sectionContainer}>
        <View style = {styles.insideTitle}>
          <Text style={styles.insidetitleText}>
            Dimensions
          </Text>
          </View>
          <Text style={styles.insideText}>
            The theme of this year’s conference will be Dimensions, which aims to spotlight the multiple facets that make up our Korean American identities. Dimensions describes our combined struggles to find balance between our “Koreanness” and our “Americanness,” showing how two irreconcilable extremes are actually more integrated than we realize. Acknowledging that our identities are neither singularly Korean nor American is central to the vision of KASCON 29: Dimensions.
          </Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default AboutScreen;

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 6 / 16);

// check graphics dimensions
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#240A40',
    alignItems: 'center',
  },
  sectionContainer: {
    backgroundColor: '#EEEEEE',
    //color: 'white',
    margin: 20,
    padding: 15,
    borderRadius: 2,
  },
  bannerContainer: {
    resizeMode: 'cover',
    top: 0,
    width: '110%',
    height: imageHeight - 20,
  },
  insideTitle: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    //marginTop: 15,
    marginBottom: 15,
    paddingBottom: 5,
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
    alignItems: 'flex-start',
  },
  insidetitleText: {
    fontSize: 30,
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    alignItems: 'flex-start',
    color: '#333333',
  },
  insideText: {
    fontSize: 18,
    fontFamily: 'Avenir',
    fontWeight: 'normal',
    color: '#333333',
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
