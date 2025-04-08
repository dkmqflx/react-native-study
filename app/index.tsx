import { Image, ImageBackground, ScrollView, Text, View } from "react-native";
const logo = require("../assets/images/react-logo.png");

/**
 * ScrollView Component:
 * - Provides scrollable container for content
 * - Renders all children at once (unlike FlatList)
 * - Best for limited content amount
 * - Supports both vertical and horizontal scrolling
 * - Can zoom and refresh content
 *
 * Why ScrollView inside View?
 * 1. Layout Control:
 *    - View acts as a boundary container
 *    - Prevents ScrollView from expanding beyond screen
 *    - Maintains proper flex layout
 *
 * 2. Positioning:
 *    - View can control ScrollView's position in larger layouts
 *    - Helps with nested navigation structures
 *    - Enables fixed headers/footers outside scroll area
 *
 * 3. Performance:
 *    - View provides stable container reference
 *    - Prevents unnecessary re-renders
 *    - Better memory management
 */
export default function Index() {
  return (
    // Main container - provides stable boundaries for ScrollView
    <View style={{ flex: 1 }}>
      {/* ScrollView with vertical scroll enabled by default */}
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          alignItems: "center",
          paddingVertical: 20,
        }}
      >
        {/* Original content */}
        <Text
          style={{
            fontSize: 16,
            color: "#333",
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          Edit app/index.tsx to edit this screen.
        </Text>

        {/* Basic Image component */}
        <Image
          source={logo}
          style={{ width: 200, height: 300, marginBottom: 20 }}
        />

        {/* Remote image example */}
        <Image
          source={{
            uri: "https://picsum.photos/200/300",
          }}
          style={{ width: 200, height: 300, marginBottom: 20 }}
        />

        {/* Additional text items to demonstrate scrolling */}
        {[...Array(10)].map((_, index) => (
          <View
            key={index}
            style={{
              backgroundColor: "#f0f0f0",
              padding: 20,
              marginBottom: 10,
              width: "90%",
              borderRadius: 8,
            }}
          >
            <Text style={{ fontSize: 16 }}>
              Scrollable Content Item #{index + 1}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
