import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, BackHandler, View, ActivityIndicator } from "react-native";
import DriverItem from "./DriverItem";
import { useHistory } from "react-router-native";
import { getDrivers } from "../../actions/companyStaffActions";
import api from "../../api";
import { useLocation } from "react-router";

const DriverList = () => {
  const [drivers, setDrivers] = useState([]);
  const [loading, setLoad] = useState(1);

  let history = useHistory();

  const backToHome = () => {
    history.push("/csHome", {});
    return true;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener("hardwareBackPress", backToHome);

    return () => backHandler.remove();
  }, []);
  useEffect(async () => {
    api.getDrivers().then((output) => {
      console.log(output);
      setDrivers(output);
      setLoad(0);
    });
  }, []);

  return (
    <View style={styles.body}>
      <ActivityIndicator opacity={loading} style={styles.indicator} size="large" color="red" />
      <FlatList
        style={styles.flatlist}
        data={drivers}
        renderItem={({ item }) => <DriverItem item={item}></DriverItem>}
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

export default DriverList;
