import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Svg, { Ellipse } from "react-native-svg";

function EnterPin(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.enterYourPin}>Enter Your Pin</Text>
      <Svg viewBox="0 0 79.99 0" style={styles.ellipse}>
        <Ellipse
          stroke="rgba(230, 230, 230,1)"
          strokeWidth={0}
          fill="rgba(230, 230, 230,1)"
          cx={40}
          cy={0}
          rx={40}
          ry={0}
        ></Ellipse>
      </Svg>
      <View style={styles.ellipse2Row}>
        <Svg viewBox="0 0 35.03 35.02" style={styles.ellipse2}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(230, 230, 230,1)"
            cx={18}
            cy={18}
            rx={18}
            ry={18}
          ></Ellipse>
        </Svg>
        <Svg viewBox="0 0 35.03 35.02" style={styles.ellipse3}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(230, 230, 230,1)"
            cx={18}
            cy={18}
            rx={18}
            ry={18}
          ></Ellipse>
        </Svg>
        <Svg viewBox="0 0 35.03 35.02" style={styles.ellipse4}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(230, 230, 230,1)"
            cx={18}
            cy={18}
            rx={18}
            ry={18}
          ></Ellipse>
        </Svg>
        <Svg viewBox="0 0 35.03 35.02" style={styles.ellipse5}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(230, 230, 230,1)"
            cx={18}
            cy={18}
            rx={18}
            ry={18}
          ></Ellipse>
        </Svg>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  enterYourPin: {
    fontFamily: "montserrat-regular",
    color: "#121212",
    height: 61,
    width: 322,
    fontSize: 40,
    marginTop: 266,
    marginLeft: 53
  },
  ellipse: {
    width: 80,
    height: 0,
    marginTop: 79,
    marginLeft: 53
  },
  ellipse2: {
    width: 35,
    height: 35
  },
  ellipse3: {
    width: 35,
    height: 35,
    marginLeft: 45
  },
  ellipse4: {
    width: 35,
    height: 35,
    marginLeft: 46
  },
  ellipse5: {
    width: 35,
    height: 35,
    marginLeft: 43
  },
  ellipse2Row: {
    height: 35,
    flexDirection: "row",
    marginTop: -35,
    marginLeft: 53,
    marginRight: 48
  }
});

export default EnterPin;
