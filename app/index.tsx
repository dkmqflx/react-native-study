import { View, ActivityIndicator } from "react-native";

/**
 * ActivityIndicator Component in React Native:
 *
 * Key Props:
 * - size: 'small' | 'large' | number
 * - color: Color of the spinner
 * - animating: Boolean to show/hide the indicator
 * - hidesWhenStopped: iOS only, hides when not animating
 */
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        gap: 30, // Space between indicators
      }}
    >
      {/* Default small size */}
      <ActivityIndicator />

      {/* Large size with custom color */}
      <ActivityIndicator size="large" color="#007AFF" />

      {/* Custom size and color */}
      <ActivityIndicator size={50} color="#34C759" />

      {/* Not animating (stopped) */}
      <ActivityIndicator size="large" color="#FF3B30" animating={false} />

      {/* Custom styling with background */}
      <ActivityIndicator
        size="large"
        color="white"
        style={{
          backgroundColor: "#007AFF",
          padding: 10,
          borderRadius: 8,
        }}
      />
    </View>
  );
}
