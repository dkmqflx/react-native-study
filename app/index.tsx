import { View, Pressable, Text, Alert, Modal, StyleSheet } from "react-native";
import { useState } from "react";

/**
 * Modal Component in React Native:
 *
 * Key Props:
 * - visible: Controls modal visibility
 * - animationType: 'none', 'slide', or 'fade'
 * - transparent: Background transparency
 * - onRequestClose: Android back button handler
 * - statusBarTranslucent: Android status bar behavior
 * - presentationStyle: iOS modal presentation style
 */
export default function Index() {
  // State to control modal visibility
  const [isBasicModalVisible, setIsBasicModalVisible] = useState(false);
  const [isCustomModalVisible, setIsCustomModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Basic Modal Example */}
      <Pressable
        style={styles.button}
        onPress={() => setIsBasicModalVisible(true)}
      >
        <Text style={styles.buttonText}>Show Basic Modal</Text>
      </Pressable>

      <Modal
        animationType="slide"
        visible={isBasicModalVisible}
        onRequestClose={() => setIsBasicModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Basic Modal</Text>
          <Text style={styles.modalText}>
            This is a basic modal that slides up from the bottom
          </Text>
          <Pressable
            style={styles.closeButton}
            onPress={() => setIsBasicModalVisible(false)}
          >
            <Text style={styles.buttonText}>Close Modal</Text>
          </Pressable>
        </View>
      </Modal>

      {/* Custom Transparent Modal Example */}
      <Pressable
        style={[styles.button, { marginTop: 20 }]}
        onPress={() => setIsCustomModalVisible(true)}
      >
        <Text style={styles.buttonText}>Show Custom Modal</Text>
      </Pressable>

      <Modal
        animationType="fade"
        transparent={true}
        visible={isCustomModalVisible}
        onRequestClose={() => setIsCustomModalVisible(false)}
        statusBarTranslucent={true}
      >
        <View style={styles.centeredView}>
          <View style={styles.customModalView}>
            <Text style={styles.modalTitle}>Custom Modal</Text>
            <Text style={styles.modalText}>
              This is a custom modal with:
              {"\n"}- Transparent background
              {"\n"}- Fade animation
              {"\n"}- Centered content
              {"\n"}- Custom styling
            </Text>
            <Pressable
              style={styles.closeButton}
              onPress={() => setIsCustomModalVisible(false)}
            >
              <Text style={styles.buttonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

// Styles for all components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 8,
    width: 200,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
  modalContainer: {
    flex: 1,
    padding: 60,
    backgroundColor: "white",
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  customModalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "80%",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    lineHeight: 24,
  },
  closeButton: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 8,
    width: 150,
    marginTop: 10,
  },
});
