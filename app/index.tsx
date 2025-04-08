import { View, StatusBar, SafeAreaView } from "react-native";

/**
 * StatusBar Component in React Native:
 *
 * Key Props:
 * - backgroundColor: Sets background color (Android only)
 * - barStyle: Sets text/icons color
 *   - 'default': Dark content, for light backgrounds
 *   - 'light-content': Light content, for dark backgrounds
 *   - 'dark-content': Dark content, for light backgrounds
 * - hidden: Show/hide the status bar
 * - translucent: Makes status bar background transparent (Android only)
 * - animated: Animate style changes
 * - networkActivityIndicatorVisible: Show network activity (iOS only)
 */
export default function Index() {
  return (
    // SafeAreaView ensures content is not hidden behind status bar
    <SafeAreaView style={{ flex: 1 }}>
      {/* Example 1: Basic dark status bar for light backgrounds */}
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* Example 2: Light status bar for dark backgrounds
      <StatusBar
        barStyle="light-content"
        backgroundColor="#000000"
      /> */}

      {/* <StatusBar barStyle="light-content" backgroundColor="#000000" /> */}

      {/* Example 3: Translucent status bar (Android)
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="light-content"
      /> */}

      {/* Example 4: Hidden status bar
      <StatusBar
        hidden={true}
      /> */}

      {/* Example 5: Animated status bar changes
      <StatusBar
        animated={true}
        barStyle="dark-content"
        backgroundColor="#ffffff"
      /> */}

      {/* Main container */}
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
        }}
      ></View>
    </SafeAreaView>
  );
}
