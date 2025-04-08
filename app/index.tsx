import { StyleSheet, View } from "react-native";
import Box from "../components/box";

/**
 * React Native Flex Defaults:
 * - flexDirection defaults to 'column' (unlike web's 'row')
 * - All View components are flex containers by default
 * - No need to specify display: 'flex'
 * - React Native only supports flex and none for the display property (no block, inline, etc.)
 */
export default function App() {
  return (
    <View style={styles.container}>
      {/* Items stack vertically by default (flexDirection: 'column') */}
      <Box style={{ backgroundColor: "#8e9b00" }}>Box 1</Box>
      <Box style={{ backgroundColor: "#b65d1f" }}>Box 2</Box>
      <Box style={{ backgroundColor: "#1c4c56" }}>Box 3</Box>
      <Box style={{ backgroundColor: "#ab9156" }}>Box 4</Box>
      {/* <Box style={{ backgroundColor: "#6b0803" }}>Box 5</Box>
      <Box style={{ backgroundColor: "#1c4c56" }}>Box 6</Box>
      <Box style={{ backgroundColor: "#b95f21" }}>Box 7</Box> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // View is already a flex container by default
    flex: 1,
    // flexDirection: 'column' is the default
    flexDirection: "row",
    marginTop: 64,
    borderWidth: 6,
    borderColor: "red",
  },
});
