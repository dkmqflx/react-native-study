import Box from "@/components/box";
import { StyleSheet, View, ScrollView, Text } from "react-native";

/**
 * flexGrow in React Native:
 *
 * flexGrow determines how much an item will grow relative to other items:
 * - Default value is 0 (won't grow)
 * - Higher values make items grow more
 * - Similar to flex: n where n is the flexGrow value
 * - Distributes remaining space proportionally
 *
 * flex is shorthand for flexGrow, flexShrink, and flexBasis
 * if flex: 1, then flexGrow: 1, flexShrink: 1, flexBasis: 0
 */
export default function App() {
  return (
    <ScrollView style={styles.container}>
      {/* Basic flexGrow Example */}
      <View style={styles.section}>
        <Text style={styles.title}>Basic flexGrow Example</Text>
        <View style={styles.row}>
          <View style={[styles.box, { width: 50 }]}>
            <Text style={styles.text}>width: 50{"\n"}no grow</Text>
          </View>
          <View style={[styles.box, { flexGrow: 1, width: 50 }]}>
            <Text style={styles.text}>width: 50{"\n"}flexGrow: 1</Text>
          </View>
        </View>
      </View>

      {/* Different flexGrow Values */}
      <View style={styles.section}>
        <Text style={styles.title}>Different flexGrow Values</Text>
        <View style={styles.row}>
          <View style={[styles.box, { flexGrow: 1, width: 50 }]}>
            <Text style={styles.text}>flexGrow: 1</Text>
          </View>
          <View style={[styles.box, { flexGrow: 2, width: 50 }]}>
            <Text style={styles.text}>flexGrow: 2</Text>
          </View>
          <View style={[styles.box, { flexGrow: 3, width: 50 }]}>
            <Text style={styles.text}>flexGrow: 3</Text>
          </View>
        </View>
      </View>

      {/* flexGrow with Fixed Width Items */}
      <View style={styles.section}>
        <Text style={styles.title}>flexGrow with Fixed Width Items</Text>
        <View style={styles.row}>
          <View style={[styles.box, { width: 100 }]}>
            <Text style={styles.text}>Fixed{"\n"}width: 100</Text>
          </View>
          <View style={[styles.box, { flexGrow: 1 }]}>
            <Text style={styles.text}>flexGrow: 1{"\n"}(fills space)</Text>
          </View>
          <View style={[styles.box, { width: 100 }]}>
            <Text style={styles.text}>Fixed{"\n"}width: 100</Text>
          </View>
        </View>
      </View>

      {/* Multiple Growing Items */}
      <View style={styles.section}>
        <Text style={styles.title}>Multiple Growing Items</Text>
        <View style={styles.row}>
          <View style={[styles.box, { flexGrow: 1, width: 50 }]}>
            <Text style={styles.text}>flexGrow: 1</Text>
          </View>
          <View style={[styles.box, { width: 100 }]}>
            <Text style={styles.text}>Fixed{"\n"}width: 100</Text>
          </View>
          <View style={[styles.box, { flexGrow: 1, width: 50 }]}>
            <Text style={styles.text}>flexGrow: 1</Text>
          </View>
        </View>
      </View>

      {/* Combining flexGrow and flexShrink */}
      <View style={styles.section}>
        <Text style={styles.title}>flexGrow + flexShrink</Text>
        <View style={styles.row}>
          <View
            style={[styles.box, { flexGrow: 1, flexShrink: 1, width: 100 }]}
          >
            <Text style={styles.text}>grow: 1{"\n"}shrink: 1</Text>
          </View>
          <View
            style={[styles.box, { flexGrow: 1, flexShrink: 0, width: 100 }]}
          >
            <Text style={styles.text}>grow: 1{"\n"}shrink: 0</Text>
          </View>
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
  text: {
    color: "white",
    fontSize: 12,
    textAlign: "center",
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
    backgroundColor: "#007AFF",
    margin: 5,
    padding: 10,
    borderRadius: 4,
    justifyContent: "center",
  },
});
