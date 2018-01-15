import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Image source={require('./background.png')} />
        </View>
        <View style={styles.logoContainer}>

          <Image source={require('./Logo_gray.png')} style={styles.logo} />
        </View>


      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 50,
  },
  logoContainer: {
    backgroundColor: 'rgba(0,0,0,0)',
    position: 'absolute',
    top: 50,
  }
});
