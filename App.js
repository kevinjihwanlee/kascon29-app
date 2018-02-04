import React, { Component } from 'react';
import { StyleSheet, Text, Button, Platform, ScrollView, StatusBar, View, Image, TouchableOpacity } from 'react-native';
import { DrawerNavigator, SafeAreaView } from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// const HomeScreen = ({ navigation, banner }) => (
//   <View style={styles.container}>
//     <View style={styles.container}>
//       <Image source={require('./background.png')} />
//     </View>
//     <View style={styles.hamburgerContainer}>
//       <TouchableHighlight onPress={() => navigation.navigate('DrawerOpen')}>
//       <Image source={require('./Hamburger_icon.png')} style={styles.hamburger} onPress ={() => navigation.navigate('DrawerOpen')}/>
//       </TouchableHighlight>
//       <Hamburger active={this.state.active}
//         type="cross"
//         onPress={()=> this.setState({active: !this.state.active})} />
//      </View>
//      <View style={styles.logoContainer}>
//        <Image source={require('./Logo_black.png')} style={styles.logo} />
//    </View>
//   </View>
// );

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active:false
    }
  }

  navigationTest() {
    this.setState({active: !this.state.active});
    this.props.navigation.navigate('DrawerOpen');
  }

  render() {
    return (
      <View style={styles.container}>
    <View style={styles.container}>
      <Image source={require('./background.png')} />
    </View>
    <View style={styles.hamburgerContainer}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('DrawerOpen')}>
      <Image source={require('./Hamburger_icon.png')} style={styles.hamburger} onPress ={() => this.props.navigation.navigate('DrawerOpen')}/>
      </TouchableOpacity>
     </View>
     <View style={styles.logoContainer}>
       <Image source={require('./Logo_black.png')} style={styles.logo} />
   </View>
  </View>
    )
  }
}

const RegistrationScreen = ({ navigation }) => (
  <HomeScreen banner={'Registration Screen'} navigation={navigation} />
);
RegistrationScreen.navigationOptions = {
  drawerLabel: 'Registration',
};

const ScheduleScreen = ({ navigation, banner }) => (
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
ScheduleScreen.navigationOptions = {
  drawerLabel: 'Schedule',
};

const SpeakersScreen = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.hamburgerContainer}>
      <TouchableHighlight onPress={() => navigation.navigate('DrawerOpen')}>
        <Image source={require('./Hamburger_icon.png')} style={styles.hamburger} onPress ={() => navigation.navigate('DrawerOpen')}/>
      </TouchableHighlight>
    </View>
  {/* <ScrollView contentContainerStyle={styles.container}> */}
  {/* <View style = {styles.container}> */}
    <Text style={styles.titleText}>
    Speakers
    </Text>
    <View style={styles.speakerContainer}>
      <Text style={styles.speakerText}>
      blah
      </Text>
    </View>
    {/* </View> */}
  {/* </ScrollView> */}
</View>
);
SpeakersScreen.navigationOptions = {
  drawerLabel: 'Speakers',
};

const SponsorsScreen = ({ navigation }) => (
  <HomeScreen banner={'Sponsors Screen'} navigation={navigation} />
);
SponsorsScreen.navigationOptions = {
  drawerLabel: 'Sponsors',
};


const Drawer = DrawerNavigator(
  {
    Home: {
      path: '/',
      screen: HomeScreen,
    },
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

export default Drawer;


// check graphics dimensions
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
    fontSize: 30,
    fontWeight: 'bold',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: '5%',
  },
  speakerText: {
    fontSize: 15,
    position: 'absolute',
  },
  speakerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    borderWidth: 0.5,
    borderColor: '#fff',
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
  },
  image: {
    width: 100,
    height: 100,
  }
});
