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
        <View style = {styles.sectionContainer}>
          <View style = {styles.insideTitle}>
            <Text style={styles.insidetitleText}>
              Justine Kim
            </Text>
            <Text style={styles.subinsidetitleText}>
              Executive Director
            </Text>
          </View>
          <Image source = {require('../img/Jin_Ha.jpg')} style = {styles.boardImage}/>
          <Text style={styles.insideText}>
            Learning & Organizational Change '19
          </Text>
        </View>
        <View style = {styles.sectionContainer}>
          <View style = {styles.insideTitle}>
            <Text style={styles.insidetitleText}>
              Kimberly Kwon
            </Text>
            <Text style={styles.subinsidetitleText}>
              Associate Director
            </Text>
          </View>
          <Image source = {require('../img/Jin_Ha.jpg')} style = {styles.boardImage}/>
          <Text style={styles.insideText}>
            Computer Science '19
          </Text>
        </View>
        <View style = {styles.sectionContainer}>
          <View style = {styles.insideTitle}>
            <Text style={styles.insidetitleText}>
              Joon Choe
            </Text>
            <Text style={styles.subinsidetitleText}>
              Programming Director
            </Text>
          </View>
          <Image source = {require('../img/Jin_Ha.jpg')} style = {styles.boardImage}/>
          <Text style={styles.insideText}>
            Political Science '19
          </Text>
        </View>
        <View style = {styles.sectionContainer}>
          <View style = {styles.insideTitle}>
            <Text style={styles.insidetitleText}>
              Christie Sohn
            </Text>
            <Text style={styles.subinsidetitleText}>
              Finance Director
            </Text>
          </View>
          <Image source = {require('../img/Jin_Ha.jpg')} style = {styles.boardImage}/>
          <Text style={styles.insideText}>
            Political Science '19
          </Text>
        </View>
        <View style = {styles.sectionContainer}>
          <View style = {styles.insideTitle}>
            <Text style={styles.insidetitleText}>
              Paige Shin
            </Text>
            <Text style={styles.subinsidetitleText}>
              Entertainment Director
            </Text>
          </View>
          <Image source = {require('../img/Jin_Ha.jpg')} style = {styles.boardImage}/>
          <Text style={styles.insideText}>
            Journalism '19
          </Text>
        </View>
        <View style = {styles.sectionContainer}>
          <View style = {styles.insideTitle}>
            <Text style={styles.insidetitleText}>
              Catherine Kang
            </Text>
            <Text style={styles.subinsidetitleText}>
              Media Director
            </Text>
          </View>
          <Image source = {require('../img/Jin_Ha.jpg')} style = {styles.boardImage}/>
          <Text style={styles.insideText}>
            Communication Studies '18
          </Text>
        </View>
        <View style = {styles.sectionContainer}>
          <View style = {styles.insideTitle}>
            <Text style={styles.insidetitleText}>
              Jenny Kang
            </Text>
            <Text style={styles.subinsidetitleText}>
              Logistics Director
            </Text>
          </View>
          <Image source = {require('../img/Jin_Ha.jpg')} style = {styles.boardImage}/>
          <Text style={styles.insideText}>
            Comparative Literature '21
          </Text>
        </View>
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
      backgroundColor: '#240A40',
      alignItems: 'center',
      justifyContent: 'center',
    },
    sectionContainer: {
      backgroundColor: '#EEEEEE',
      //color: 'white',
      margin: 15,
      padding: 15,
      borderRadius: 2,
      width: '90%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    insideTitle: {
      flex: 1,
      flexDirection: 'row',
      borderBottomColor: 'black',
      borderBottomWidth: 2,
      //marginTop: 15,
      marginBottom: 5,
      paddingBottom: 5,
      justifyContent: 'space-between',
      alignItems: 'flex-end',
    },
    insidetitleText: {
      fontSize: 25,
      fontFamily: 'Avenir',
      fontWeight: 'bold',
      alignItems: 'flex-start',
      color: '#333333',
      paddingRight: 5,
    },
    subinsidetitleText: {
      fontSize: 15,
      fontFamily: 'Avenir',
      color: '#555555',
      paddingBottom: 4,
    },
    insideText: {
      fontSize: 18,
      fontFamily: 'Avenir',
      fontWeight: 'bold',
      color: '#333333',
      paddingTop: 10,
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
    top: '7%',
  },
  textContainer: {
    alignItems: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
    //marginLeft: 15,
    //marginRight: 15,

  },
  boardImage: {
    resizeMode: 'cover',
    width: 225,
    height: 225,
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
