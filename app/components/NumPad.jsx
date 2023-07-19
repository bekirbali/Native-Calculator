import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const NumPad = () => {
  const calculateHandler = (title) => {
    console.log(title);
  };

  const arr = [
    "AC",
    "DEL",
    "%",
    "/",
    7,
    8,
    9,
    "X",
    4,
    5,
    6,
    "-",
    1,
    2,
    3,
    "+",
    0,
    ".",
    "=",
  ];

  // const Btn = ({ title }) => (
  //   <TouchableOpacity
  //     style={styles.opacity}
  //     onPress={() => calculateHandler(title)}
  //   >
  //     <Text style={styles.text}>{title}</Text>
  //   </TouchableOpacity>
  // );
  return (
    <View style={styles.numpadContainer}>
      {/* <Btn title="AC" />
      <Btn title="1" />
      <Btn title="2" />
      <Btn title="3" />
      <Btn title="4" />
      <Btn title="5" />
    <Btn title="7" /> */}
      <View style={styles.pad}>
        {arr.map((item, index) => (
          <Text
            key={index}
            onPress={() => calculateHandler(item)}
            style={styles.text}
          >
            {item}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default NumPad;

const styles = StyleSheet.create({
  numpadContainer: {
    flex: 2,

    justifyContent: "center",
    flexWrap: "wrap",
    backgroundColor: "blue",
  },
  pad: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "red",
    borderColor: "white",
    borderWidth: 2,
  },
  text: {
    textAlign: "center",
    width: "25%",
    borderWidth: 2,
    borderColor: "black",
  },
  // opacity: {
  //   backgroundColor: "red",
  //   height: 50,
  //   width: 50,
  //   borderColor: "black",
  //   borderWidth: 2,
  // },
});
