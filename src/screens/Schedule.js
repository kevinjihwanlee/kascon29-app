import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default class ScheduleScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.hamburgerContainer}>
          <TouchableHighlight onPress={() => navigation.navigate('DrawerOpen')}>
            <Image source={require('./Hamburger_icon.png')} style={styles.hamburger} onPress ={() => navigation.navigate('DrawerOpen')}/>
          </TouchableHighlight>
        </View>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.titleText}>
          'Schedule'
          </Text>
          <Image
            source={{uri: 'http://www.gregscott.com/pano/vpano/20100516_1458_100_5183_web.jpg'}}
            style={styles.image}
          />
          <Text>
            'texttexttexttexttext text yay whoopdidoo what'
          </Text>
          <View style={styles.topBar}/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: '5%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    fontFamily: 'Avenir',
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
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

