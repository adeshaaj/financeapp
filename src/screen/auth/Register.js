import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialFixedLabelTextbox5 from "./components/MaterialFixedLabelTextbox5";
import CupertinoButtonInfo from "./components/CupertinoButtonInfo";
import MaterialFixedLabelTextbox6 from "./components/MaterialFixedLabelTextbox6";
import MaterialFixedLabelTextbox4 from "./components/MaterialFixedLabelTextbox4";
import MaterialFixedLabelTextbox7 from "./components/MaterialFixedLabelTextbox7";
import MaterialFixedLabelTextbox8 from "./components/MaterialFixedLabelTextbox8";
import MaterialFixedLabelTextbox9 from "./components/MaterialFixedLabelTextbox9";
import MaterialFixedLabelTextbox10 from "./components/MaterialFixedLabelTextbox10";
import MaterialFixedLabelTextbox11 from "./components/MaterialFixedLabelTextbox11";
import MaterialButtonViolet from "./components/MaterialButtonViolet";

class Register extends React.Component{
  render(){
  return (
    <View style={styles.container}>
      <MaterialFixedLabelTextbox5
        style={styles.materialFixedLabelTextbox3}
      ></MaterialFixedLabelTextbox5>
      <View style={styles.createNewAccountRow}>
        <Text style={styles.createNewAccount}>Create New Account</Text>
        <CupertinoButtonInfo
          style={styles.cupertinoButtonInfo}
        ></CupertinoButtonInfo>
      </View>
      <View style={styles.materialFixedLabelTextbox4Stack}>
        <MaterialFixedLabelTextbox5
          style={styles.materialFixedLabelTextbox4}
        ></MaterialFixedLabelTextbox5>
        <MaterialFixedLabelTextbox6
          style={styles.materialFixedLabelTextbox6}
        ></MaterialFixedLabelTextbox6>
      </View>
      <MaterialFixedLabelTextbox4
        style={styles.materialFixedLabelTextbox4}
      ></MaterialFixedLabelTextbox4>
      <MaterialFixedLabelTextbox7
        style={styles.materialFixedLabelTextbox7}
      ></MaterialFixedLabelTextbox7>
      <MaterialFixedLabelTextbox8
        style={styles.materialFixedLabelTextbox8}
      ></MaterialFixedLabelTextbox8>
      <MaterialFixedLabelTextbox9
        style={styles.materialFixedLabelTextbox9}
      ></MaterialFixedLabelTextbox9>
      <MaterialFixedLabelTextbox10
        style={styles.materialFixedLabelTextbox10}
      ></MaterialFixedLabelTextbox10>
      <MaterialFixedLabelTextbox11
        style={styles.materialFixedLabelTextbox11}
      ></MaterialFixedLabelTextbox11>
      <MaterialButtonViolet
        style={styles.materialButtonViolet}
      ></MaterialButtonViolet>
    </View>
  );}
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  materialFixedLabelTextbox3: {
    height: 43,
    width: 298,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 3,
    marginTop: 246,
    marginLeft: 38
  },
  createNewAccount: {
    fontFamily: "montserrat-regular",
    color: "#121212",
    height: 100,
    width: 257,
    fontSize: 40,
    marginTop: 19
  },
  cupertinoButtonInfo: {
    width: 80,
    height: 37
  },
  createNewAccountRow: {
    height: 119,
    flexDirection: "row",
    marginTop: -224,
    marginLeft: 28,
    marginRight: 10
  },
  materialFixedLabelTextbox4: {
    height: 43,
    width: 298,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 3,
    marginTop: -104,
    marginLeft: 38
  },
  materialFixedLabelTextbox6: {
    height: 43,
    width: 298,
    position: "absolute",
    left: 0,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 3,
    top: 0
  },
  materialFixedLabelTextbox4Stack: {
    width: 303,
    height: 48,
    marginTop: 174,
    marginLeft: 38
  },
  materialFixedLabelTextbox7: {
    height: 43,
    width: 298,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 3,
    marginTop: 146,
    marginLeft: 38
  },
  materialFixedLabelTextbox8: {
    height: 43,
    width: 298,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 3,
    marginTop: -109,
    marginLeft: 38
  },
  materialFixedLabelTextbox9: {
    height: 43,
    width: 298,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 3,
    marginTop: 139,
    marginLeft: 38
  },
  materialFixedLabelTextbox10: {
    height: 43,
    width: 298,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 3,
    marginTop: -99,
    marginLeft: 38
  },
  materialFixedLabelTextbox11: {
    height: 43,
    width: 298,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: 71,
    marginLeft: 38
  },
  materialButtonViolet: {
    width: 100,
    height: 36,
    marginTop: 16,
    marginLeft: 138
  }
});

export default Register;
