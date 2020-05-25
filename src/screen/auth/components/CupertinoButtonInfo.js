import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function CupertinoButtonInfo(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.login}>Login</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#007AFF",
   
    flexDirection: "row",
    borderRadius: 5,
   
  },
  login: {
    color: "#fff",
    fontSize: 17,
    alignSelf:"center",
   
  }
});

export default CupertinoButtonInfo;
