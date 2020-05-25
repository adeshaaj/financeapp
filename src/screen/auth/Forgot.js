import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialFixedLabelTextbox from "./components/MaterialFixedLabelTextbox";
import MaterialFixedLabelTextbox1 from "./components/MaterialFixedLabelTextbox1";
import MaterialFixedLabelTextbox12 from "./components/MaterialFixedLabelTextbox12";
import MaterialButtonDanger from "./components/MaterialButtonDanger";

class Forgot extends React.Component{
  render(){
  return (
    <View style={styles.container}>
      <MaterialFixedLabelTextbox
        style={styles.materialFixedLabelTextbox}
      ></MaterialFixedLabelTextbox>
      <Text style={styles.forgotPassword}>Forgot Password</Text>
      <MaterialFixedLabelTextbox1
        style={styles.materialFixedLabelTextbox1}
      ></MaterialFixedLabelTextbox1>
      <MaterialFixedLabelTextbox12
        style={styles.materialFixedLabelTextbox12}
      ></MaterialFixedLabelTextbox12>
      <MaterialButtonDanger
        style={styles.materialButtonDanger}
      ></MaterialButtonDanger>
    </View>
  );}
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  materialFixedLabelTextbox: {
    width: 263,
    height: 43,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 3,
    marginTop: 244,
    marginLeft: 37
  },
  forgotPassword: {
    fontFamily: "montserrat-700",
    color: "#121212",
    height: 97,
    width: 214,
    fontSize: 40,
    marginTop: -204,
    marginLeft: 17
  },
  materialFixedLabelTextbox1: {
    width: 263,
    height: 43,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 3,
    marginTop: 145,
    marginLeft: 37
  },
  materialFixedLabelTextbox12: {
    height: 43,
    width: 263,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 3,
    marginTop: 38,
    marginLeft: 37
  },
  materialButtonDanger: {
    height: 36,
    width: 129,
    borderRadius: 5,
    marginTop: 68,
    marginLeft: 104
  }
});

export default Forgot;
