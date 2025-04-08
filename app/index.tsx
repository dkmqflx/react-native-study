import { Image, ImageBackground, Text, View } from "react-native";
const logo = require("../assets/images/react-logo.png");

/**
 * Image vs ImageBackground in React Native:
 *
 * Image Component:
 * - Basic component for displaying images
 * - Cannot contain child components
 * - Simpler and more performant
 * - Used when you just need to show an image
 *
 * ImageBackground Component:
 * - Extends Image component functionality
 * - Can contain child components (acts as a container)
 * - Useful for:
 *   - Text overlays on images
 *   - Creating image-based backgrounds
 *   - Complex layouts with images
 * - Slightly less performant than Image
 * - Internally combines Image with View
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
      {/* Local image using require */}
      <Image source={logo} style={{ width: 200, height: 300 }} />
      {/* Remote image using uri */}
      <Image
        source={{
          uri: "https://picsum.photos/200/300",
        }}
        style={{ width: 200, height: 300 }}
      />
      <ImageBackground
        source={logo}
        style={{ width: 200, height: 300 }}
        resizeMode="cover"
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            padding: 10,
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          Hello
        </Text>
      </ImageBackground>
    </View>
  );
}
