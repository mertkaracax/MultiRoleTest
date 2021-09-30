import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import theme from "../../assets/theme";

export default function Button({ onClick, children, type = "contained", style = {} }) {
  const styles = [
    styleSheet.container,
    style,
    type === "contained" ? styleSheet.contained : styleSheet.other
  ];

  const combineStyles = StyleSheet.flatten(styles);
  return (
    <TouchableOpacity style={combineStyles} onPress={onClick}>
      <Text style={{ color: type === "contained" ? theme.WHITE : theme.PRIMARY_COLOR }}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}

const styleSheet = StyleSheet.create({
  container: {
    backgroundColor: "#658FD6",
    padding: 10,
    width: "auto"
  },
  contained: {
    backgroundColor: theme.PRIMARY_COLOR,
    borderRadius: 4
  },
  other: {
    backgroundColor: theme.BACKGROUND_COLOR
  }
});
