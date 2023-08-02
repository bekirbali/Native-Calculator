import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

const InputScreen = () => {
  const [text, setText] = useState("");
  return (
    <View className="inputArea">
      <TextInput
        type="text"
        value={text}
        onChange={changeHandler}
        className="inputTop"
      />
      <TextInput
        type="text"
        value={text}
        onChange={changeHandler}
        className="inputBottom"
      />
    </View>
  );
};

export default InputScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",

    flex: 1,
  },
  input: {
    borderWidth: 2,
    borderColor: "black",
  },
});
