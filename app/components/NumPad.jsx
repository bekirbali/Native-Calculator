import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const NumPad = () => {
  const [text, setText] = useState(0);
  const [result, setResult] = useState(0);
  const [operand, setOperand] = useState("");

  const clickHandler = (e) => {
    if (text === 0) {
      console.log(text, "text");
      setText("");
      setText(Number(e.target.innerText));
      return;
    }
    setText(text + e.target.innerText);
  };

  const operandHandler = (e) => {
    setOperand(e.target.innerText);
    switch (operand) {
      case "+":
        setResult(+result + +text);
        setText("");
        console.log(result);
        break;
      case "-":
        setResult(text - result);
        setText("");
        console.log(result);
        break;
      case "/":
        if (result === 0) {
          setResult(1);
          setResult(+text / +result);
          setText("");
          console.log(result);
          return;
        }
        setResult(+text / +result);
        setText("");
        console.log(result);
        break;
      case "*":
        setResult(+text * +result);
        setText("");
        console.log(result);
        break;
      default:
        break;
    }
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

  return (
    <View style={styles.numpadContainer}>
      <View style={styles.calculator}>
        <View style={styles.padArea}>
          <View style={styles.firstRow}>
            <Text onClick={clickHandler}>AC</Text>
            <Text onClick={clickHandler}>DEL</Text>
            <Text onClick={operandHandler}>%</Text>
            <Text onClick={operandHandler}>/</Text>
          </View>
          <View style={styles.secondRow}>
            <Text onClick={clickHandler}>7</Text>
            <Text onClick={clickHandler}>8</Text>
            <Text onClick={clickHandler}>9</Text>
            <Text onClick={operandHandler}>*</Text>
          </View>
          <View style={styles.thirdRow}>
            <Text onClick={clickHandler}>4</Text>
            <Text onClick={clickHandler}>5</Text>
            <Text onClick={clickHandler}>6</Text>
            <Text onClick={operandHandler}>-</Text>
          </View>
          <View style={styles.forthRow}>
            <Text onClick={clickHandler}>1</Text>
            <Text onClick={clickHandler}>2</Text>
            <Text onClick={clickHandler}>3</Text>
            <Text onClick={operandHandler}>+</Text>
          </View>
          <View style={styles.fifthRow}>
            <Text onClick={clickHandler}>0</Text>
            <Text onClick={operandHandler}>.</Text>
            <Text onClick={operandHandler}>=</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default NumPad;

const styles = StyleSheet.create({
  numpadContainer: {
    flex: 5,
    justifyContent: "center",
    backgroundColor: "red",
  },
  calculator: {},
  padArea: {},
  firstRow: {},
  secondRow: {},
  thirdRow: {},
  forthRow: {},
  fifthRow: {},
});
