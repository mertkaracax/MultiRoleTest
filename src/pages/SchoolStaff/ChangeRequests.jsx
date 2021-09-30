import React, { useEffect, useState } from "react";

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  BackHandler,
  View
} from "react-native";
import { useHistory } from "react-router-native";
import api from "../../api";
import ChangeRequestItemm from "./ChangeRequestItem";

const ChangeRequestss = () => {
  const [changeRequests, setList] = useState([]);
  const [loading, setLoad] = useState(1);
  const history = useHistory();

  const backToHome = () => {
    history.push("/schoolStaffHome");
    return true;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener("hardwareBackPress", backToHome);
    console.log("aaaaa");
    return () => backHandler.remove();
  }, []);
  useEffect(() => {
    console.log("pendingggggg");
    api.getChangeRequests().then((output) => {
      console.log(output);
      setList(output);
      setLoad(0);
    });
  }, []);
  return (
    <View style={styles.body}>
      <ActivityIndicator opacity={loading} style={styles.indicator} size="large" color="#0000ff" />
      <FlatList
        data={changeRequests}
        renderItem={({ item }) => <ChangeRequestItemm item={item} />}
        keyExtractor={(item, index) => index}
      />
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

export default ChangeRequestss;
