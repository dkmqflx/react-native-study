import { View, Button, Alert } from "react-native";

/**
 * Button Components in React Native:
 *
 * 1. Basic Button:
 *    - Simple, platform-specific button
 *    - Limited styling options
 *    - Good for basic interactions
 * Press Handlers:
 * - onPress: Regular press
 * - onLongPress: Press and hold
 * - onPressIn: Triggered at start of press
 * - onPressOut: Triggered at end of press
 */
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Button
        title="Basic Button"
        onPress={() => Alert.alert("Button pressed!")}
      />

      <Button
        title="Colored Button"
        onPress={() => Alert.alert("Colored button pressed!")}
        color="#007AFF"
      />

      <Button
        title="Disabled Button"
        onPress={() => Alert.alert("This will not show")}
        disabled={true}
      />
    </View>
  );
}
