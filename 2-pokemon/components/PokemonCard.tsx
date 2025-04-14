import {
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  ImageSourcePropType,
} from "react-native";

// Define the possible Pokemon types
export type PokemonType = "electric" | "water" | "fire" | "grass";

// Type definition for the visual details of each Pokemon type
type TypeDetails = {
  borderColor: string;
  emoji: string;
};

// Props interface for the PokemonCard component
type PokemonCardProps = {
  name: string;
  image: ImageSourcePropType;
  type: PokemonType;
  hp: number;
  moves: string[];
  weaknesses: string[];
};

// Helper function to get visual details based on Pokemon type
const getTypeDetails = (type: PokemonType): TypeDetails => {
  switch (type.toLowerCase()) {
    case "electric":
      return { borderColor: "#FFD700", emoji: "⚡️" };
    case "water":
      return { borderColor: "#6493EA", emoji: "💧" };
    case "fire":
      return { borderColor: "#FF5733", emoji: "🔥" };
    case "grass":
      return { borderColor: "#66CC66", emoji: "🌿" };
    default:
      return { borderColor: "#A0A0A0", emoji: "❓" };
  }
};

// PokemonCard component displays detailed information about a Pokemon
export default function PokemonCard({
  name,
  image,
  type,
  hp,
  moves,
  weaknesses,
}: PokemonCardProps) {
  const { borderColor, emoji } = getTypeDetails(type);

  return (
    <View style={styles.card}>
      {/* Pokemon name and HP section */}
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>❤️HP: {hp}</Text>
      </View>

      {/* Pokemon image */}
      <Image
        source={image}
        // accessibilityLabel: Provides text description of the image for screen readers
        // Format: "[Pokemon Name] Pokemon" (e.g., "Pikachu Pokemon")
        accessibilityLabel={`${name} Pokemon`}
        // resizeMode="contain": Scales the image uniformly to fit within the component's bounds
        // while maintaining the image's aspect ratio
        resizeMode="contain"
        style={styles.image}
      />

      {/* Pokemon type badge */}
      <View style={styles.typeContainer}>
        <View style={[styles.badge, { borderColor }]}>
          <Text style={styles.typeEmoji}>{emoji}</Text>
          <Text style={styles.typeText}>{type}</Text>
        </View>
      </View>

      {/* Pokemon moves list */}
      <View style={styles.movesContainer}>
        <Text style={styles.movesText}>Moves: {moves.join(", ")}</Text>
      </View>

      {/* Pokemon weaknesses list */}
      <View style={styles.weaknessContainer}>
        <Text style={styles.weaknessText}>
          Weakness: {weaknesses.join(", ")}
        </Text>
      </View>
    </View>
  );
}

// Styles for the PokemonCard component
const styles = StyleSheet.create({
  // Card container with platform-specific shadows
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 16,
    // Platform-specific shadow implementation:
    // iOS: Uses shadow* properties for a softer shadow effect
    // Android: Uses elevation for Material Design shadow
    ...Platform.select({
      ios: {
        // iOS shadow configuration
        shadowOffset: { width: 2, height: 2 }, // Shadow direction and distance
        shadowColor: "#333", // Shadow color
        shadowOpacity: 0.3, // Shadow transparency (0-1)
        shadowRadius: 4, // Shadow blur radius
      },
      android: {
        // Android elevation creates a Material Design shadow
        elevation: 5, // Height of the view, affects shadow
      },
    }),
  },
  // Pokemon name and HP container
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 32,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
  },
  hp: {
    fontSize: 22,
  },
  // Pokemon image styles
  image: {
    width: "100%",
    height: 200,
    marginBottom: 16,
  },
  // Type badge container and styling
  typeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 4,
  },
  typeEmoji: {
    fontSize: 30,
    marginRight: 12,
  },
  typeText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  // Moves section styling
  movesContainer: {
    marginBottom: 12,
  },
  movesText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  // Weaknesses section styling
  weaknessContainer: {
    marginBottom: 8,
  },
  weaknessText: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
