import React, { useEffect, useState } from "react";
import {
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  ActivityIndicator,
  BackHandler,
  View
} from "react-native";
import HostessItem from "./HostessItem";
import { useHistory } from "react-router-native";
import api from "../../api";

const HostessList = () => {
  // let hostessList = [
  //   { name: "selda", key: "1" },
  //   { name: "ayşe", key: "2" },
  // ];

  const [hostessList, setList] = useState([]);
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
    api.getHostesses().then((output) => {
      console.log(output);
      setList(output);
      setLoad(0);
    });
  }, []);

  return (
    <View style={styles.body}>
      <ActivityIndicator opacity={loading} style={styles.indicator} size="large" color="red" />
      <FlatList
        style={styles.flatlist}
        data={hostessList}
        renderItem={({ item }) => <HostessItem item={item}></HostessItem>}
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

export default HostessList;
