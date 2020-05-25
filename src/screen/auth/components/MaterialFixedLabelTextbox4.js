import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

function MaterialFixedLabelTextbox4(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.email}>Email</Text>
      <TextInput style={styles.inputStyle}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "#D9D5DC",
    backgroundColor: "transparent",
    flexDirection: "row",
    paddingLeft: 16,
    borderWidth: 1,
    borderRadius: 3
  },
  email: {
    fontSize: 16,
    lineHeight: 16,
    paddingTop: 16,
    paddingBottom: 8,
    color: "#000",
    opacity: 0.5,
    alignSelf: "flex-start"
  },
  inputStyle: {
    color: "#000",
    paddingRight: 5,
    fontSize: 16,
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 16,
    paddingTop: 14,
    paddingBottom: 8,
    paddingLeft: 30
  }
});

export default MaterialFixedLabelTextbox4;
