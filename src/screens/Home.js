import React, { Component } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerNavigation } from 'react-navigation';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Image source={require('../img/skyline_pat.png')} style={styles.background} />
            </View>
            <View style={styles.hamburgerContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
                    <Image source={require('../img/Hamburger_icon.png')} style={styles.hamburger} />
                </TouchableOpacity>
            </View>
            <View style={styles.logoContainer}>
                <Image source={require('../img/Logo_black.png')} style={styles.logo} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    background: {
        bottom: '25%',
        justifyContent: 'center',
    },
    logo: {
        width: 565,
        height: 80,
    },
    logoContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: '30%',
    },
    hamburgerContainer: {
        position: 'absolute',
        top: '7%',
        left: '4%',
    },
    hamburger: {
        width: 40,
        height: 40,
    },
})

export default HomeScreen;