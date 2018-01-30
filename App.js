import React from 'react';
import { StyleSheet, Text, Button, Platform, ScrollView, StatusBar, View, Image, TouchableHighlight} from 'react-native';
import { DrawerNavigator, SafeAreaView } from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const MyNavScreen = ({ navigation, banner }) => (
  <View style={styles.container}>
    <View style={styles.container}>
      <Image source={require('./background.png')} />
    </View>
    <View style={styles.hamburgerContainer}>
      <TouchableHighlight onPress={() => navigation.navigate('DrawerOpen')}>
      <Image source={require('./Hamburger_icon.png')} style={styles.hamburger} onPress ={() => navigation.navigate('DrawerOpen')}/>
      </TouchableHighlight>
     </View>
     <View style={styles.logoContainer}>
       <Image source={require('./Logo_black.png')} style={styles.logo} />
   </View>
  </View>
);

const RegistrationScreen = ({ navigation }) => (
  <MyNavScreen banner={'Registration Screen'} navigation={navigation} />
);
RegistrationScreen.navigationOptions = {
  drawerLabel: 'Registration',
};

const ScheduleScreen = ({ navigation }) => (
  <MyNavScreen banner={'Schedule Screen'} navigation={navigation} />
);
ScheduleScreen.navigationOptions = {
  drawerLabel: 'Schedule',
};

const SpeakersScreen = ({ navigation }) => (
  <MyNavScreen banner={'Speakers Screen'} navigation={navigation} />
);
ScheduleScreen.navigationOptions = {
  drawerLabel: 'Speakers',
};

const SponsorsScreen = ({ navigation }) => (
  <MyNavScreen banner={'Sponsors Screen'} navigation={navigation} />
);
ScheduleScreen.navigationOptions = {
  drawerLabel: 'Sponsors',
};


const DrawerExample = DrawerNavigator(
  {
    Registration: {
      path: '/',
      screen: RegistrationScreen,
    },
    Schedule: {
      path: '/sent',
      screen: ScheduleScreen,
    },
    Speakers: {
      path: '/',
      screen: SpeakersScreen,
    },
    Sponsors: {
      path: '/',
      screen: SponsorsScreen,
    }
  },
  {
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    initialRouteName: 'Registration',
    contentOptions: {
      activeTintColor: '#654EA3',
    },
  }
);

export default DrawerExample;


// check graphics dimensions
const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: '5%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 575,
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
    top: '1%',
    left: '4%',
  },
  hamburger: {
    width: 40,
    height: 40,
  }
});
