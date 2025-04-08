import { View, Text, StyleSheet, Platform } from "react-native";

/**
 * Box Shadow in React Native:
 *
 * iOS (shadowXXX):
 * - shadowColor: Color of the shadow
 * - shadowOffset: { width: number, height: number }
 * - shadowOpacity: 0 to 1
 * - shadowRadius: Blur radius
 *
 * Android (elevation):
 * - elevation: number (1-24)
 * - Only supports gray shadows
 * - Automatically handles shadow based on Material Design
 *
 * iOS-specific shadow:
 * Uses shadowColor, shadowOffset, shadowOpacity, shadowRadius
 * Offers more control over shadow appearance
 * Only works on iOS
 *
 * Android-specific shadow:
 * Uses elevation property
 * Simple Material Design shadow
 * Only works on Android
 *
 * Cross-platform shadow:
 * Uses Platform.select to apply appropriate styles
 * Works on both iOS and Android
 * Best practice for consistent shadows
 *
 * Key differences:
 * iOS allows full shadow customization
 * Android only supports gray shadows with elevation
 * Cross-platform approach ensures consistent appearance
 */
export default function Index() {
  return (
    <View style={styles.container}>
      {/* iOS Shadow */}
      <View style={styles.iosShadowBox}>
        <Text>iOS Shadow</Text>
      </View>

      {/* Android Elevation */}
      <View style={styles.androidShadowBox}>
        <Text>Android Elevation</Text>
      </View>

      {/* Cross-platform Shadow */}
      <View style={styles.crossPlatformBox}>
        <Text>Cross-platform Shadow</Text>
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
    gap: 30,
  },
  iosShadowBox: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 8,
    // iOS shadow properties
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  androidShadowBox: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 8,
    // Android shadow property
    elevation: 5,
  },
  crossPlatformBox: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 8,
    // Cross-platform shadow
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
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
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginVertical: 20,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    borderStyle: "dashed",
  },
  boxshadow: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
