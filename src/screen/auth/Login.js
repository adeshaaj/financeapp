import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialButtonViolet from "./components/MaterialButtonViolet";
import CupertinoButtonInfo from "./components/CupertinoButtonInfo";
import MaterialFixedLabelTextbox from "./components/MaterialFixedLabelTextbox";
import MaterialFixedLabelTextbox1 from "./components/MaterialFixedLabelTextbox1";
import { AppLoading } from "expo";
import * as Font from "expo-font";
class Login extends React.Component{
  constructor(props) {
    super(props);
  
    this.state = {loading:false};
  }
  async loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "montserrat-regular": require("../../../assets/fonts/Montserrat-Regular.ttf"),
      "montserrat-700": require("../../../assets/fonts/Montserrat-Regular.ttf"),
      "roboto-regular": require("../../../assets/fonts/Montserrat-Regular.ttf")
    })
  ]);
}
  componentWillMount(){
    this.setState({loading:true})
  }
  render(){
    if(this.state.loading){
      return <AppLoading startAsync={this.loadResourcesAsync}
        onFinish={() => this.setState({loading:false})}/>
    }
  return (
    <View style={styles.container}>
      <View style={styles.welcomeBackRow}>
        <Text style={styles.welcomeBack}>Welcome Back,</Text>
        <MaterialButtonViolet
          style={styles.materialButtonViolet}
        ></MaterialButtonViolet>
      </View>
      <Text style={styles.text}>Log In!</Text>
      <CupertinoButtonInfo
        style={styles.cupertinoButtonInfo}
      ></CupertinoButtonInfo>
      <MaterialFixedLabelTextbox
        style={styles.materialFixedLabelTextbox}
      ></MaterialFixedLabelTextbox>
      <MaterialFixedLabelTextbox1
        style={styles.materialFixedLabelTextbox1}
      ></MaterialFixedLabelTextbox1>
      <Text style={styles.forgotPassword}>Forgot Password</Text>
    </View>
  );}
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  welcomeBack: {
    fontFamily: "montserrat-regular",
    color: "#121212",
    height: 60,
    width: 205,
    fontSize: 25,
    alignSelf: 'flex-start'
  },
  materialButtonViolet: {
    height: 36,
    width: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 5,
      height: 5
    },
    elevation: 12,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    marginLeft: 26,
    position: 'absolute' ,
    right:0,
    top:0  
  },
  welcomeBackRow: {
    height: "5%",
    flexDirection: "row",
    marginTop: 77,
    marginLeft: 27,
    marginRight: 17
  },
  text: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 49,
    width: 183,
    fontSize: 40,
    alignSelf: 'flex-start'  
  },
  cupertinoButtonInfo: {
    height: 44,
    width: 130,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 5,
      height: 5
    },
    elevation: 15,
    shadowOpacity: 0.23,
    shadowRadius: 5,
    marginTop: "70%",
   alignSelf: 'center' ,
   textAlign: 'center' 
  },
  materialFixedLabelTextbox: {
    height: 43,
    width: 291,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 3,
    position: 'absolute',
    top:"40%", 
    alignSelf: 'center' 
  },
  materialFixedLabelTextbox1: {
    height: 43,
    width: 291,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 3,
    position:'absolute',
    top: '50%',
  
    alignSelf:"center",
  },
  forgotPassword: {
    fontFamily: "montserrat-regular",
    color: "rgba(3,61,134,1)",
    height: 18,
    width: 154,
    fontSize: 18,
    top:"60%",
    position:"absolute",
    alignSelf:"center",
    marginLeft: 119
  }
});

export default Login;
