import { View, Text, StyleSheet } from "react-native";

/**
 * StyleSheet API Benefits:
 *
 * 1. Performance:
 *    - Styles are created once and reused
 *    - ID-based instead of recreating style objects
 *    - Reduces memory usage and garbage collection
 *
 * 2. Validation:
 *    - Catches errors early
 *    - Validates property names and values
 *    - TypeScript support for style properties
 *
 * 3. Organization:
 *    - Separates styles from component logic
 *    - Better code readability
 *    - Easier style reuse
 *
 * 4. Optimization:
 *    - React Native can optimize StyleSheet styles
 *    - Better than inline styles for complex apps
 *    - Enables future optimization possibilities
 */
export default function Index() {
  return (
    <View style={styles.container}>
      <View style={[styles.lightblue, styles.box]}>
        <Text>Hello</Text>
      </View>
      <View style={styles.lightgreen}>
        <Text>Hello</Text>
      </View>
    </View>
  );
}

// StyleSheet API implementation
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  lightblue: {
    backgroundColor: "lightblue",
  },
  lightgreen: {
    backgroundColor: "lightgreen",
  },
  box: {
    width: 100,
    height: 100,
  },
});
