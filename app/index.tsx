import { Text, View } from "react-native";

/**
 * View is a fundamental component in React Native:
 * - It's the equivalent of a <div> in web development
 * - Acts as a container for other components
 * - Used for creating layouts and structuring content
 * - Supports flexbox layout system
 * - Can be nested inside other Views
 * - Handles touch events and can be styled
 */

/**
 * Text is a fundamental component for displaying text:
 * - The only component that can contain strings
 * - Similar to <p>, <span>, <h1> etc. in web development
 * - Supports nesting (Text components inside Text)
 * - Has its own styling properties specific to text
 * - Handles text events like selection and press
 * - Automatically wraps content by default
 * - Supports various text styling properties like:
 *   fontSize, fontWeight, color, textAlign, etc.
 */
export default function Index() {
  return (
    <View
      style={{
        // flex: 1 makes the View take up all available space
        flex: 1,
        // Centers content vertically in the container
        justifyContent: "center",
        // Centers content horizontally in the container
        alignItems: "center",
      }}
    >
      <Text
        style={{
          // Text-specific styling can be applied here
          fontSize: 16,
          color: "#333",
          textAlign: "center",
        }}
      >
        Edit app/index.tsx to edit this screen.
      </Text>
    </View>
  );
}
