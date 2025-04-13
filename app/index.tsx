import { StyleSheet, View, Text, useWindowDimensions } from "react-native";

/**
 * useWindowDimensions Hook:
 *
 * Advantages over Dimensions API:
 * - Automatically updates on dimension changes
 * - No need for manual event listeners
 * - No cleanup required
 * - More reliable across different devices
 * - Better TypeScript support
 */

export default function App() {
  // Get dimensions using hook (automatically updates)
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  // Derive orientation from dimensions
  const isLandscape = windowWidth > windowHeight;

  return (
    <View style={styles.container}>
      {/* Responsive Box */}
      <View
        style={[
          styles.box,
          {
            // Width: 50% in landscape, 90% in portrait
            width: isLandscape ? "50%" : "90%",
            // Height: 60% in landscape, 90% in portrait
            height: isLandscape ? "60%" : "90%",
          },
        ]}
      >
        <Text style={styles.text}>
          {isLandscape ? "Landscape Mode" : "Portrait Mode"}
        </Text>
        <Text style={[styles.text, { marginTop: 10 }]}>
          {windowWidth.toFixed(0)} x {windowHeight.toFixed(0)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    backgroundColor: "#007AFF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
