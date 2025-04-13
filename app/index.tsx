import { StyleSheet, View, Text, Platform, SafeAreaView } from "react-native";

/**
 *
 * When building cross-platform apps in React Native, maximizing code reuse is key,
 * but sometimes platform-specific code is needed.
 * React Native provides two main ways to handle this:
 * using the Platform module and
 * using platform-specific file extensions.
 *
 *
 * Platform Module in React Native:
 *
 * 1. Platform.OS:
 * - Returns 'ios' or 'android'
 * - Used for simple platform checks
 *
 * 2. Platform.select:
 * - Object-based platform-specific code
 * - Can specify different values for ios, android, and default
 * - More elegant than if/else statements
 *
 * Use cases:
 * - Different styles per platform
 * - Platform-specific components
 * - Different behavior/logic per platform
 */

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Platform.OS example */}
      <View style={styles.box}>
        <Text style={styles.title}>
          Current Platform: {Platform.OS === "ios" ? "iOS" : "Android"}
        </Text>
      </View>

      {/* Platform.select example */}
      <View style={styles.platformBox}>
        <Text style={styles.text}>Platform-specific styles applied</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  box: {
    padding: 20,
    marginBottom: 20,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  platformBox: {
    padding: Platform.select({
      ios: 20,
      android: 16,
    }),
    backgroundColor: Platform.select({
      ios: "yellow", // iOS blue color
      android: "red", // Android blue color
    }),
    borderRadius: Platform.select({
      ios: 10,
      android: 4,
    }),
  },
  text: {
    color: "white",
    fontSize: 16,
  },
});
