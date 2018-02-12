import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { DrawerNavigation, NavigationActions } from 'react-navigation';
import { StyleSheet, ScrollView, Text, View, Image } from 'react-native';

const SideMenu = ({ navigation }) => {
  return (
    <View style={styles.container}>
            {/* <View style={styles.logoContainer}> */}
            <View style = {styles.logoContainer}>
                <Image source={require('../src/img/Logo_PurpleBlackLetters_Small.png')} style={styles.logo} />
                <Text style = {styles.dimensions}> DIMENSIONS </Text>
            </View>
          <View>
            <Text style={styles.sectionHeadingStyle} onPress={() => navigation.navigate('Home')}>
              Home
            </Text>
            <Text style={styles.sectionHeadingStyle}onPress={() => navigation.navigate('Registration')}>
              Registration
            </Text>
            <Text style={styles.sectionHeadingStyle}onPress={() => navigation.navigate('Speakers')}>
              Speakers
            </Text>
            <Text style={styles.sectionHeadingStyle}onPress={() => navigation.navigate('Schedule')}>
              Schedule
            </Text>
            <Text style={styles.sectionHeadingStyle}onPress={() => navigation.navigate('Sponsors')}>
              Sponsors
            </Text>
          </View>
        <View style={styles.footerContainer}>
          <Text style = {styles.footerText}>Thank you for coming to KASCON29: Dimensions! Please use 
              this app for funsies :)
          </Text>
        </View>
      </View>
  )
}

// class SideMenu extends Component {
//   navigateToScreen = (route) => () => {
//     const navigateAction = NavigationActions.navigate({
//       routeName: route
//     });
//     // this.props.navigation.dispatch(navigateAction);
//     this.props.navigation.goBack();
//   }
//   render () {
//     return (
//       <View style={styles.container}>
//             {/* <View style={styles.logoContainer}> */}
//             <View style = {styles.logoContainer}>
//                 <Image source={require('../src/img/Logo_PurpleBlackLetters_Small.png')} style={styles.logo} />
//                 <Text style = {styles.dimensions}> DIMENSIONS </Text>
//             </View>
//           <View>
//             <Text style={styles.sectionHeadingStyle}onPress={this.navigateToScreen('HomeScreen')}>
//               Home
//             </Text>
//             <Text style={styles.sectionHeadingStyle}onPress={this.navigateToScreen('RegistrationScreen')}>
//               Registration
//             </Text>
//             <Text style={styles.sectionHeadingStyle}onPress={this.navigateToScreen('SpeakersScreen')}>
//               Speakers
//             </Text>
//             <Text style={styles.sectionHeadingStyle}onPress={this.navigateToScreen('ScheduleScreen')}>
//               Schedule
//             </Text>
//             <Text style={styles.sectionHeadingStyle}onPress={this.navigateToScreen('SponsorsScreen')}>
//               Sponsors
//             </Text>
//           </View>
//         <View style={styles.footerContainer}>
//           <Text style = {styles.footerText}>Thank you for coming to KASCON29: Dimensions! Please use 
//               this app for funsies :)
//           </Text>
//         </View>
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    },
    logoContainer: {
        paddingTop: 70,
        paddingBottom:30,
        alignItems: 'center',
        // paddingLeft: 10,
      backgroundColor: '#d3d3d3',
    },
    sectionHeadingStyle: {
        paddingVertical: 15,
        paddingHorizontal: 5,
        // color: 'white',
        // borderRadius: 0,
        // borderWidth: 0.5,
        // borderLeftColor: '#202020',
        // borderRightColor: '#202020',
        // borderTopColor: '#787878',
        paddingLeft: 15,
        fontSize: 22,
      //fontWeight: 'bold',
      fontFamily: 'Avenir',
    },
    footerContainer: {
     bottom: '5%',
     paddingLeft: 15,
     position: 'absolute',
    },
    footerText: {
        // color: 'white',
        fontFamily: 'Avenir',
    },
    logo: {
        width: 240,
        height: 65,
    },
    dimensions: {
        paddingTop: 10,
        fontFamily: 'Avenir',
        fontSize: 25,
        color: 'white',
        //color: '#654EA3',
    }
  });


SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;