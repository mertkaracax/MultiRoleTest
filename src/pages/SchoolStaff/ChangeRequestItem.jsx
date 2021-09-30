import React from "react";
import { StyleSheet, Text, TouchableOpacity, Image, View } from "react-native";
import { useHistory } from "react-router-native";

const ChangeRequestItemm = ({ item }) => {
  const history = useHistory();
  return (
    <View style={styles.view}>
      <TouchableOpacity
        onPress={() => history.push("/requestDetaill", { object: item })}
        style={styles.container}>
        <Image style={styles.avatar} source={require("../../assets/SchoolStaff/exchange.png")} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            RequestedDate:{" "}
            <Text style={styles.text2}>{item.RequestedDate?.slice(0, 19).replace("T", " ")}</Text>{" "}
          </Text>
          <Text style={styles.text}>
            CreatedOn:{" "}
            <Text style={styles.text2}>{item.CreatedOn?.slice(0, 19).replace("T", " ")}</Text>{" "}
          </Text>
        </View>
      </TouchableOpacity>
      <Image style={styles.icon} source={require("../../assets/SchoolStaff/right-angle.png")} />
    </View>
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
    color: "black",
    fontWeight: "bold"
  },
  text2: {
    fontWeight: "normal"
  },
  avatar: {
    borderWidth: 1,
    borderRadius: 5,
    height: "90%",
    width: "25%",
    marginRight: 30
  },
  icon: {
    height: 30,
    width: 30,
    marginRight: 5
  },
  textContainer: {
    flexDirection: "column"
  }
});
export default ChangeRequestItemm;
