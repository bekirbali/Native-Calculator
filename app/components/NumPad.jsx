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

  return (
    <View style={styles.numpadContainer}>
      <View className="line-clamp">
        <h1>line clamp test</h1>
        <View className="inner">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum cum
            blanditiis corporis nihil ipsam harum amet. Debitis nemo illo eius
            expedita molestias soluta totam. Delectus quos excepturi id minus!
            Quam harum autem ratione tempora debitis laborum exercitationem odio
            excepturi laudantium, voluptate eum aut cumque unde tenetur fugiat
            incidunt, doloribus repudiandae?
          </p>
          <h2>26</h2>
        </View>
      </View>
      <View className="calculator">
        <View className="inputArea">
          <input
            type="text"
            value={text}
            onChange={changeHandler}
            className="inputTop"
          />
          <input
            type="text"
            value={text}
            onChange={changeHandler}
            className="inputBottom"
          />
        </View>
        <View className="padArea">
          <View className="first row">
            <p onClick={clickHandler}>AC</p>
            <p onClick={clickHandler}>DEL</p>
            <p onClick={operandHandler}>%</p>
            <p onClick={operandHandler}>/</p>
          </View>
          <View className="second row">
            <p onClick={clickHandler}>7</p>
            <p onClick={clickHandler}>8</p>
            <p onClick={clickHandler}>9</p>
            <p onClick={operandHandler}>*</p>
          </View>
          <View className="third row">
            <p onClick={clickHandler}>4</p>
            <p onClick={clickHandler}>5</p>
            <p onClick={clickHandler}>6</p>
            <p onClick={operandHandler}>-</p>
          </View>
          <View className="forth row">
            <p onClick={clickHandler}>1</p>
            <p onClick={clickHandler}>2</p>
            <p onClick={clickHandler}>3</p>
            <p onClick={operandHandler}>+</p>
          </View>
          <View className="fifth row">
            <p onClick={clickHandler}>0</p>
            <p onClick={operandHandler}>.</p>
            <p onClick={operandHandler}>=</p>
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
