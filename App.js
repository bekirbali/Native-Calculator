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
  Pressable,
} from "react-native";

import InputScreen from "./app/components/InputScreen";
import NumPad from "./app/components/NumPad";

export default function App() {
  const equalHandler = () => {
    switch (operand) {
      case "+":
        setResult(+result + +text);
        setText("");
        console.log(result);
        break;
      // case "-":
      //   setResult(+text - +result);
      //   setText("");
      //   console.log(result);
      //   break;
      // case "/":
      //   // if(result === 0){
      //   //   setResult(1)
      //   //   return
      //   // }
      //   setResult(+text / +result);
      //   setText("");
      //   console.log(result);
      //   break;
      // case "*":
      //   setResult(+text * +result);
      //   setText("");
      //   console.log(result);
      //   break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <InputScreen />
      <NumPad />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginTop: 50,
  },
});
