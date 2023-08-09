import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const NumPad = ({ clickHandler }) => {
  const [text, setText] = useState(0);
  const [result, setResult] = useState(0);
  const [operand, setOperand] = useState("");

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

  return (
    <View style={styles.numpadContainer}>
      <View style={styles.calculator}>
        <View style={styles.padArea}>
          <View style={styles.firstRow}>
            <TouchableOpacity>
              <Text style={styles.text} onPress={() => clickHandler("AC")}>
                AC
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.text} onPress={() => clickHandler("DEL")}>
                DEL
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.text} onPress={operandHandler}>
                %
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.text} onPress={operandHandler}>
                /
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.secondRow}>
            <TouchableOpacity>
              <Text style={styles.text} onPress={() => clickHandler("7")}>
                7
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.text} onPress={() => clickHandler("8")}>
                8
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.text} onPress={() => clickHandler("9")}>
                9
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.text} onPress={operandHandler}>
                *
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.thirdRow}>
            <TouchableOpacity>
              <Text style={styles.text} onPress={() => clickHandler("4")}>
                4
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.text} onPress={() => clickHandler("5")}>
                5
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.text} onPress={() => clickHandler("6")}>
                6
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.text} onPress={operandHandler}>
                -
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.forthRow}>
            <TouchableOpacity>
              <Text style={styles.text} onPress={() => clickHandler("1")}>
                1
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.text} onPress={() => clickHandler("2")}>
                2
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.text} onPress={() => clickHandler("3")}>
                3
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.text} onPress={operandHandler}>
                +
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.fifthRow}>
            <TouchableOpacity>
              <Text style={styles.text} onPress={() => clickHandler("0")}>
                0
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.text} onPress={() => clickHandler(".")}>
                .
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.text} onPress={operandHandler}>
                =
              </Text>
            </TouchableOpacity>
          </View>
          <View></View>
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
    padding: 10,
  },
  calculator: {
    borderWidth: 2,
    borderColor: "black",
    justifyContent: "center",
    // padding: 10,
    flex: 1,
  },
  padArea: {
    flex: 1,
    justifyContent: "space-between",
    borderWidth: 2,
    borderColor: "blue",
  },
  firstRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderWidth: 2,
    borderColor: "black",
    // marginTop: 40,
  },
  secondRow: {
    borderWidth: 2,
    borderColor: "black",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  thirdRow: {
    borderWidth: 2,
    borderColor: "black",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  forthRow: {
    borderWidth: 2,
    borderColor: "black",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  fifthRow: {
    borderWidth: 2,
    borderColor: "black",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  text: {
    fontSize: 21,
    fontWeight: "500",
    backgroundColor: "gray",
    padding: 10,
    borderRadius: 50,
    width: 60,
    height: 60,
    textAlign: "center",
    verticalAlign: "middle",
  },
});
