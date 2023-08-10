import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

const InputScreen = ({ text, result, showResult }) => {
  return (
    <View style={styles.inputContainer}>
      {/* <TextInput
        value={text}
        onChangeText={changeText}
        style={styles.inputTop}
      />
      <TextInput
        value={text}
        onChangeText={changeText}
        style={styles.inputBottom}
      /> */}
      {/* {showResult ? (
        <Text style={styles.inputTop}>{result}</Text>
      ) : (
        <Text style={styles.inputTop}>={text}</Text>
      )} */}
      <Text style={styles.inputTop}>{showResult ? `=${result}` : text}</Text>
      <Text style={styles.inputBottom}>{text}</Text>
    </View>
  );
};

export default InputScreen;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 2,
    display: "flex",
    backgroundColor: "#1C1C1C",
  },
  inputTop: {
    paddingHorizontal: 15,
    height: 100,
    textAlign: "right",
    fontSize: 24,
    color: "gray",
    verticalAlign: "middle",
  },
  inputBottom: {
    height: 100,
    paddingHorizontal: 15,
    textAlign: "right",
    fontSize: 36,
    color: "white",
    verticalAlign: "middle",
  },
});
