import { StyleSheet, View, Text, Platform, SafeAreaView } from "react-native";
import CustomButton from "../components/CustomButton";

/**
 *
 * When building cross-platform apps in React Native, maximizing code reuse is key,
 * but sometimes platform-specific code is needed.
 * React Native provides two main ways to handle this:
 * using the Platform module and
 * using platform-specific file extensions.
 *
 * Platform Specific Code:
 * - Different styles per platform
 * - Platform-specific components
 * - Different behavior/logic per platform
 */

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Platform.OS example */}
      <View style={styles.box}>
        <Text style={styles.title}>
          현재 플랫폼: {Platform.OS === "ios" ? "iOS" : "Android"}
        </Text>
      </View>

      {/* Platform.select example */}
      <View style={styles.platformBox}>
        <Text style={styles.text}>플랫폼별 다른 스타일이 적용됩니다</Text>
      </View>

      {/* Platform-specific file extension example */}
      <View style={styles.box}>
        <Text style={styles.title}>플랫폼별 다른 컴포넌트:</Text>
        <Text style={styles.description}>
          iOS: 보라색 텍스트, 둥근 모서리{"\n"}
          Android: 파란색 텍스트, 각진 모서리
        </Text>
        <View style={styles.buttonContainer}>
          <CustomButton
            title="플랫폼별 버튼"
            onPress={() => alert("버튼이 눌렸습니다!")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  box: {
    padding: 20,
    marginBottom: 20,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    width: "100%",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginBottom: 16,
  },
  buttonContainer: {
    alignItems: "center",
  },
  platformBox: {
    padding: Platform.select({
      ios: 20,
      android: 16,
    }),
    backgroundColor: Platform.select({
      ios: "#007AFF", // iOS 파란색
      android: "#2196F3", // Android 파란색
    }),
    borderRadius: Platform.select({
      ios: 10,
      android: 4,
    }),
    marginBottom: 20,
    width: "100%",
  },
  text: {
    color: "white",
    fontSize: 16,
  },
});
