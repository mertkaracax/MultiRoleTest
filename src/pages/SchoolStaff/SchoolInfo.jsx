import React, { useEffect, useState } from "react";
import { StyleSheet, Text, Image, BackHandler, View, ActivityIndicator } from "react-native";
import { useHistory } from "react-router-native";
import api from "../../api";

const SchoolInfoo = () => {
  const [school, setSchool] = useState(" - ");
  const [name, setName] = useState(" - ");
  const [address, setAddress] = useState(" - ");
  const [number, setNumber] = useState(" - ");
  const [webSite, setWebSite] = useState(" - ");

  const history = useHistory();

  const backToHome = () => {
    history.push("/schoolStaffHome");
    return true;
  };
  useEffect(async () => {
    const backHandler = BackHandler.addEventListener("hardwareBackPress", backToHome);

    return () => backHandler.remove();
  }, []);

  useEffect(async () => {
    api.getSchoolInformation().then((output) => {
      const data = output;
      setSchool(data);
      // console.log("data ===== ", data);
      setName(data.Name);
      setAddress(data.Location.Address);
      setNumber(data.PhoneNumber);
      setWebSite(data.WebSite);
    });
  });

  return (
    <View style={styles.body}>
      <Image style={styles.avatar} source={require("../../assets/SchoolStaff/school.png")} />
      <View style={styles.listContainer}>
        <View style={styles.listItem}>
          <Text style={styles.bold}>Adı:</Text>
          <Text style={styles.normal}>{name}</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bold}>Telefon numarası:</Text>
          <Text style={styles.normal}>{number}</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bold}>Adres:</Text>
          <Text style={styles.normal}>{address}</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bold}>İnternet Sitesi:</Text>
          <Text style={styles.normal}>{webSite}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#F1F4F5",
    paddingTop: 10,
    alignItems: "center",
    height: "100%",
    width: "100%"
  },
  avatar: {
    width: 200,
    height: 200,
    marginBottom: "5%"
  },
  listContainer: {
    backgroundColor: "white",
    width: "95%",
    height: "65%",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#0253BD"
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#0253BD",
    padding: "5%",
    width: "100%",
    height: "25%"
  },
  bold: {
    fontSize: 16,
    fontWeight: "bold"
  },
  normal: {
    fontSize: 16
  }
});

export default SchoolInfoo;
