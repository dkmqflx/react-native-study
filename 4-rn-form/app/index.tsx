import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TextInput,
} from "react-native";

export default function App() {
  const [username, setUsername] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={username}
        onChangeText={setUsername}
      />
      <Text>My name is {username}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
});
