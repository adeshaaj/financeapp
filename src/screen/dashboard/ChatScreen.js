//import liraries
import React, { Component } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { BlurView } from 'expo-blur';
const uri = 'https://s3.amazonaws.com/exp-icon-assets/ExpoEmptyManifest_192.png';

// create a component
const ChatScreen = () => {
    return (
        <View style={styles.container}>
      <Image style={{ width: 192, height: 192 }} source={{ uri }} />

      {/* Adjust the tint and intensity */}
      <BlurView tint="light" intensity={100} style={styles.notBlurred}>
        <Image style={{ width: 196, height: 196 }} source={{ uri }} />
      </BlurView>
    </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
      },
      notBlurred: {
        ...StyleSheet.absoluteFill,
      },
});

//make this component available to the app
export default ChatScreen;

