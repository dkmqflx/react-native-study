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
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
