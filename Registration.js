import React, { Component } from 'react';
import { StyleSheet, Text, Button, Platform, ScrollView, StatusBar, View, Image, TouchableHighlight} from 'react-native';
import { DrawerNavigator, SafeAreaView } from 'react-navigation';
import { AppRegistry, Text, TextInput, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const MyNavScreen = ({ navigation, banner }) => (
  <View style={styles.container}>
    <View style={styles.hamburgerContainer}>
      <TouchableHighlight onPress={() => navigation.navigate('DrawerOpen')}>
        <Image source={require('./Hamburger_icon.png')} style={styles.hamburger} onPress ={() => navigation.navigate('DrawerOpen')}/>
      </TouchableHighlight>
    </View>
  </View>
);

class RegistrationScreen extends Component {
  render() {
    return (
      <View>
        <Text style={styles.titleText}>
        'Registration'
        </Text>
        <Text style={styles.bodyText}>
        'Click the link below to register for KASCON 29 through Eventbrite. Please keep in mind that prices will vary depending on their respective registration cycles, which are listed below.'
        </Text>
      </View>
    );
  }

//   <View style={styles.container}>
//   </View>
//
//   const element = <h1>Registration</h1>;
//     ReactDOM.render(
//       element,
//       document.getElementById('root')
//   );
//
//   constructor(props) {
//     super(props);
//     this.state = {
//       bodyText: 'Click the link below to register for KASCON 29 through Eventbrite. Please keep in mind that prices will vary depending on their respective registration cycles, which are listed below.'
//     };
//   }
//
//   render() {
//     return (
//       <Text style={styles.baseText}>
//         // <Text style={styles.titleText} onPress={this.onPressTitle}>
//         //   {this.state.titleText}{'\n'}{'\n'}
//         // </Text>
//         <Text numberOfLines={5}>
//           {this.state.bodyText}
//         </Text>
//       </Text>
//     );
//   }
// }

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
  }

});
