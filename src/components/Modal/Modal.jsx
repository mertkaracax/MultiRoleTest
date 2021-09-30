import React from "react";
import { Modal, StyleSheet, TouchableOpacity, View, Text, ScrollView } from "react-native";
import theme from "../../assets/theme";

export default function App({
  open,
  setOpen,
  children,
  customStyle = {},
  header = true,
  headerText = "",
  scrollView = false
}) {
  return (
    <Modal animationType="slide" animationTimin transparent visible={open}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setOpen(false)}>
          <View style={styles.background} />
        </TouchableOpacity>

        <View style={{ ...styles.modal, ...customStyle }}>
          {header && (
            <View style={styles.header}>
              <Text>{headerText}</Text>
            </View>
          )}
          {scrollView ? (
            <ScrollView style={styles.modalContainer}>{children}</ScrollView>
          ) : (
            <View style={styles.modalContainer}>{children}</View>
          )}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    position: "absolute",
    alignSelf: "center",
    width: "80%",
    height: "70%",
    backgroundColor: theme.BACKGROUND_COLOR,
    borderWidth: 1,
    borderColor: "gray"
  },
  header: {
    height: "9%",
    width: "100%",
    backgroundColor: theme.PRIMARY_COLOR
  },
  background: {
    height: "100%",
    backgroundColor: "#59595950"
  },
  container: {
    flex: 1,
    justifyContent: "center"
  },
  modalContainer: {
    flex: 1
  }
});
