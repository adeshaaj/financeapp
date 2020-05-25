//import libraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView, Dimensions, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

let dimensions = Dimensions.get("window");
let imageHeight = Math.round((dimensions.width * 9) / 16);
let imageWidth = dimensions.width/4 ;

// home Component
const Home = () => {
    return (
        <View style={styles.container}> 
         {/* Header Start*/}        
            <View style={styles.header}>
            <View style={styles.headerLogo}>
               <Image  
               source={require('../../assets/logo1.png')}
               style={styles.headerLogoImg}
               />
               </View>
            </View>
            {/* Header Close*/}

            {/* Main Container start*/}
            <View style={styles.upperContainer}>
               <View>
                    <Image 
                        source={require('../../assets/bgimg.png')}
                         style={styles.bgImg}
                    />
               </View>
               <View style={styles.searchbox}>
               <Ionicons 
                    name="ios-search" 
                    size={32} 
                    color='#2A1B3D' 
                   style={styles.searchicon}
                    />
                    <TextInput 
                        style = {styles.inputfield}
                        placeholder = "Enter the Place Name !"
                    />
               </View>
            </View>
            <View style={styles.iconboxs}>
               <View style={styles.iconbox}>
               <Image style={{ width : 35 , height: 35}}
                   source={require('../../assets/hotel.png')}
               />
                    <Text>Hotel</Text> 
               </View>
               <View style={styles.iconbox}>
               <Image style={{ width : 35 , height: 35}}
                   source={require('../../assets/flight.png')}
               />
                    <Text>Flights</Text> 
               </View>
               <View style={styles.iconbox}>
               <Image style={{ width : 35 , height: 35}}
                   source={require('../../assets/cab.png')}
               />
                    <Text>Cabs</Text> 
               </View>
               <View style={styles.iconbox}>
               <Image style={{ width : 35 , height: 35}}
                   source={require('../../assets/train.png')}
               />
                    <Text>Trains</Text> 
               </View>
            </View>

          {/* Main Container Close*/}  

          <View style={{marginTop : 30}}></View>

          {/* Recomended Tab */}
          
            <View style={styles.recomended}>
              <View style={styles.recomendedText}>     
                <Text style={{ fontSize:22, }}>
                    Recomended !
                </Text>
            </View>

            {/* ScrollView */}

           <View style={{marginTop:8}}>
             <ScrollView horizontal={true}>
                <View style={styles.eachscrollitem}>
                   <Image
                       style={{ height: 145, width: 100 }}
                       source={require("../../assets/tajmahal.png")}
                 />
                    <View style={{position:"absolute", alignItems:"center" }}>
                         <Text style={{fontSize:15, color:"white"}}>Taj Mahal</Text>
                         <Text style={{fontSize:8, marginBottom: 6, color:"white"}}>Agra, Uttar Pradesh</Text>
                    </View>
                </View>
                <View style={styles.eachscrollitem}>
                   <Image
                       style={{ height: 145, width: 100 }}
                       source={require("../../assets/indiagate.png")}
                 />
                    <View style={{position:"absolute", alignItems:"center" }}>
                         <Text style={{fontSize:15, color:"white"}}>India Gate</Text>
                         <Text style={{fontSize:8, marginBottom: 6, color:"white"}}>Delhi</Text>
                    </View>
                </View>
                <View style={styles.eachscrollitem}>
                   <Image
                       style={{ height: 145, width: 100 }}
                       source={require("../../assets/qutubminar.png")}
                 />
                    <View style={{position:"absolute", alignItems:"center"  }}>
                         <Text style={{fontSize:15, color:"white"}}>Qutub Minar</Text>
                         <Text style={{fontSize:8, marginBottom: 6, color:"white"}}>Hyderabad, Andra Pradesh</Text>
                    </View>
                </View>
                <View style={styles.eachscrollitem}>
                   <Image
                       style={{ height: 145, width: 100 }}
                       source={require("../../assets/tajmahal.png")}
                 />
                    <View style={{position:"absolute", alignItems:"center"  }}>
                         <Text style={{fontSize:15, color:"white"}}>Taj Mahal</Text>
                         <Text style={{fontSize:8, marginBottom: 6, color:"white"}}>Agra, Uttar Pradesh</Text>
                    </View>
                </View>
                <View style={styles.eachscrollitem}>
                   <Image
                       style={{ height: 145, width: 100 }}
                       source={require("../../assets/tajmahal.png")}
                 />
                    <View style={{position:"absolute", alignItems:"center"  }}>
                         <Text style={{fontSize:15, color:"white"}}>Taj Mahal</Text>
                         <Text style={{fontSize:8, marginBottom: 6, color:"white"}}>Agra, Uttar Pradesh</Text>
                    </View>
                </View>
                <View style={styles.eachscrollitem}>
                   <Image
                       style={{ height: 145, width: 100 }}
                       source={require("../../assets/tajmahal.png")}
                 />
                    <View style={{position:"absolute", alignItems:"center"  }}>
                         <Text style={{fontSize:15, color:"white"}}>Taj Mahal</Text>
                         <Text style={{fontSize:8, marginBottom: 6, color:"white"}}>Agra, Uttar Pradesh</Text>
                    </View>
                </View>
                <View style={styles.eachscrollitem}>
                   <Image
                       style={{ height: 145, width: 100 }}
                       source={require("../../assets/tajmahal.png")}
                 />
                    <View style={{position:"absolute", alignItems:"center"  }}>
                         <Text style={{fontSize:15, color:"white"}}>Taj Mahal</Text>
                         <Text style={{fontSize:8, marginBottom: 6, color:"white"}}>Agra, Uttar Pradesh</Text>
                    </View>
                </View>
                <View style={styles.eachscrollitem}>
                   <Image
                       style={{ height: 145, width: 100 }}
                       source={require("../../assets/tajmahal.png")}
                 />
                    <View style={{position:"absolute", alignItems:"center"  }}>
                         <Text style={{fontSize:15, color:"white"}}>Taj Mahal</Text>
                         <Text style={{fontSize:8, marginBottom: 6, color:"white"}}>Agra, Uttar Pradesh</Text>
                    </View>
                </View>
                <View style={styles.eachscrollitem}>
                   <Image
                       style={{ height: 145, width: 100 }}
                       source={require("../../assets/tajmahal.png")}
                 />
                    <View style={{position:"absolute", alignItems:"center"  }}>
                         <Text style={{fontSize:15, color:"white"}}>Taj Mahal</Text>
                         <Text style={{fontSize:8, marginBottom: 6, color:"white"}}>Agra, Uttar Pradesh</Text>
                    </View>
                </View>
                <View style={styles.eachscrollitem}>
                   <Image
                       style={{ height: 145, width: 100 }}
                       source={require("../../assets/tajmahal.png")}
                 />
                    <View style={{position:"absolute", alignItems:"center"  }}>
                         <Text style={{fontSize:15, color:"white"}}>Taj Mahal</Text>
                         <Text style={{fontSize:8, marginBottom: 6, color:"white"}}>Agra, Uttar Pradesh</Text>
                    </View>
                </View>
                <View style={styles.eachscrollitem}>
                   <Image
                       style={{ height: 145, width: 100 }}
                       source={require("../../assets/tajmahal.png")}
                 />
                    <View style={{position:"absolute", alignItems:"center"  }}>
                         <Text style={{fontSize:15, color:"white"}}>Taj Mahal</Text>
                         <Text style={{fontSize:8, marginBottom: 6, color:"white"}}>Agra, Uttar Pradesh</Text>
                    </View>
                </View>
                <View style={styles.eachscrollitem}>
                   <Image
                       style={{ height: 145, width: 100 }}
                       source={require("../../assets/tajmahal.png")}
                 />
                    <View style={{position:"absolute", alignItems:"center"  }}>
                         <Text style={{fontSize:15, color:"white"}}>Taj Mahal</Text>
                         <Text style={{fontSize:8, marginBottom: 6, color:"white"}}>Agra, Uttar Pradesh</Text>
                    </View>
                </View>
                <View style={styles.eachscrollitem}>
                   <Image
                       style={{ height: 145, width: 100 }}
                       source={require("../../assets/tajmahal.png")}
                 />
                    <View style={{position:"absolute", alignItems:"center"  }}>
                         <Text style={{fontSize:15, color:"white"}}>Taj Mahal</Text>
                         <Text style={{fontSize:8, marginBottom: 6, color:"white"}}>Agra, Uttar Pradesh</Text>
                    </View>
                </View>
                <View style={styles.eachscrollitem}>
                   <Image
                       style={{ height: 145, width: 100 }}
                       source={require("../../assets/tajmahal.png")}
                 />
                    <View style={{position:"absolute", alignItems:"center"  }}>
                         <Text style={{fontSize:15, color:"white"}}>Taj Mahal</Text>
                         <Text style={{fontSize:8, marginBottom: 6, color:"white"}}>Agra, Uttar Pradesh</Text>
                    </View>
                </View>
                <View style={styles.eachscrollitem}>
                   <Image
                       style={{ height: 145, width: 100 }}
                       source={require("../../assets/tajmahal.png")}
                 />
                    <View style={{position:"absolute", alignItems:"center"  }}>
                         <Text style={{fontSize:15, color:"white"}}>Taj Mahal</Text>
                         <Text style={{fontSize:8, marginBottom: 6, color:"white"}}>Agra, Uttar Pradesh</Text>
                    </View>
                </View>

                 <View style={styles.eachscrollitem}>
                   <Image
                       style={{ height: 145, width: 100 }}
                       source={require("../../assets/tajmahal.png")}
                 />
                    <View style={{position:"absolute", alignItems:"center"  }}>
                         <Text style={{fontSize:15, color:"white"}}>Taj Mahal</Text>
                         <Text style={{fontSize:8, marginBottom: 6, color:"white"}}>Agra, Uttar Pradesh</Text>
                    </View>
                </View>
            </ScrollView>
           {/* ScrollView Closed*/}
         </View>
        {/* Recomended Close*/} 
      </View>
    </View>
    );
};     

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    header: {
        backgroundColor: '#FFF',
        width: '100%',
        height: 85,
        shadowColor: "#000",
        shadowOffset: {
        	width: 0,
	        height: 2,
            },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,

    },
    headerLogo: {
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    headerLogoImg:{
        width: 175,
        height: 40,
        marginTop: 37
    },
    upperContainer:{
        
    },
    bgImg:{
        width: "100%",
        height: 150
    },
    searchbox:{ 
        flex:1,
        flexDirection: "row",
        position:'absolute',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 35,
        height: 40, 
        width : 300,
        borderBottomLeftRadius:12,
        borderTopRightRadius: 12,
        borderBottomRightRadius :12,
        borderTopLeftRadius:12,
        backgroundColor:"white",
        
    },
    searchicon:{
       marginLeft: 10
    },    
    inputfield:{
        marginLeft: 20,
    },
    iconboxs:{
        justifyContent:"space-around",
        flexDirection:"row",
        marginTop: -48
    },
    iconbox:{
        flexDirection:"column",
        justifyContent: "center",
        alignItems: 'center',
        width:60,
        height:65,
        backgroundColor:"white",
        shadowColor: "#000",
        shadowOffset: {
                 	width: 0,
	                height: 0,
                    },
        shadowOpacity: 0.15,
        shadowRadius: 1.52,
        elevation: 4,
     },
     recomended:{
        backgroundColor:"#F3F3F3"
     }, 
     recomendedText:{
         marginLeft:25,
         marginTop:8
     },
     recomendedSlider:{
         flex:1,
         flexDirection: "row",

     },
     eachscrollitem:{
        marginLeft:12,
        justifyContent:"flex-end",
        alignItems:"center",
     },
     notBlurred: {
        ...StyleSheet.absoluteFill,
      },
   

});

export default Home;