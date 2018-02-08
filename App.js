import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import HomeScreen from './src/screens/Home'
import RegistrationScreen from './src/screens/Registration'
import SpeakersScreen from './src/screens/Speakers'
import ScheduleScreen from './src/screens/Schedule'
import SponsorsScreen from './src/screens/Sponsors'

const RootStack = DrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Registration: {
      screen: RegistrationScreen,
    },
    Speakers: {
      screen: SpeakersScreen
    },
    Schedule: {
      screen: ScheduleScreen,
    },
    Sponsors: {
      screen: SponsorsScreen,
    }
  },
  {
    initialRouteName: 'Home',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    contentOptions: {
      activeTintColor: '#654EA3',
    }
  },
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const styles = StyleSheet.create({
  hamburgerContainer: {
    position: 'absolute',
    top: '1%',
    left: '4%',
  },
  hamburger: {
    width: 40,
    height: 40,
  },
})