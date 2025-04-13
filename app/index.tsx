import { StyleSheet, View, Text, ScrollView, Dimensions } from "react-native";
import { useState, useEffect } from "react";

/**
 *
 * Dimensions API
 * Not Reactive:
 * - Static values don't update on orientation changes
 * - Doesn't update when split-screen mode changes
 * - Doesn't update when keyboard shows/hides
 * - Thus, when rotating the device, the dimensions will not be updated
 *
 * Resolving Dimensions API Drawbacks:
 *
 * Main Issue: Dimensions.get() values are static and don't update on:
 * - Screen rotation
 * - Split-screen changes
 * - Keyboard show/hide
 *
 * Solution:
 * 1. Use state to store dimensions
 * 2. Add event listener for 'change' event
 * 3. Update state when dimensions change
 * 4. Clean up listener on unmount
 */

export default function App() {
  // State to store current dimensions
  const [dimensions, setDimensions] = useState({
    window: Dimensions.get("window"),
  });

  // Event handler setup
  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ({ window }) => {
      setDimensions({ window });
      console.log("Dimensions changed:", { window });
    });

    // Cleanup subscription on unmount
    return () => subscription.remove();
  }, []);

  const { window } = dimensions;
  const windowWidth = window.width;
  const windowHeight = window.height;

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.box,
          {
            width: windowWidth > 500 ? "50%" : "90%",
            height: windowHeight > 500 ? "60%" : "90%",
          },
        ]}
      >
        <Text style={{ fontSize: windowWidth > 500 ? 20 : 16 }}>Font!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  box: {
    backgroundColor: "#007AFF",
    alignItems: "center",
    justifyContent: "center",
  },
});
