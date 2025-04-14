import { StyleSheet, SafeAreaView, Platform, ScrollView } from "react-native";
import PokemonCard from "../components/PokemonCard";
import type { PokemonType } from "../components/PokemonCard";

export default function App() {
  // Pokemon data objects
  // Each pokemon has: name, image, type, hp, moves, and weaknesses

  // Charmander: Fire-type starter Pokemon
  const charmanderData = {
    name: "Charmander",
    image: require("../assets/charmander.png"),
    type: "fire" as PokemonType,
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["Water", "Rock"],
  };

  // Squirtle: Water-type starter Pokemon
  const squirtleData = {
    name: "Squirtle",
    image: require("../assets/squirtle.png"),
    type: "water" as PokemonType,
    hp: 44,
    moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
    weaknesses: ["Electric", "Grass"],
  };

  // Bulbasaur: Grass-type starter Pokemon
  const bulbasaurData = {
    name: "Bulbasaur",
    image: require("../assets/bulbasaur.png"),
    type: "grass" as PokemonType,
    hp: 45,
    moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  };

  // Pikachu: Electric-type Pokemon
  const pikachuData = {
    name: "Pikachu",
    image: require("../assets/pikachu.png"),
    type: "electric" as PokemonType,
    hp: 35,
    moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
    weaknesses: ["Ground"],
  };

  return (
    // SafeAreaView ensures content is visible on all devices
    <SafeAreaView style={styles.container}>
      {/* ScrollView allows scrolling through Pokemon cards */}
      <ScrollView>
        {/* Render Pokemon cards using the PokemonCard component */}
        {/* Spread operator (...) passes all properties from the data object */}
        <PokemonCard {...charmanderData} />
        <PokemonCard {...squirtleData} />
        <PokemonCard {...bulbasaurData} />
        <PokemonCard {...pikachuData} />
      </ScrollView>
    </SafeAreaView>
  );
}

// Styles for the app container
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    // Add padding top only for Android to account for status bar
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
