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
  const [text, setText] = useState("0");
  const [result, setResult] = useState(0);
  const [operand, setOperand] = useState("");
  const [innerText, setInnerText] = useState("");

  const clickHandler = (innerTextValue) => {
    if (text === "0") {
      console.log(text, "text");
      setText("");
      setText(innerTextValue);
      return;
    }
    setText(text + innerTextValue);
    setInnerText(innerTextValue);
    // console.log(innerTextValue);
  };

  // const operandHandler = (e) => {
  //   setOperand(e.target.innerText);
  //   switch (operand) {
  //     case "+":
  //       setResult(+result + +text);
  //       setText("");
  //       console.log(result);
  //       break;
  //     case "-":
  //       setResult(text - result);
  //       setText("");
  //       console.log(result);
  //       break;
  //     case "/":
  //       if (result === 0) {
  //         setResult(1);
  //         setResult(+text / +result);
  //         setText("");
  //         console.log(result);
  //         return;
  //       }
  //       setResult(+text / +result);
  //       setText("");
  //       console.log(result);
  //       break;
  //     case "*":
  //       setResult(+text * +result);
  //       setText("");
  //       console.log(result);
  //       break;
  //     default:
  //       break;
  //   }
  // };

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

  const allClearHandler = () => {
    setText("0");
    setResult(0);
  };

  const deleteHandler = () => {
    setText(text.slice(0, -1));
    if (text.length === 1) {
      setText("0");
    }
  };

  useEffect(() => {
    console.log(eval(text));
  }, [text]);

  return (
    <View style={styles.container}>
      <InputScreen text={text} />
      <NumPad
        text={text}
        clickHandler={clickHandler}
        // operandHandler={operandHandler}
        allClearHandler={allClearHandler}
        deleteHandler={deleteHandler}
        equalHandler={equalHandler}
      />
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
