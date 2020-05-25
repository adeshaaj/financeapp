//import liraries
import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';


const slides = [
  {
    key: 'somethun',
    title: 'Traveller',
    text: 'Explore Incredible.\nplaces around the world',
    image: require('../../assets/upper1.png'),
    backgroundColor: '#2A1B3D',
  },
  {
    key: 'somethun-dos',
    title: 'Title 2',
    text: 'Explore Incredible.\nplaces around the world',
    image: require('../../assets/upper2.png'),
    backgroundColor: '#87CEEB',
  },
  {
    key: 'somethun1',
    title: 'Rocket guy',
    text: 'Explore Incredible.\nplaces around the world',
    image: require('../../assets/upper3.png'),
    backgroundColor: '#2A1B3D',
  }
];

// create a component
const IntroImages = props => {

    return ( 
    <AppIntroSlider 
      slides={slides} 
      onDone={props.onDone}
     />
     
    );
};



//make this component available to the app
export default IntroImages;
