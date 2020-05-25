//import liraries
import { createStackNavigator } from 'react-navigation-stack';
import React, { Component } from 'react';
import Home from './home';
import { Ionicons } from '@expo/vector-icons';
import { View, Image, Dimensions, StyleSheet, TouchableOpacity, 
    TouchableWithoutFeedback, Animated, Text, Alert } from 'react-native';


const HomeScreen = props => {
     return (
            <View style={{
                flex: 1,
               }}>
               <View>
                     <Home/>
               </View> 
                

                <View style={{

                    position: 'absolute',
                    alignSelf: 'center',
                    backgroundColor: '#000',
                    width: 70,
                    height: 70,
                    borderRadius: 35,
                    bottom: 30,
                    zIndex: 20 ,
                    }}>

                    <TouchableWithoutFeedback 
                     onPress={() => props.navigation.navigate('Home')}>
                        <View style={[styles.button, styles.actionBtn]}>

                            <Image style={{ width: 60, height: 60 }}
                                resizeMode="contain"
                                source={{ uri: 'https://icon-library.net/images/android-plus-icon/android-plus-icon-0.jpg' }} />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                
                
                <View style={{
                    position: 'absolute',
                    backgroundColor: 'white',
                    border: 2,
                    radius: 3,
                    shadowOpacity: 0.3,
                    shadowRadius: 3,
                    shadowOffset: {
                    height: 3, width: 3
                    },
                    x: 0,
                    y: 0,
                    style: { marginVertical: 5 },
                    bottom: 0,
                    width: '100%',
                    height: 50,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: 10,
                    paddingHorizontal: 25,
                    borderColor:'#E0E0E0',
                    borderTopWidth:0.8,
                }}>

                    
                    
             <View style={{
                  flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
                    }}>
                 <TouchableOpacity 
                        onPress={() => props.navigation.navigate('Home')}
                        >
                    <Ionicons 
                    name="ios-home" 
                    size={32} 
                    color='#2A1B3D' 

                    />
                 </TouchableOpacity>
                    </View>
                    
                    <View style={{
                        flexDirection: 'column', alignItems: 'center',justifyContent:'center',marginStart:40
                    }}>

                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('Home')}
                        >
                           <Ionicons 
                              name="ios-search" 
                              size={32} 
                              color='#2A1B3D' 
                         />
                       </TouchableOpacity>
                     </View>

                        <View style={{
                             flexDirection: 'column', alignItems: 'center',justifyContent:'space-between',marginStart:80,
                        }}>

                            <TouchableOpacity
                              onPress={() => props.navigation.navigate('Friend')}
                              style={{ marginHorizontal: 8, marginVertical: -2}}
                               >
                                <Ionicons 
                              name="ios-heart" 
                              size={32} 
                              color='#2A1B3D' 
                         />
                            </TouchableOpacity>
                            
                        </View>
                        <View style={{
                            flexDirection: 'column', alignItems: 'center',justifyContent:'flex-end',
                          
                        }}>
                            <TouchableOpacity
                                onPress={() => props.navigation.navigate('Chat')}
                                style={{ marginHorizontal:22, marginVertical: -1, marginRight:-2}}
                                >
                                 <Ionicons 
                              name="logo-youtube" 
                              size={32} 
                              color='#2A1B3D' 
                         />
                            </TouchableOpacity>
                            
                        </View>
                       
                        {/* this is Comment */}

                    {/* </View> */}
                </View>
            </View>
        );
    };
    
    
    
    { /* most of the science of friction and the most of the objective of my soul and the creative thinking the most
    \ of my creative thinking kyun bewaja muskuraye palke jhapaj n and the most of the Interce phase of Human nature and th
*/}


const styles = StyleSheet.create({

    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue'
    },
    button: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'grey',
        shadowOpacity: 0.1,
        shadowOffset: { x: 2, y: 0 },
        shadowRadius: 2,
        borderRadius: 30,
        position: 'absolute',
        bottom: 20,
        right: 0,
        top: 5,
        left: 5,
        shadowOpacity: 5.0,

    },
    actionBtn: {

        backgroundColor: '#1E90FF',
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 10,
        borderWidth: 2,
        borderColor: '#fff'


    }


});

//make this component available to the app
//make this component available to the app
export default HomeScreen;


