import React from "react";
import { StyleSheet, View } from "react-native";
import theme from "../../assets/theme";

export default function Header() {
  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 1, //56
    backgroundColor: theme.PRIMARY_COLOR
  }
});
