import Box from "@/components/box";
import { StyleSheet, View, ScrollView, Text } from "react-native";

/**
 * flexShrink in React Native:
 *
 * flexShrink determines how much an item will shrink relative to other items when there isn't enough space:
 * - Default value is 1
 * - Higher values make items shrink more
 * - 0 prevents shrinking
 * - Useful when you want to control which items should shrink first
 */
export default function App() {
  return (
    <ScrollView style={styles.container}>
      {/* Basic flexShrink Example */}
      <View style={styles.section}>
        <Text style={styles.title}>Basic flexShrink Example</Text>
        <View style={styles.row}>
          <Box style={[styles.box, { flexShrink: 1, width: 200 }]}>
            flexShrink: 1{"\n"}width: 200
          </Box>
          <Box style={[styles.box, { flexShrink: 2, width: 200 }]}>
            flexShrink: 2{"\n"}width: 200
          </Box>
        </View>
      </View>

      {/* No Shrink vs Shrink */}
      <View style={styles.section}>
        <Text style={styles.title}>No Shrink vs Shrink</Text>
        <View style={styles.row}>
          <Box style={[styles.box, { flexShrink: 0, width: 200 }]}>
            flexShrink: 0{"\n"}(won't shrink)
          </Box>
          <Box style={[styles.box, { flexShrink: 1, width: 200 }]}>
            flexShrink: 1{"\n"}(will shrink)
          </Box>
        </View>
      </View>

      {/* Multiple Items with Different Shrink Values */}
      <View style={styles.section}>
        <Text style={styles.title}>Different Shrink Values</Text>
        <View style={styles.row}>
          <Box style={[styles.box, { flexShrink: 1, width: 150 }]}>
            flexShrink: 1
          </Box>
          <Box style={[styles.box, { flexShrink: 2, width: 150 }]}>
            flexShrink: 2
          </Box>
          <Box style={[styles.box, { flexShrink: 3, width: 150 }]}>
            flexShrink: 3
          </Box>
        </View>
      </View>

      {/* Combining with flexGrow */}
      <View style={styles.section}>
        <Text style={styles.title}>With flexGrow</Text>
        <View style={styles.row}>
          <Box style={[styles.box, { flexShrink: 1, flexGrow: 1, width: 100 }]}>
            flexShrink: 1{"\n"}flexGrow: 1
          </Box>
          <Box style={[styles.box, { flexShrink: 0, width: 200 }]}>
            flexShrink: 0{"\n"}(fixed width)
          </Box>
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
    backgroundColor: "#f0f0f0",
    borderRadius: 4,
  },
  box: {
    margin: 5,
    padding: 10,
  },
});
