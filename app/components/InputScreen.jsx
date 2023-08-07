import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

const InputScreen = () => {
  const [text, setText] = useState("");

  const changeText = (e) => {
    setText(Number(e.target.value));
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput value={text} onChange={changeText} style={styles.inputTop} />
      <TextInput
        value={text}
        onChange={changeText}
        style={styles.inputBottom}
      />
    </View>
  );
};

export default InputScreen;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 2,
    display: "flex",
    gap: 10,
    borderWidth: 5,
    borderColor: "yellow",
  },
  inputTop: {
    backgroundColor: "gray",
    // marginTop: 20,
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
    height: 100,
  },
  inputBottom: {
    height: 100,
    backgroundColor: "cyan",
    borderColor: "gray",
    borderWidth: 1,
    padding: 5,
  },
});
