import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TextInput,
  Switch,
} from "react-native";

export default function App() {
  const [username, setUsername] = useState("");

  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={username}
        onChangeText={setUsername}
        secureTextEntry={false}
        keyboardType="default"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        style={[styles.multilineInput, styles.input]}
        placeholder="Enter your name"
        multiline
      />

      <Text>My name is {username}</Text>

      <View style={styles.switchContainer}>
        {/*
          Switch component for toggling dark mode.
          - value: Controlled by isDarkMode state.
          - onValueChange: Toggles the isDarkMode state.
          - trackColor: Changes the track color based on the switch state.
          - thumbColor: Changes the thumb color based on the switch state.
        */}
        <Text>Dark mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={() => setIsDarkMode((prev) => !prev)}
          trackColor={{
            true: "lightblue",
            false: "lightgray",
          }}
          thumbColor={isDarkMode ? "lightblue" : "lightgray"}
        />
      </View>
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
  multilineInput: {
    minHeight: 100,
    textAlignVertical: "top", // because AOS, text is located at the center
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
});
