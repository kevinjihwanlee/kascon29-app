import React, { Component } from 'react';
import { StyleSheet, Text, Button, Platform, ScrollView, StatusBar, View, Image, TouchableHighlight} from 'react-native';
import { DrawerNavigator, SafeAreaView } from 'react-navigation';
import { AppRegistry, Text, TextInput, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Image, ScrollView, Text } from 'react-native';

const MyNavScreen = ({ navigation, banner }) => (
  <View style={styles.container}>
    <View style={styles.hamburgerContainer}>
      <TouchableHighlight onPress={() => navigation.navigate('DrawerOpen')}>
        <Image
          source={require('./Hamburger_icon.png')}
          style={styles.hamburger}
          onPress ={() => navigation.navigate('DrawerOpen')}
        />
      </TouchableHighlight>
    </View>
  </View>
);

class ScheduleScreen extends Component {
  render() {
    return (
      <View style={this.props.style}>
        <ScrollView contentContainerStyle={styles.container}
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
          </View>
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
    width: 100%,
    height:auto
  }
});
