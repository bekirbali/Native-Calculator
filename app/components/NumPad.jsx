import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const NumPad = ({
  clickHandler,
  // operandHandler,
  allClearHandler,
  deleteHandler,
  equalHandler,
}) => {
  return (
    <View style={styles.numpadContainer}>
      <View style={styles.calculator}>
        <View style={styles.padArea}>
          <View style={styles.firstRow}>
            <TouchableOpacity>
              <Text
                style={[styles.text, styles.nums, styles.topThree]}
                onPress={allClearHandler}
              >
                AC
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={[styles.text, styles.nums, styles.topThree]}
                onPress={deleteHandler}
              >
                DEL
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={[styles.text, styles.nums, styles.topThree]}
                onPress={() => clickHandler("%")}
              >
                %
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={[styles.text, styles.operands]}
                onPress={() => clickHandler("/")}
              >
                ÷
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.secondRow}>
            <TouchableOpacity>
              <Text
                style={[styles.text, styles.nums]}
                onPress={() => clickHandler("7")}
              >
                7
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={[styles.text, styles.nums]}
                onPress={() => clickHandler("8")}
              >
                8
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={[styles.text, styles.nums]}
                onPress={() => clickHandler("9")}
              >
                9
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={[styles.text, styles.operands]}
                onPress={() => clickHandler("*")}
              >
                ×
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.thirdRow}>
            <TouchableOpacity>
              <Text
                style={[styles.text, styles.nums]}
                onPress={() => clickHandler("4")}
              >
                4
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={[styles.text, styles.nums]}
                onPress={() => clickHandler("5")}
              >
                5
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={[styles.text, styles.nums]}
                onPress={() => clickHandler("6")}
              >
                6
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={[styles.text, styles.operands]}
                onPress={() => clickHandler("-")}
              >
                -
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.forthRow}>
            <TouchableOpacity>
              <Text
                style={[styles.text, styles.nums]}
                onPress={() => clickHandler("1")}
              >
                1
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={[styles.text, styles.nums]}
                onPress={() => clickHandler("2")}
              >
                2
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={[styles.text, styles.nums]}
                onPress={() => clickHandler("3")}
              >
                3
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={[styles.text, styles.operands]}
                onPress={() => clickHandler("+")}
              >
                +
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.fifthRow}>
            <TouchableOpacity>
              <Text
                style={[styles.text, styles.nums, styles.zero]}
                onPress={() => clickHandler("0")}
              >
                0
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={[styles.text, styles.nums]}
                onPress={() => clickHandler(".")}
              >
                .
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={[styles.text, styles.operands]}
                onPress={equalHandler}
              >
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
    backgroundColor: "#1C1C1C",
    padding: 10,
  },
  calculator: {
    justifyContent: "center",
    flex: 1,
  },
  padArea: {
    flex: 1,
    justifyContent: "space-between",
  },
  firstRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  secondRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  thirdRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  forthRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  fifthRow: {
    flexDirection: "row",
    justifyContent: "space-between",
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
    color: "white",
  },
  operands: {
    backgroundColor: "#FF9500",
  },
  nums: {
    backgroundColor: "#505050",
  },
  topThree: {
    backgroundColor: "#A2A2A2",
    color: "#1C1F37",
  },
  zero: {
    width: 160,
    // color: "white",
  },
});
