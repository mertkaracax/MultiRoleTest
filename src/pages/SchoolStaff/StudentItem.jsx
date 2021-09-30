/* eslint-disable global-require */
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View
} from "react-native";
import { useHistory } from "react-router-native";

const StudentItem = ({ item }) => {
  const history = useHistory();
  return (
    <TouchableOpacity
      style={styles.view}
      // onPress={() => navigation.navigate("StudentInfo", { name: item.name })}
      onPress={() => history.push("/studentInfoo", { object: item })}>
      <View style={styles.container}>
        <Image style={styles.avatar} source={require("../../assets/SchoolStaff/avatar.jpg")} />
        <Text style={styles.text}>
          {item.Name} {item.Surname}
        </Text>
      </View>
      <Image style={styles.icon} source={require("../../assets/SchoolStaff/right-angle.png")} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    alignSelf: "center",
    width: "95%",
    height: 90,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#09A2F2",
    padding: 5,
    paddingRight: 10,
    margin: 3
  },
  container: {
    paddingLeft: 5,
    alignItems: "center",
    flexDirection: "row",
    height: "100%",
    width: "70%"
  },
  text: {
    color: "black"
  },
  avatar: {
    borderWidth: 1,
    borderRadius: 5,
    height: "90%",
    width: "25%",
    marginRight: 30
  },
  icon: {
    height: "60%",
    width: 30
  }
});
export default StudentItem;
