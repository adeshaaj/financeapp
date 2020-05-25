import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialIconTextbox(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Icon name="account-circle" style={styles.iconStyle}></Icon>
      <TextInput placeholder="Username" style={styles.inputStyle}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 38
  },
  iconStyle: {
    color: "#616161",
    fontFamily: "Roboto",
    fontSize: 24,
    paddingLeft: 8
  },
  inputStyle: {
    color: "#000",
    marginLeft: 16,
    paddingRight: 5,
    fontSize: 16,
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 16,
    borderColor: "#D9D5DC",
    paddingTop: 14,
    paddingBottom: 8,
    borderWidth: 1,
    borderStyle: "solid"
  }
});

export default MaterialIconTextbox;
