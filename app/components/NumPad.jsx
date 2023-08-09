import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const NumPad = ({
  clickHandler,
  operandHandler,
  allClearHandler,
  deleteHandler,
}) => {
  return (
    <View style={styles.numpadContainer}>
      <View style={styles.calculator}>
        <View style={styles.padArea}>
          <View style={styles.firstRow}>
            <TouchableOpacity>
              <Text style={styles.text} onPress={allClearHandler}>
                AC
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.text} onPress={deleteHandler}>
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
                ÷
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
                ×
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
    flex: 1,
  },
  padArea: {
    flex: 1,
    justifyContent: "space-between",
  },
  firstRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderWidth: 2,
    borderColor: "black",
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
