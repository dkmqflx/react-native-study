import { View, Pressable, Text, Alert } from "react-native";

/**
 * Pressable Component in React Native:
 *
 * 1. Core Features:
 *    - Most customizable button component
 *    - Detects various press interactions
 *    - Can wrap any components
 *    - Provides press state for styling
 *
 * 2. Key Props:
 *    - onPress: Regular press handler
 *    - onLongPress: Long press handler
 *    - onPressIn: Press start
 *    - onPressOut: Press end
 *    - disabled: Disable interactions
 *    - hitSlop: Expand touch area
 *
 * 3. Style Props:
 *    - style: Regular styles
 *    - android_ripple: Android ripple effect
 *    - pressRetentionOffset: Press retention boundary
 */
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
      }}
    >
      {/* Basic Pressable with press state styling */}
      <Pressable
        onPress={() => Alert.alert("Pressed!")}
        style={({ pressed }) => ({
          backgroundColor: pressed ? "#1a75ff" : "#007AFF",
          padding: 15,
          borderRadius: 8,
          width: 200,
          opacity: pressed ? 0.8 : 1,
        })}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 16,
            fontWeight: "600",
          }}
        >
          Press Me
        </Text>
      </Pressable>

      {/* Pressable with multiple handlers and hitSlop */}
      <Pressable
        onPress={() => Alert.alert("Regular Press")}
        onLongPress={() => Alert.alert("Long Press")}
        onPressIn={() => console.log("Press started")}
        onPressOut={() => console.log("Press ended")}
        hitSlop={20} // Expands touch area by 20px in all directions
        style={({ pressed }) => ({
          backgroundColor: pressed ? "#2eb82e" : "#34C759",
          padding: 15,
          borderRadius: 8,
          width: 200,
          transform: [{ scale: pressed ? 0.95 : 1 }],
        })}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 16,
            fontWeight: "600",
          }}
        >
          Multi-Handler
        </Text>
      </Pressable>

      {/* Disabled Pressable with android_ripple */}
      <Pressable
        onPress={() => Alert.alert("This will not show")}
        disabled={true}
        android_ripple={{ color: "lightgray" }}
        style={{
          backgroundColor: "#E5E5EA",
          padding: 15,
          borderRadius: 8,
          width: 200,
        }}
      >
        <Text
          style={{
            color: "#8E8E93",
            textAlign: "center",
            fontSize: 16,
            fontWeight: "600",
          }}
        >
          Disabled
        </Text>
      </Pressable>
    </View>
  );
}
