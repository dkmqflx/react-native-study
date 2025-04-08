import { StyleSheet, View, ScrollView, Text } from "react-native";
import Box from "../components/box";

/**
 * flexWrap in React Native:
 *
 * Controls how items wrap when they run out of space:
 * - 'nowrap' (default): Items stay in single line, may overflow
 * - 'wrap': Items wrap to next line when needed
 * - 'wrap-reverse': Items wrap to previous line
 */
export default function App() {
  return (
    <ScrollView style={styles.container}>
      {/* No Wrap (default) */}
      <View style={styles.section}>
        <Text style={styles.title}>flexWrap: 'nowrap' (default)</Text>
        <View style={[styles.row, { flexWrap: "nowrap" }]}>
          {[1, 2, 3, 4, 5].map((num) => (
            <Box key={num} style={styles.wrapBox}>
              Box {num}
            </Box>
          ))}
        </View>
      </View>

      {/* Wrap */}
      <View style={styles.section}>
        <Text style={styles.title}>flexWrap: 'wrap'</Text>
        <View style={[styles.row, { flexWrap: "wrap" }]}>
          {[1, 2, 3, 4, 5].map((num) => (
            <Box key={num} style={styles.wrapBox}>
              Box {num}
            </Box>
          ))}
        </View>
      </View>

      {/* Wrap Reverse */}
      <View style={styles.section}>
        <Text style={styles.title}>flexWrap: 'wrap-reverse'</Text>
        <View style={[styles.row, { flexWrap: "wrap-reverse" }]}>
          {[1, 2, 3, 4, 5].map((num) => (
            <Box key={num} style={styles.wrapBox}>
              Box {num}
            </Box>
          ))}
        </View>
      </View>

      {/* Wrap with different box sizes */}
      <View style={styles.section}>
        <Text style={styles.title}>Wrap with different sizes</Text>
        <View style={[styles.row, { flexWrap: "wrap" }]}>
          <Box style={[styles.wrapBox, { width: 150 }]}>Wide Box</Box>
          <Box style={styles.wrapBox}>Normal</Box>
          <Box style={[styles.wrapBox, { width: 200 }]}>Wider Box</Box>
          <Box style={styles.wrapBox}>Normal</Box>
          <Box style={styles.wrapBox}>Normal</Box>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    height: 150, // Increased height to show alignment better
    marginVertical: 10,
    backgroundColor: "#f0f0f0", // Light background to see container
  },
  box: {
    backgroundColor: "#007AFF",
    padding: 10,
    margin: 5,
    borderRadius: 4,
    width: 100,
    height: 60,
  },
  wrapBox: {
    backgroundColor: "#007AFF",
    padding: 10,
    margin: 5,
    borderRadius: 4,
    width: 100,
    height: 60,
  },
});
