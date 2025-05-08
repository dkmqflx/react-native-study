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

  /**
   * TextInput component for entering the user's name.
   * - Controlled by the username state.
   * - Updates the username as the user types.
   *
   * Props:
   * - placeholder: Shows a hint to the user.
   * - value: Binds the input to the username state.
   * - onChangeText: Updates the username state on input change.
   * - secureTextEntry: If true, masks the input (useful for passwords). Here, set to false.
   *     Example: <TextInput secureTextEntry={true} /> // for password fields
   *
   * - keyboardType: Sets the keyboard type. 'default' for general text input.
   *     Example: <TextInput keyboardType="email-address" /> // for email input
   *     Example: <TextInput keyboardType="numeric" /> // for numbers only
   *
   * - autoCapitalize: Controls capitalization. 'none' disables auto-capitalization.
   *     Example: <TextInput autoCapitalize="words" /> // capitalizes each word
   *     Example: <TextInput autoCapitalize="sentences" /> // capitalizes first letter of each sentence
   *
   * - autoCorrect: Enables/disables auto-correction. Set to false for names.
   *     Example: <TextInput autoCorrect={true} /> // enables auto-correction
   */

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
