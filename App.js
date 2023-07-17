import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [items, setItems] = useState([1, 2, 3]);
  const [text, setText] = useState("");

  const newItem = {
    id: new Date().getTime(),
    value: text,
  };

  const pressHandler = () => {
    setItems((oldItems) => [...oldItems, newItem]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Your goal!"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button title="Add Goal" onPress={pressHandler} />
      </View>
      <View>
        {items?.map((item, index) => (
          <Text key={index}> {item},</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },

  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  input: {
    borderWidth: 2,
    borderColor: "#f0c",
    width: "80%",
    padding: 8,
  },
});
