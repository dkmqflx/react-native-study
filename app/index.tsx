import { StyleSheet, View, Text, ScrollView, Dimensions } from "react-native";

/**
 * Window vs Screen Dimensions in React Native:
 *
 * Window:
 * - Represents the visible application window
 * - Excludes status bar and other system UI elements
 * - Changes when keyboard appears or orientation changes
 * - Use for responsive layouts within app content
 *
 * Screen:
 * - Represents the entire physical screen
 * - Includes status bar and all system UI elements
 * - Remains constant regardless of keyboard or orientation
 * - Use when you need full device screen dimensions
 */

// Get both window and screen dimensions
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

export default function App() {
  return (
    <ScrollView style={styles.container}>
      {/* Window Dimensions */}
      <View style={styles.section}>
        <Text style={styles.title}>Window Dimensions</Text>
        <View style={styles.demoContainer}>
          <Text style={styles.text}>Static window.width: {window.width}px</Text>
          <Text style={styles.text}>
            Static window.height: {window.height}px
          </Text>
          <Text style={styles.subtitle}>Window = Visible App Area</Text>
          <View style={[styles.box, { width: window.width * 0.8 }]}>
            <Text style={styles.boxText}>80% of Window Width</Text>
          </View>
        </View>
      </View>

      {/* Screen Dimensions */}
      <View style={styles.section}>
        <Text style={styles.title}>Screen Dimensions</Text>
        <View style={styles.demoContainer}>
          <Text style={styles.text}>screen.width: {screen.width}px</Text>
          <Text style={styles.text}>screen.height: {screen.height}px</Text>
          <Text style={styles.subtitle}>Screen = Full Physical Screen</Text>
          <View style={[styles.box, { width: screen.width * 0.8 }]}>
            <Text style={styles.boxText}>80% of Screen Width</Text>
          </View>
        </View>
      </View>

      {/* Dimension Differences */}
      <View style={styles.section}>
        <Text style={styles.title}>Window vs Screen Differences</Text>
        <View style={styles.demoContainer}>
          <Text style={styles.text}>
            Width Difference: {screen.width - window.width}px
          </Text>
          <Text style={styles.text}>
            Height Difference: {screen.height - window.height}px
          </Text>
          <Text style={styles.note}>
            The difference accounts for system UI elements like status bar,
            navigation bar, etc.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "500",
    marginTop: 15,
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    marginBottom: 5,
  },
  note: {
    fontSize: 12,
    fontStyle: "italic",
    marginTop: 10,
    color: "#666",
  },
  demoContainer: {
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 4,
    marginBottom: 10,
  },
  box: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 4,
    marginTop: 10,
    alignItems: "center",
  },
  useCaseBox: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 4,
    marginVertical: 5,
    alignItems: "center",
  },
  boxText: {
    color: "white",
    fontSize: 14,
  },
});
