import React, { useEffect, useState } from "react";
import { FlatList, BackHandler, StyleSheet, View, ActivityIndicator, Text } from "react-native";
import { useHistory } from "react-router-native";
import { useLocation } from "react-router";
import StudentItem from "./StudentItem";
import api from "../../api";

const StudentList = () => {
  // let students = [
  //   { name: "mert", key: "1" },
  //   { name: "türker", key: "2" },
  //   { name: "tuncay", key: "3" },
  //   { name: "özlem", key: "4" }
  // ];

  const [students, setStudents] = useState([]);
  const [loading, setLoad] = useState(1);

  let history = useHistory();

  const backToHome = () => {
    history.push("/csHome");
    return true;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener("hardwareBackPress", backToHome);

    return () => backHandler.remove();
  }, []);

  useEffect(() => {
    api.getStudents().then((output) => {
      console.log(output);
      setStudents(output);
      setLoad(0);
    });
  }, []);

  return (
    <View style={styles.body}>
      <ActivityIndicator opacity={loading} style={styles.indicator} size="large" color="red" />
      <FlatList
        data={students}
        renderItem={({ item }) => <StudentItem item={item}></StudentItem>}
        keyExtractor={(item, index) => index}></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    padding: 5
  },
  indicator: {
    position: "relative",
    top: "50%",
    height: 1
  }
});

export default StudentList;
