import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Svg, { Ellipse } from "react-native-svg";

function CreatePin(props) {
  return (
    <View style={styles.container}>
      <View style={styles.ellipseRow}>
        <Svg viewBox="0 0 34.81 35.24" style={styles.ellipse}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(230, 230, 230,1)"
            cx={17}
            cy={18}
            rx={17}
            ry={18}
          ></Ellipse>
        </Svg>
        <Svg viewBox="0 0 34.81 35.24" style={styles.ellipse1}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(230, 230, 230,1)"
            cx={17}
            cy={18}
            rx={17}
            ry={18}
          ></Ellipse>
        </Svg>
        <Svg viewBox="0 0 34.81 35.24" style={styles.ellipse2}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(230, 230, 230,1)"
            cx={17}
            cy={18}
            rx={17}
            ry={18}
          ></Ellipse>
        </Svg>
        <Svg viewBox="0 0 34.81 35.24" style={styles.ellipse3}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(230, 230, 230,1)"
            cx={17}
            cy={18}
            rx={17}
            ry={18}
          ></Ellipse>
        </Svg>
      </View>
      <Text style={styles.createYourPin}>Create Your Pin</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  ellipse: {
    width: 35,
    height: 35
  },
  ellipse1: {
    width: 35,
    height: 35,
    marginLeft: 42
  },
  ellipse2: {
    width: 35,
    height: 35,
    marginLeft: 43
  },
  ellipse3: {
    width: 35,
    height: 35,
    marginLeft: 36
  },
  ellipseRow: {
    height: 35,
    flexDirection: "row",
    marginTop: 369,
    marginLeft: 55,
    marginRight: 59
  },
  createYourPin: {
    fontFamily: "montserrat-regular",
    color: "#121212",
    height: 61,
    width: 320,
    fontSize: 40,
    marginTop: -141,
    alignSelf: "center"
  }
});

export default CreatePin;
