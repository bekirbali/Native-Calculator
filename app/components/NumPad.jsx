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

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  const Btn = ({ title }) => (
    <TouchableOpacity
      style={styles.opacity}
      onPress={() => calculateHandler(title)}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.numpadContainer}>
      <Btn title="AC" />
      <Btn title="1" />
      <Btn title="2" />
      <Btn title="3" />
      <Btn title="4" />
      <Btn title="5" />
      <Btn title="7" />
      {/* {arr.map((item, index) => (
        <Text style={styles.text}>{item}</Text>
      ))} */}
    </View>
  );
};

export default NumPad;

const styles = StyleSheet.create({
  numpadContainer: {
    justifyContent: "center",
    flex: 2,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  text: {
    backgroundColor: "red",
    height: 50,
    width: "33%",
  },
  opacity: {
    backgroundColor: "red",
    height: 50,
    width: 50,
    borderColor: "black",
    borderWidth: 2,
  },
});
