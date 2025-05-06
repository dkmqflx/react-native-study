import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  FlatList,
  SafeAreaView,
  SectionList,
} from "react-native";
import pokemonList from "../data.json";
import groupedPokemonList from "../grouped-data.json";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollView}>
        {/*
          SectionList is a performant component for rendering lists with section headers.
          It is ideal for grouped data, such as lists divided by category or type.
          Here, we use SectionList to display Pokémon grouped by their type.

          Key props used:
          - sections: Array of section objects, each with a 'type' (header) and 'data' (items)
          - renderItem: Function to render each item in a section
          - renderSectionHeader: Function to render the header for each section
          - ItemSeparatorComponent: Renders a separator between items
          - SectionSeparatorComponent: Renders a separator between sections
        */}
        <SectionList
          // The 'sections' prop expects an array of objects with 'type' and 'data' fields.
          sections={groupedPokemonList}
          // Renders each item in the section. 'item' is a Pokémon name string.
          renderItem={({ item }) => {
            return (
              <View style={styles.card}>
                <Text style={styles.cardText}>{item}</Text>
              </View>
            );
          }}
          // Renders the header for each section. 'section.type' is the Pokémon type.
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeaderText}>{section.type}</Text>
          )}
          // Adds space between items in a section.
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: 16,
              }}
            />
          )}
          // Adds space between different sections.
          SectionSeparatorComponent={() => (
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
  headerText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 12,
  },
  footerText: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 12,
  },
  sectionHeaderText: {
    backgroundColor: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },
});
