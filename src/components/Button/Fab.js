import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

export default function FabButton({ handleClick }) {
  return <TouchableOpacity style={styles.container} onPress={handleClick} />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#658FD6",
    borderRadius: 100,
    width: 48,
    height: 48
  }
});
