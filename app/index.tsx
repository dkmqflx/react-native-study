import { StyleSheet, View, ScrollView } from "react-native";
import Box from "../components/box";

/**
 * React Native Flex Defaults:
 * - flexDirection defaults to 'column' (unlike web's 'row')
 * - All View components are flex containers by default
 * - No need to specify display: 'flex'
 * - React Native only supports flex and none for the display property (no block, inline, etc.)
 */

/**
 * React Native Flex Alignment:
 *
 * alignItems: Aligns items along the cross-axis
 * - 'stretch' (default): Items stretch to fill container's cross-axis
 * - 'flex-start': Items align to start of cross-axis
 * - 'flex-end': Items align to end of cross-axis
 * - 'center': Items center on cross-axis
 * - 'baseline': Items align by their baselines
 */
export default function App() {
  return (
    <ScrollView style={styles.container}>
      {/* Items stack vertically by default (flexDirection: 'column') */}
      <Box style={{ backgroundColor: "#8e9b00", flex: 1 }}>Box 1</Box>
      <Box style={{ backgroundColor: "#b65d1f", flex: 3 }}>Box 2</Box>
      <Box style={{ backgroundColor: "#1c4c56" }}>Box 3</Box>
      <Box style={{ backgroundColor: "#ab9156" }}>Box 4</Box>

      {/* Flex Start */}
      <View style={[styles.row, { alignItems: "flex-start" }]}>
        <Box style={[styles.box, { height: 40 }]}>flex-start</Box>
        <Box style={[styles.box, { height: 60 }]}>flex-start</Box>
        <Box style={[styles.box, { height: 80 }]}>flex-start</Box>
      </View>

      {/* Flex End */}
      <View style={[styles.row, { alignItems: "flex-end" }]}>
        <Box style={[styles.box, { height: 40 }]}>flex-end</Box>
        <Box style={[styles.box, { height: 60 }]}>flex-end</Box>
        <Box style={[styles.box, { height: 80 }]}>flex-end</Box>
      </View>

      {/* Center */}
      <View style={[styles.row, { alignItems: "center" }]}>
        <Box style={[styles.box, { height: 40 }]}>center</Box>
        <Box style={[styles.box, { height: 60 }]}>center</Box>
        <Box style={[styles.box, { height: 80 }]}>center</Box>
      </View>

      {/* Stretch */}
      <View style={[styles.row, { alignItems: "stretch" }]}>
        <Box style={styles.box}>stretch</Box>
        <Box style={styles.box}>stretch</Box>
        <Box style={styles.box}>stretch</Box>
      </View>

      {/* Baseline */}
      <View style={[styles.row, { alignItems: "baseline" }]}>
        <Box style={[styles.box, { height: 40, paddingTop: 10 }]}>baseline</Box>
        <Box style={[styles.box, { height: 60, paddingTop: 20 }]}>baseline</Box>
        <Box style={[styles.box, { height: 80, paddingTop: 30 }]}>baseline</Box>
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
    height: 100, // Fixed height to demonstrate alignment
    marginVertical: 10, // Add vertical margin between rows
  },
  box: {
    backgroundColor: "#007AFF",
    padding: 10,
    margin: 5,
    borderRadius: 4,
    width: 100,
  },
});
