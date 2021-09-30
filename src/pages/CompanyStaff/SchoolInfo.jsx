import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  Image,
  BackHandler,
  View,
  Linking,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import { useHistory } from "react-router-native";
import api from "../../api";
import { callNumber } from "../../Helpers/callMethod";

const SchoolInfo = () => {
  const [school, setSchool] = useState("No Data");
  const [name, setName] = useState("No Data");
  const [address, setAddress] = useState("No Data");
  const [number, setNumber] = useState("No Data");
  const [website, setWebsite] = useState("No Data");
  // let school = "empty";

  const [loading, setLoad] = useState(1);
  let history = useHistory();


  const backToHome = () => {
    history.push("cshome");
    return true;
  };

  useEffect(async () => {
    const backHandler = BackHandler.addEventListener("hardwareBackPress", backToHome);
    return () => backHandler.remove();
  }, []);

  useEffect(async () => {
    api.getSchools().then((output) => {
      const data = output[0];
      setSchool(data);
      setName(data.Name);
      setNumber(data.PhoneNumber);
      setWebsite(data.WebSite);
      setAddress(data.Location.Address);
      setLoad(0);
    });
  }, []);

  return (
    <View style={styles.body}>
      <ActivityIndicator opacity={loading} style={styles.indicator} size="large" color="red" />
      <Image style={styles.avatar} source={require("../../assets/CompanyStaff/school.png")} />
      <View style={styles.listContainer}>
        <View style={styles.listItem}>
          <Text style={styles.bold}>Adı:</Text>
          <Text style={styles.normal}>{name}</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bold}>Telefon numarası:</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.normal}>{number}</Text>
            <TouchableOpacity
              onPress={() => {
                console.log("mert");
                callNumber("05545465399");
              }}>
              <Image
                tintColor="white"
                style={styles.img}
                source={require("../../assets/CompanyStaff/telephone.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bold}>Adres:</Text>
          <TouchableOpacity
            onPress={() =>
              history.push("/mapPage", {
                latitude: school.Location.Latitude,
                longitude: school.Location.Longitude
              })
            }
            style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ color: "black", fontSize: 18, fontWeight: "normal" }}>{address}</Text>
            <Image tintColor="black" style={styles.img} source={require("../../assets/map.png")} />
          </TouchableOpacity>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bold}>İnternet Sitesi:</Text>
          <Text
            onPress={() => Linking.openURL(`${website}`)}
            style={{
              fontSize: 18,
              fontWeight: "normal",
              color: "black",
              textDecorationLine: "underline"
            }}>
            {website}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: "white",
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
    width: "96%",
    height: "65%"
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#EDF2F6",
    padding: "5%",
    width: "100%",
    height: "24%",
    marginBottom: "1.5%"
  },
  bold: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black"
  },
  normal: {
    fontSize: 18,
    color: "black"
  },
  img: {
    height: 25,
    width: 25,
    marginLeft: 7,
    tintColor: "black"
  },
  indicator: {
    position: "relative",
    top: "50%",
    height: 1,
    zIndex: 2
  }
});

export default SchoolInfo;
