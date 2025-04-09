import { StyleSheet, View, ScrollView, Text } from "react-native";

/**
 * flexBasis vs height with flex:1 in React Native:
 *
 * flexBasis: Sets the initial main size of a flex item
 * - Works with flex:1 to determine final size
 * - Can be overridden by flex-grow and flex-shrink
 *
 * height: Sets a fixed size
 * - With flex:1, height becomes the minimum size
 * - Item can grow beyond height if flex:1
 */
export default function App() {
  return (
    <ScrollView style={styles.container}>
      {/* Basic flexBasis Examples */}
      <View style={styles.section}>
        <Text style={styles.title}>Basic flexBasis Examples</Text>
        <View style={styles.demoContainer}>
          <View style={[styles.box, { flexBasis: 50 }]}>
            <Text style={styles.text}>flexBasis: 50</Text>
          </View>
          <View style={[styles.box, { flexBasis: 100 }]}>
            <Text style={styles.text}>flexBasis: 100</Text>
          </View>
          <View style={[styles.box, { flexBasis: 150 }]}>
            <Text style={styles.text}>flexBasis: 150</Text>
          </View>
        </View>
      </View>

      {/* flexBasis with flex:1 */}
      <View style={styles.section}>
        <Text style={styles.title}>flexBasis with flex:1</Text>
        <View style={styles.demoContainer}>
          <View style={[styles.box, { flex: 1, flexBasis: 50 }]}>
            <Text style={styles.text}>flex:1{"\n"}flexBasis: 50</Text>
          </View>
          <View style={[styles.box, { flex: 1, flexBasis: 100 }]}>
            <Text style={styles.text}>flex:1{"\n"}flexBasis: 100</Text>
          </View>
          <View style={[styles.box, { flex: 1, flexBasis: 150 }]}>
            <Text style={styles.text}>flex:1{"\n"}flexBasis: 150</Text>
          </View>
        </View>
      </View>

      {/* Comparison: flexBasis vs height with flex:1 */}
      <View style={styles.section}>
        <Text style={styles.title}>
          Comparison: flexBasis vs height with flex:1
        </Text>
        <View style={styles.comparisonContainer}>
          <View style={[styles.column, { flex: 1, flexBasis: 100 }]}>
            <Text style={styles.text}>flex:1{"\n"}flexBasis: 100</Text>
          </View>
          <View style={[styles.column, { flex: 1, height: 100 }]}>
            <Text style={styles.text}>flex:1{"\n"}height: 100</Text>
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
    marginBottom: 30,
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
  demoContainer: {
    height: 400,
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 4,
  },
  box: {
    backgroundColor: "#007AFF",
    margin: 5,
    padding: 10,
    borderRadius: 4,
    justifyContent: "center",
  },
  comparisonContainer: {
    height: 300,
    flexDirection: "row",
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 4,
  },
  column: {
    backgroundColor: "#007AFF",
    margin: 5,
    padding: 10,
    borderRadius: 4,
    justifyContent: "center",
    minWidth: 100,
  },
});
