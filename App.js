import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import SideMenu from 'react-native-side-menu';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Image source={require('./background.png')} />
        </View>
        <View style={styles.hamburgerContainer}>
          <Image source={require('./Hamburger_icon.png')} style={styles.hamburger} />
        </View>
        <View style={styles.logoContainer}>
          <Image source={require('./Logo_black.png')} style={styles.logo} />
        </View>
      </View>
    );
  }
} 


// check graphics dimensions
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 550,
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
    top: '4%',
    left: '4%',
  },
  hamburger: {
    width: 35,
    height: 35,
  }
});
