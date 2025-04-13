import {
  StyleSheet,
  View,
  Text,
  useWindowDimensions,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";

/**
 *
 * SafeAreaView:
 *
 * Purpose:
 * - Renders content within the safe area boundaries of a device
 * - Automatically adjusts for notches, home indicators, and status bars
 * - Essential for modern devices with irregular screen shapes
 *
 * When to use:
 * - For top-level containers
 * - When content needs to avoid system UI elements
 * - Especially important for iOS devices with notches
 *
 * Note:
 * - iOS: Works for all edges (top, bottom, left, right)
 * - Android: Only works for top padding (status bar)
 * - For Android bottom padding, use Platform.select with padding
 */

export default function App() {
  // Get dimensions using hook (automatically updates)
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  // Derive orientation from dimensions
  const isLandscape = windowWidth > windowHeight;

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Demo - Shows SafeArea at top */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Header (Safe Area Protected)</Text>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        {/* Dimensions Demo */}
        <View
          style={[
            styles.box,
            {
              width: isLandscape ? "50%" : "90%",
              height: isLandscape ? "40%" : "30%",
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

        {/* SafeArea Demo Boxes */}
        <View style={styles.demoContainer}>
          <View style={styles.demoBox}>
            <Text style={styles.demoText}>
              Without SafeArea{"\n"}
              (Could be hidden)
            </Text>
          </View>
          <View style={[styles.demoBox, styles.safeBox]}>
            <Text style={styles.demoText}>
              With SafeArea{"\n"}
              (Always visible)
            </Text>
          </View>
        </View>
      </View>

      {/* Footer Demo - Shows SafeArea at bottom */}
      <View
        style={[
          styles.footer,
          // Add extra padding for Android
          Platform.select({
            android: {
              paddingBottom: 20, // Compensate for navigation bar
            },
          }),
        ]}
      >
        <Text style={styles.footerText}>
          Footer (Safe Area + Android Padding)
        </Text>
      </View>

      {/* Device Info */}
      <View style={styles.deviceInfo}>
        <Text style={styles.infoText}>
          Platform: {Platform.OS}
          {"\n"}
          Status Bar Height: {StatusBar.currentHeight || 0}px{"\n"}
          Has Safe Area: {isLandscape ? "Sides" : "Top/Bottom"}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  header: {
    backgroundColor: "#007AFF",
    padding: 15,
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  box: {
    backgroundColor: "#007AFF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginBottom: 20,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  demoContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    padding: 10,
  },
  demoBox: {
    backgroundColor: "#FF3B30",
    padding: 15,
    borderRadius: 8,
    width: "45%",
    alignItems: "center",
  },
  safeBox: {
    backgroundColor: "#34C759",
  },
  demoText: {
    color: "white",
    textAlign: "center",
    fontSize: 14,
  },
  footer: {
    backgroundColor: "#007AFF",
    padding: 15,
    alignItems: "center",
  },
  footerText: {
    color: "white",
    fontSize: 16,
  },
  deviceInfo: {
    padding: 10,
    backgroundColor: "#E5E5EA",
  },
  infoText: {
    fontSize: 12,
    color: "#8E8E93",
  },
});
