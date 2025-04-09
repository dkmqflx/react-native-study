import { StyleSheet, View, ScrollView, Text } from "react-native";
import Box from "../components/box";

/**

/**
 * alignContent in React Native:
 *
 * alignContent is used to align the vertical items in the container:
 * - 'flex-start': Items packed at start
 * - 'flex-end': Items packed at end
 * - 'center': Items centered in container
 * - 'stretch': Items stretch to fill space
 * - 'space-between': Equal space between items
 * - 'space-around': Equal space around items
 */
export default function App() {
  return (
    <ScrollView style={styles.container}>
      {/* Flex Start */}
      <View style={styles.section}>
        <Text style={styles.title}>alignContent: 'flex-start'</Text>
        <View style={[styles.wrapper, { alignContent: "flex-start" }]}>
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <Box key={num} style={styles.box}>
              Box {num}
            </Box>
          ))}
        </View>
      </View>

      {/* Flex End */}
      <View style={styles.section}>
        <Text style={styles.title}>alignContent: 'flex-end'</Text>
        <View style={[styles.wrapper, { alignContent: "flex-end" }]}>
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <Box key={num} style={styles.box}>
              Box {num}
            </Box>
          ))}
        </View>
      </View>

      {/* Center */}
      <View style={styles.section}>
        <Text style={styles.title}>alignContent: 'center'</Text>
        <View style={[styles.wrapper, { alignContent: "center" }]}>
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <Box key={num} style={styles.box}>
              Box {num}
            </Box>
          ))}
        </View>
      </View>

      {/* Space Between */}
      <View style={styles.section}>
        <Text style={styles.title}>alignContent: 'space-between'</Text>
        <View style={[styles.wrapper, { alignContent: "space-between" }]}>
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <Box key={num} style={styles.box}>
              Box {num}
            </Box>
          ))}
        </View>
      </View>

      {/* Space Around */}
      <View style={styles.section}>
        <Text style={styles.title}>alignContent: 'space-around'</Text>
        <View style={[styles.wrapper, { alignContent: "space-around" }]}>
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <Box key={num} style={styles.box}>
              Box {num}
            </Box>
          ))}
        </View>
      </View>

      {/* Stretch */}
      <View style={styles.section}>
        <Text style={styles.title}>alignContent: 'stretch'</Text>
        <View style={[styles.wrapper, { alignContent: "stretch" }]}>
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <Box key={num} style={[styles.box, { height: undefined }]}>
              Box {num}
            </Box>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
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

  box: {
    backgroundColor: "#007AFF",
    padding: 10,
    margin: 5,
    borderRadius: 4,
    width: 100,
    height: 50,
  },
  wrapBox: {
    backgroundColor: "#007AFF",
    padding: 10,
    margin: 5,
    borderRadius: 4,
    width: 100,
    height: 60,
  },
  wrapper: {
    flexWrap: "wrap",
    borderWidth: 1,
    borderColor: "#ccc",
    height: 200,
    backgroundColor: "#f0f0f0",
  },
});
