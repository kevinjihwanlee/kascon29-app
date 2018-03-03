import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import HomeScreen from './src/screens/Home'
import AboutScreen from './src/screens/About'
import SpeakersScreen from './src/screens/Speakers'
import ScheduleScreen from './src/screens/Schedule'
import SponsorsScreen from './src/screens/Sponsors'
import SideMenu from './src/SideMenu'

const RootStack = DrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    About: {
      screen: AboutScreen,
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
    contentComponent: SideMenu,
    // contentOptions: {
    //   activeTintColor: '#654EA3',
    // }
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
