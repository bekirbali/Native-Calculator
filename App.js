import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  const newItem = {
    id: new Date().getTime(),
    value: text,
  };

  const pressHandler = () => {
    if (text.trim().length) {
      setItems((oldItems) => [...oldItems, newItem]);
      setText("");
      return;
    }
  };

  const deleteHandler = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Your goal!"
          value={text}
          onChangeText={setText}
        />
        <Button title="Add Goal" onPress={pressHandler} />
      </View>
      <View style={styles.outputContainer}>
        <FlatList
          data={items}
          renderItem={(item) => {
            return (
              <View>
                <Text style={styles.outputText}>
                  {item.item.value}................{" "}
                  <Text onPress={() => deleteHandler(item.item.id)}>X</Text>{" "}
                </Text>
              </View>
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    paddingTop: 50,
    flex: 1,
    justifyContent: "center",
  },

  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 5,
    flex: 2,
    padding: 10,
  },

  input: {
    borderWidth: 1,
    borderColor: "#0cff0c",
    width: "70%",
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  outputContainer: {
    flex: 4,
    backgroundColor: "#00ccff3a",
    color: "black",
  },
  outputText: {
    fontSize: 24,
    marginTop: 10,
  },
});
