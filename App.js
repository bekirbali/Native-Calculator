import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import styles from "./style";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World!</Text>
      <FlatList style={styles.flatList}>
        <Text style={styles.text}>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
      </FlatList>
      <StatusBar style="auto" />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
