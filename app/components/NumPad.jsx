import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const NumPad = () => {
  const [text, setText] = useState("");

  const operandHandler = (e) => {
    // setOperand(e.target.innerText);
    operand = e.target.innerText;
    switch (operand) {
      case "+":
        setResult(+result + +text);
        setText("");
        console.log(result);
        break;
      case "-":
        console.log(result);
        break;
      case "/":
        console.log(result);
        break;
      case "*":
        console.log(result);
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.numpadContainer}>
      <View className="calculator">
        <View className="padArea">
          <View className="first row">
            <Text onClick={clickHandler}>AC</Text>
            <Text onClick={clickHandler}>DEL</Text>
            <Text onClick={operandHandler}>%</Text>
            <Text onClick={operandHandler}>/</Text>
          </View>
          <View className="second row">
            <Text onClick={clickHandler}>7</Text>
            <Text onClick={clickHandler}>8</Text>
            <Text onClick={clickHandler}>9</Text>
            <Text onClick={operandHandler}>*</Text>
          </View>
          <View className="third row">
            <Text onClick={clickHandler}>4</Text>
            <Text onClick={clickHandler}>5</Text>
            <Text onClick={clickHandler}>6</Text>
            <Text onClick={operandHandler}>-</Text>
          </View>
          <View className="forth row">
            <Text onClick={clickHandler}>1</Text>
            <Text onClick={clickHandler}>2</Text>
            <Text onClick={clickHandler}>3</Text>
            <Text onClick={operandHandler}>+</Text>
          </View>
          <View className="fifth row">
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
    flex: 2,
    justifyContent: "center",
    backgroundColor: "blue",
  },
  pad: {
    backgroundColor: "red",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    width: "25%",
    borderWidth: 1,
    borderColor: "black",
  },
});
