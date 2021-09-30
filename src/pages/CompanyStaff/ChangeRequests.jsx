import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  FlatList,
  ActivityIndicator,
  BackHandler,
  View
} from "react-native";
import { useHistory } from "react-router-native";
import api from "../../api";
import ChangeRequestItem from "./ChangeRequestItem";

const ChangeRequests = () => {
  const [changeRequests, setList] = useState([]);
  const [loading, setLoad] = useState(1);
  const history = useHistory();

  const backToHome = () => {
    history.push("/csHome");
    return true;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener("hardwareBackPress", backToHome);
    return () => backHandler.remove();
  }, []);
  useEffect(() => {
    console.log("pending");
    api.getSchoolChangeRequests().then((output) => {
      console.log(output);
      setList(output);
      setLoad(0);
    });
  }, []);
  return (
    <View style={styles.body}>
      <ActivityIndicator opacity={loading} style={styles.indicator} size="large" color="red" />
      <FlatList
        data={changeRequests}
        renderItem={({ item }) => <ChangeRequestItem item={item} />}
        keyExtractor={(item, index) => index}
      />
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

export default ChangeRequests;
