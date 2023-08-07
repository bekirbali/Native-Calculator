import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

const InputScreen = () => {
  const [text, setText] = useState("");

  const changeText = (e) => {
    setText(Number(e.target.value));
  };
  return (
    <View className={styles.inputContainer}>
      <TextInput value={text} onChange={changeText} />
      <TextInput
        value={text}
        onChange={changeText}
        style={{ backgroundColor: "blue", marginTop: 20 }}
      />
    </View>
  );
};

export default InputScreen;

const styles = StyleSheet.create({
  inputContainer: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    backgroundColor: "yellow",
    padding: 28,
    width: 300,
    height: 300,
  },
  inputTop: {
    marginBottom: 40,
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "white",
  },
  inputBottom: {
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "yellow",
    width: 100,
    height: 100,
  },
});
