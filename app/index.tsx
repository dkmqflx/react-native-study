import { View, Alert, Button } from "react-native";

/**
 * Alert Component in React Native:
 *
 * Key Methods:
 * - Alert.alert(): Shows an alert with title, message, and buttons
 * - Alert.prompt(): iOS only, shows an alert with text input
 *
 * Button Props:
 * - text: Button label
 * - onPress: Button press handler
 * - style: 'default' | 'cancel' | 'destructive' (iOS only)
 */
export default function Index() {
  // Basic alert with one button
  const showBasicAlert = () => {
    Alert.alert("Basic Alert", "This is a simple alert with one button", [
      { text: "OK" },
    ]);
  };

  // Alert with multiple buttons
  const showMultiButtonAlert = () => {
    Alert.alert("Confirm Action", "Are you sure you want to proceed?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => console.log("OK Pressed"),
      },
    ]);
  };

  // Alert with destructive action
  const showDestructiveAlert = () => {
    Alert.alert("Delete Item", "This action cannot be undone", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Delete",
        onPress: () => console.log("Delete pressed"),
        style: "destructive", // iOS only
      },
    ]);
  };

  // iOS only - Alert with text input
  const showPromptAlert = () => {
    Alert.prompt(
      "Enter Name",
      "Please enter your name",
      (text) => console.log("Input:", text),
      "plain-text",
      "",
      "default"
    );
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        gap: 20,
      }}
    >
      <Button title="Show Basic Alert" onPress={showBasicAlert} />

      <Button title="Show Multi-Button Alert" onPress={showMultiButtonAlert} />

      <Button title="Show Destructive Alert" onPress={showDestructiveAlert} />

      <Button title="Show Prompt (iOS only)" onPress={showPromptAlert} />
    </View>
  );
}
