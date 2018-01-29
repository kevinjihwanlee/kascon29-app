import React from 'react';
import { StyleSheet, Text, Button, Platform, ScrollView, StatusBar, View, Image} from 'react-native';
import { DrawerNavigator, SafeAreaView } from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const MyNavScreen = ({ navigation, banner }) => (
  <View style={styles.container}>
  <View style={styles.container}>
    <Image source={require('./background.png')} />
  </View>
  <ScrollView>
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text>{banner}</Text>
      <Button
        onPress={() => navigation.navigate('DrawerOpen')}
        title="Open drawer"
      />
    </SafeAreaView>
    <StatusBar barStyle="default" />
  </ScrollView>
  </View>
);

const InboxScreen = ({ navigation }) => (
  <MyNavScreen banner={'Inbox Screen'} navigation={navigation} />
);
InboxScreen.navigationOptions = {
  drawerLabel: 'Inbox',
  // drawerIcon: ({ tintColor }) => (
  //   <MaterialIcons
  //     name="move-to-inbox"
  //     size={24}
  //     style={{ color: tintColor }}
  //   />
  // ),
};

const DraftsScreen = ({ navigation }) => (
  <MyNavScreen banner={'Drafts Screen'} navigation={navigation} />
);
DraftsScreen.navigationOptions = {
  drawerLabel: 'Drafts',
  // drawerIcon: ({ tintColor }) => (
  //   <MaterialIcons name="drafts" size={24} style={{ color: tintColor }} />
  // ),
};

const DrawerExample = DrawerNavigator(
  {
    Inbox: {
      path: '/',
      screen: InboxScreen,
    },
    Drafts: {
      path: '/sent',
      screen: DraftsScreen,
    },
  },
  {
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    initialRouteName: 'Drafts',
    contentOptions: {
      activeTintColor: '#e91e63',
    },
  }
);

export default DrawerExample;

// import React from 'react';
// import { StyleSheet, Text, View, Image } from 'react-native';
// import SideMenu from 'react-native-side-menu';

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.container}>
//           <Image source={require('./background.png')} />
//         </View>
//         <View style={styles.hamburgerContainer}>
//           <Image source={require('./Hamburger_icon.png')} style={styles.hamburger} />
//         </View>
//         <View style={styles.logoContainer}>
//           <Image source={require('./Logo_black.png')} style={styles.logo} />
//         </View>
//       </View>
//     );
//   }
// } 


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
