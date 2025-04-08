import { StyleSheet, View, ScrollView } from "react-native";
import Box from "../components/box";

/**
 * alignSelf in React Native:
 *
 * Overrides parent's alignItems for individual items:
 * - 'auto': Default, follows parent's alignItems
 * - 'flex-start': Aligns to start of cross-axis
 * - 'flex-end': Aligns to end of cross-axis
 * - 'center': Centers on cross-axis
 * - 'stretch': Stretches to fill cross-axis
 * - 'baseline': Aligns by text baseline
 */
export default function App() {
  return (
    <ScrollView style={styles.container}>
      {/* Parent alignItems: center */}
      <View style={[styles.row, { alignItems: "center" }]}>
        <Box style={[styles.box, { alignSelf: "flex-start" }]}>
          alignSelf: flex-start
        </Box>
        <Box style={[styles.box]}>parent: center</Box>
        <Box style={[styles.box, { alignSelf: "flex-end" }]}>
          alignSelf: flex-end
        </Box>
      </View>

      {/* Parent alignItems: flex-start */}
      <View style={[styles.row, { alignItems: "flex-start" }]}>
        <Box style={[styles.box]}>parent: flex-start</Box>
        <Box style={[styles.box, { alignSelf: "center" }]}>
          alignSelf: center
        </Box>
        <Box style={[styles.box, { alignSelf: "stretch", height: undefined }]}>
          alignSelf: stretch
        </Box>
      </View>

      {/* Parent alignItems: flex-end */}
      <View style={[styles.row, { alignItems: "flex-end" }]}>
        <Box style={[styles.box, { alignSelf: "baseline", paddingTop: 20 }]}>
          alignSelf: baseline
        </Box>
        <Box style={[styles.box]}>parent: flex-end</Box>
        <Box style={[styles.box, { alignSelf: "center" }]}>
          alignSelf: center
        </Box>
      </View>

      {/* Parent alignItems: stretch */}
      <View style={[styles.row, { alignItems: "stretch" }]}>
        <Box style={[styles.box, { height: undefined }]}>parent: stretch</Box>
        <Box style={[styles.box, { alignSelf: "center", height: 40 }]}>
          alignSelf: center
        </Box>
        <Box style={[styles.box, { height: undefined }]}>parent: stretch</Box>
      </View>

      {/* Mixed alignSelf */}
      <View style={[styles.row]}>
        <Box style={[styles.box, { alignSelf: "flex-start" }]}>flex-start</Box>
        <Box style={[styles.box, { alignSelf: "center" }]}>center</Box>
        <Box style={[styles.box, { alignSelf: "flex-end" }]}>flex-end</Box>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
});
