import React, {Component} from 'react';
import { Platform, StatusBar, SafeAreaView, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import { DrawerNavigation } from 'react-navigation';
import SliderEntry, {sliderWidth, itemWidth} from './SliderEntry';

// Define constants
const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 0;

const HEADINGS = [
  'Journalism in the Age of Fake News',
  'Korean American Entrepreneurship: Take Nothing for Granted',
  'Korean Americans in Fashion: Defining Our Design',
  'Korean Americans in Law: Tipping the Scales',
  'Korean American Women: Limitless',
  'Closing Speaker'
];

const colors = {
  black: '#1a1917',
  gray: '#888888'
};

const SPEAKERS = [

  [
    {
      illustration: require('../img/Katie_Kim.jpg')
    },
    {
      illustration: require('../img/Nydia_Han.jpg')
    }
  ],
  // entrepreneurship
  [
    {
      illustration: require('../img/Mike_Kim_and_Theo_Lee.jpg')
    }
  ],
  // fashion
  [
    {
      illustration: require('../img/Dae_Lim.jpg')
    },
    {
      illustration: require('../img/Peter_Kim.jpg')
    },
    {
      illustration: require('../img/Lydia_Forstmann.jpg')
    }
  ],
  // law
  [
    {
      illustration: require('../img/Eunkyung_Kim_Shin.jpg')
    },
    {
      illustration: require('../img/Alex_Lee.jpg')
    }
  ],
  [
    {
      illustration: require('../img/Susan_Jung_Townsend.jpg')
    },
    {
      illustration: require('../img/Crystal_Kim.jpg')
    },
    {
      illustration: require('../img/Kyung_Yoon.jpg')
    }
  ],
  // closing
  [
    {
      illustration: require('../img/Jin_Ha.jpg')
    }
  ]
];


  export default class SpeakersScreen extends Component {
    constructor (props) {
        super(props);
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM
        };
    }

    _renderItem ({item, index}) {
        return <SliderEntry data={item} />;
    }

    // View of each slide space for one speaker
    oneSpeaker (number, title) {
      const { slider1ActiveSlide } = this.state;

      return (
          <View style={styles.exampleContainer}>
              <Text style={styles.title}>{`${HEADINGS[number]}`}</Text>
              <Text style={styles.subtitle}>{title}</Text>
              <Carousel
                ref={c => this._slider1Ref = c}
                data={SPEAKERS[number]}
                renderItem = {this._renderItem}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                firstItem={SLIDER_1_FIRST_ITEM}
                inactiveSlideScale={0.94}
                inactiveSlideOpacity={0.7}
                containerCustomStyle={styles.slider}
                loop={false}
                autoplay={false}
                onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
              />
          </View>
      );
    }

    // View of each slide space for multiple speakers
    multSpeakers (number, title) {
        const { slider1ActiveSlide } = this.state;

        return (
            <View style={styles.exampleContainer}>
                <Text style={styles.title}>{`${HEADINGS[number]}`}</Text>
                <Text style={styles.subtitle}>{title}</Text>
                <Carousel
                  ref={c => this._slider1Ref = c}
                  data={SPEAKERS[number]}
                  renderItem = {this._renderItem}
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                  firstItem={SLIDER_1_FIRST_ITEM}
                  inactiveSlideScale={0.94}
                  inactiveSlideOpacity={0.7}
                  containerCustomStyle={styles.slider}
                  loop={false}
                  autoplay={false}
                  onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
                />
                <Pagination
                  dotsLength={SPEAKERS[number].length}
                  activeDotIndex={slider1ActiveSlide}
                  containerStyle={styles.paginationContainer}
                  dotColor={'rgba(101, 78, 163, 0.92)'} // pantone purple
                  dotStyle={styles.paginationDot}
                  inactiveDotColor={'#EEEEEE'}
                  inactiveDotOpacity={0.4}
                  inactiveDotScale={0.6}
                  carouselRef={this._slider1Ref}
                  tappableDots={!!this._slider1Ref}
                />
            </View>
        );
    }

    // Construct all speakers and show on screen
    render () {
        const example1 = this.multSpeakers(0, 'The conversation surrounding Asian American representation within the media is often limited to Hollywood, but representation matters in all areas, including journalism.');
        const example2 = this.multSpeakers(1, 'DefaultAutoplay | Parallax | Scale | Opacity | Pagination with tappable dots');
        const example3 = this.multSpeakers(2, 'Korean Americans maintain some of the most salient roles in the fashion industry, but the scene remains largely European-dominated. Our panelists will discuss their unconventional positions in a creative industry and how their Korean American identities have influenced their career trajectories.');
        const example4 = this.multSpeakers(3, 'The National Asian American Bar Association (NAPABA) and Yale Law School co-published the first comprehensive report on Asian Americans in law and found that Asian American lawyers continue to face obstacles in the workplace and within law schools. Our esteemed panelists will discuss their various trajectories into the field of law as well as the impact of their Korean American identity in the workplace.');
        const example6 = this.multSpeakers(4, 'The mounting expectations for Korean American women in terms of their workplace lives and beyond have long been pervasive and widespread. Our panelists will discuss the accomplishments and strides they have taken as Korean American women, despite immense pushback and obstacles, and the trajectories their lives have taken.');
        const example7 = this.oneSpeaker(5, 'Default layout | Loop | Autoplay | Parallax | Scale | Opacity | Pagination with tappable dots');

        return (
          <View style={styles.container}>
            <Image source={require('../img/banner.png')}  style = {styles.bannerContainer} />
            <View style={styles.hamburgerContainer}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('DrawerOpen')}>
                <Image source={require('../img/Hamburger_icon_white.png')} style={styles.hamburger} />
              </TouchableOpacity>
            </View>
            <Text style={styles.titleText}>
              Speakers
            </Text>
            <ScrollView
              style={styles.scrollview}
              scrollEventThrottle={200}
              directionalLockEnabled={true}>
                { example1 }
                { example2 }
                { example3 }
                { example4 }
                { example6 }
                { example7 }
            </ScrollView>
          </View>
        );
    }
}
//export default SpeakersScreen;

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 6 / 16);

// check graphics dimensions
const styles = StyleSheet.create({
    bannerContainer: {
      resizeMode: 'cover',
      top: 0,
      width: '110%',
      height: imageHeight - 20,
    },
    container: {
        flex: 1,
        backgroundColor: '#240A40',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollview: {
        flex: 1
    },
    exampleContainer: {
        paddingVertical: 30
    },
    title: {
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        //color: 'rgba(255, 255, 255, 0.9)',
        color: '#EEEEEE',
        fontSize: 25,
        fontFamily: 'Avenir',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    subtitle: {
        marginTop: 5,
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: colors.gray,
        fontSize: 13,
      // fontStyle: 'italic',
        textAlign: 'center'
    },
    slider: {
        marginTop: 15,
        overflow: 'visible' // for custom animations
    },
    paginationContainer: {
        paddingVertical: 8
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 8
    },
    titleText: {
      fontSize: 35,
      color: 'white',
      backgroundColor: 'rgba(52, 52, 52, 0)',
      fontWeight: 'bold',
      fontFamily: 'Avenir',
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      top: '6.5%',
    },
    hamburgerContainer: {
      position: 'absolute',
      top: '7%',
      left: '4%',
    },
    hamburger: {
      width: 38,
      height: 38,
    },
    image: {
      width: '100%',
      height: '100%',
    }
  });
