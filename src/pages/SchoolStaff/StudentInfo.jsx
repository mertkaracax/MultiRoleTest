/* eslint-disable global-require */
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, Image, View, BackHandler, TouchableOpacity } from "react-native";
import { useHistory } from "react-router-native";
import { useLocation } from "react-router";

import api from "../../api";

const StudentInfoo = () => {
  const history = useHistory();
  const location = useLocation();
  const student = location.state.object;

  console.log("111111");
  console.log(student);

  const backToHome = () => {
    history.push("/studentListt");
    return true;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener("hardwareBackPress", backToHome);

    return () => backHandler.remove();
  }, []);

  return (
    <View style={styles.body}>
      <Image style={styles.avatar} source={{ uri: student.Avatar.Contents }} />
      <View style={styles.listContainer}>
        <View style={styles.listItem}>
          <Text style={styles.bold}>Adı:</Text>
          <Text style={styles.normal}>{student.Name}</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bold}>Numarası:</Text>
          <Text style={styles.normal}>{student.Number}</Text>
        </View>

        <View style={styles.listItem}>
          <Text style={styles.bold}>Veli Numarası:</Text>
          <Text style={styles.normal}>{student.Parent.PhoneNumber}</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bold}>Veli:</Text>
          <Text style={styles.normal}>
            {student.Parent.Name} {student.Parent.Surname}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#F1F4F5",
    paddingTop: 10,
    alignItems: "center",
    height: "100%",
    width: "100%"
  },
  avatar: {
    width: 180,
    height: 180,
    marginBottom: "5%"
  },
  listContainer: {
    backgroundColor: "white",
    width: "95%",
    height: "65%",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#0253BD"
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#0253BD",
    padding: "5%",
    width: "100%",
    height: "25%"
  },
  bold: {
    fontSize: 16,
    fontWeight: "bold"
  },
  normal: {
    fontSize: 16
  }
});

export default StudentInfoo;
