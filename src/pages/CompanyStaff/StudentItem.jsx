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
      onPress={() => history.push("/studentInfo", { object: item })}>
      <View style={styles.container}>
        <Image style={styles.avatar} source={{ uri: item.Avatar.Contents }} />
        <Text style={styles.text}>
          {item.Name} {item.Surname}
        </Text>
      </View>
      <Image style={styles.icon} source={require("../../assets/CompanyStaff/right-angle.png")} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  view: {
    elevation: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#EDF2F6",
    alignSelf: "center",
    width: "96%",
    height: 90,
    padding: 5,
    paddingRight: 10,
    margin: 3,
    elevation: 2
  },
  container: {
    paddingLeft: 5,
    alignItems: "center",
    flexDirection: "row",
    height: "100%",
    width: "70%"
  },
  text: {
    color: "black",
    fontSize: 18
  },
  avatar: {
    borderWidth: 1,
    borderRadius: 5,
    height: 60,
    width: 60,
    marginRight: 30
  },
  icon: {
    height: 30,
    width: 30,
    tintColor: "black"
  }
});
export default StudentItem;
