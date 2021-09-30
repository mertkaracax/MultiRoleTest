/* eslint-disable react/self-closing-comp */
import React, { useEffect, useState } from "react";
import { FlatList, BackHandler, StyleSheet, View, ActivityIndicator } from "react-native";
import { useHistory } from "react-router-native";
import { useLocation } from "react-router";
// import Indicator from "../../components/ActivityIndicator/ActivityIndicator";
import StudentItem from "./StudentItem";
import api from "../../api";

const StudentListt = () => {
  const history = useHistory();

  const [students, setStudents] = useState([]);
  // const [showLoading, setShowLoading] = useState(true);
  const [loading, setLoad] = useState(1);
  const backToHome = () => {
    history.push("/schoolStaffHome");
    return true;
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener("hardwareBackPress", backToHome);

    return () => backHandler.remove();
  }, []);

  useEffect(() => {
    // setShowLoading(true);
    api.getStudentsSchoolStaff().then((output) => {
      console.log("burası mı");
      console.log(output);
      setStudents(output);
      // setShowLoading(false);
      setLoad(0);
    });
  }, []);

  return (
    <View style={styles.body}>
      <ActivityIndicator opacity={loading} style={styles.indicator} size="large" color="#0000ff" />
      <FlatList
        data={students}
        renderItem={({ item }) => <StudentItem item={item}></StudentItem>}
        keyExtractor={(item, index) => index}></FlatList>
      {/* {showLoading && <Indicator />} */}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    height: "100%",
    width: "100%",
    backgroundColor: "#F1F4F5"
  },

  indicator: {
    top: "50%"
  }
});

export default StudentListt;
