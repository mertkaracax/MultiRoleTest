import React from "react";
import { StyleSheet, View } from "react-native";
import theme from "../../assets/theme";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <View style={styles.container}>
      {/* <Header /> */}
      <View style={styles.children}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1
  },
  children: {
    paddingTop: 16,
    flex: 1,
    width: "100%",
    backgroundColor: theme.BACKGROUND_COLOR
  }
});
