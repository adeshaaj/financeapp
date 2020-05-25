//import liraries
import React, { Component } from 'react';
import { View, Button, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
const FriendScreen = props => {
    return (
        <View style={styles.container}>
            <Button title="CHAT TO HUSSAIN" onPress={() => props.navigation.navigate('Chat')} />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

//make this component available to the app
export default FriendScreen;
