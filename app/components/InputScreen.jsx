import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

const InputScreen = () => {
  const [text, setText] = useState("");
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.input} value={text} onChangeText={setText} />
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
