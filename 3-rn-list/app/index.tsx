import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  FlatList,
  SafeAreaView,
} from "react-native";
import pokemonList from "../data.json";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollView}>
        <FlatList
          data={pokemonList}
          renderItem={({ item }) => {
            /**
             * Using FlatList is more efficient than using ScrollView
             * because it is optimized for rendering a list of items
             * only the item that is in the view is rendered
             * but, when you check the console, you will see that the item.id are rendered
             * It is because that in advance to ensure smooth scrolling, more item.id are rendered
             *
             * keyExtractor is for the key of the item
             * ItemSeparatorComponent is for the separator of the item
             */

            // If you check the console, you will see that the item.id that is only rendered in view
            console.log(item.id);

            return (
              <View style={styles.card}>
                <Text style={styles.cardText}>{item.type}</Text>
                <Text style={styles.cardText}>{item.name}</Text>
              </View>
            );
          }}
          // keyExtractor is for the unique key of the item
          // key should be string
          keyExtractor={(item) => item.id.toString()}
          // horizontal={true} // for horizontal scrolling

          /**
           * ItemSeparatorComponent is for the separator of the item
           * Comparing with marginBottom:16, at the bottom of the card, you can see that the separator is not rendered
           * Thus, extra space is eliminated
           */
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: 16,
              }}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    // Add padding at the top equal to the status bar height (Android only)
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 8,
    // marginBottom: 16,
    borderWidth: 1,
  },
  cardText: {
    fontSize: 30,
  },
});
