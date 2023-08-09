import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

const InputScreen = ({ changeText, text }) => {
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
      <Text style={styles.inputTop}>{text}</Text>
      <Text style={styles.inputBottom}>{text}</Text>
    </View>
  );
};

export default InputScreen;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 2,
    display: "flex",
    borderWidth: 5,
    borderColor: "yellow",
    backgroundColor: "black",
  },
  inputTop: {
    borderColor: "black",
    borderWidth: 1,
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
