import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
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
  const [text, setText] = useState("");
  const [innerText, setInnerText] = useState("");
  const changeText = (e) => {
    setText(Number(e.target.value));
  };

  const clickHandler = (innerTextValue) => {
    if (text === 0) {
      console.log(text, "text");
      setText("");
      setText(Number(innerTextValue));
      return;
    }
    setText(innerTextValue);
    setInnerText(innerTextValue);
    console.log(innerTextValue);
  };

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

  // useEffect(() => {}, [text]);

  return (
    <View style={styles.container}>
      <InputScreen changeText={changeText} text={text} />
      <NumPad text={text} clickHandler={clickHandler} />
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
