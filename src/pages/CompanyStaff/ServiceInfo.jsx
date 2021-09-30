import React, { useEffect } from "react";
import { StyleSheet, Text, Image, TouchableOpacity, View, BackHandler, Alert } from "react-native";
import { useHistory } from "react-router-native";
import { useLocation } from "react-router";
import api from "../../api";
import { callNumber } from "../../Helpers/callMethod";

const ServiceInfo = () => {
  const history = useHistory();
  const location = useLocation();
  const x = location.state.object;
  const backToHome = () => {
    history.push("/serviceList");
    return true;
  };

  const getStopsAndPush = async () => {
    api.getDefaultStops(x.Id, x.Direction).then((output) => {
      console.log("default stops -> ", output);
      const array = output.Stops;
      const markerList = [];
      array.forEach((item) => {
        const obj = { latitude: item.Location.Latitude, longitude: item.Location.Longitude };
        markerList.push(obj);
      });
      if (markerList.length > 0) {
        history.push("/routeMap", { list: markerList });
      } else {
        Alert.alert("Hata", "Bu rotada herhangi bir durak tanımlanmamış.");
      }
    });
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener("hardwareBackPress", backToHome);
    console.log(`ServiceInfoPage => ${JSON.stringify(x)}`);
    return () => backHandler.remove();
  }, []);
  return (
    <View style={styles.body}>
      <Image style={styles.avatar} source={{ uri: x.BusPhoto.Contents }} />
      <View style={styles.listContainer}>
        <View style={styles.listItem}>
          <Text style={styles.bold}>Hat Numarası:</Text>
          <Text style={styles.normal}>{x.Number}</Text>
        </View>

        <View style={styles.listItem}>
          <Text style={styles.bold}>Hat adı:</Text>
          <Text style={styles.normal}>{x.Name}</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bold}>Araç Plakası:</Text>
          <Text style={styles.normal}>{x.BusName}</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bold}>Hostes:</Text>
          <View style={styles.nameAndIconContainer}>
            <Text style={styles.normal}>{x.HostessName}</Text>
            <TouchableOpacity
              onPress={() => {
                callNumber("5545465399");
              }}>
              <Image
                style={styles.icon}
                source={require("../../assets/CompanyStaff/telephone.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bold}>Sürücü:</Text>
          <View style={styles.nameAndIconContainer}>
            <Text style={styles.normal}>{x.DriverName}</Text>
            <TouchableOpacity
              onPress={() => {
                callNumber("5545465399");
              }}>
              <Image
                style={styles.icon}
                source={require("../../assets/CompanyStaff/telephone.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bold}>Duraklar:</Text>
          <TouchableOpacity
            onPress={async () => {
              await getStopsAndPush();
            }}
            style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ color: "black", marginRight: 3 }}>Göster</Text>
            <Image tintColor="white" style={styles.img} source={require("../../assets/map.png")} />
          </TouchableOpacity>
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
    width: "100%"
  },
  avatar: {
    width: "31%",
    height: "20%",
    marginBottom: "5%"
  },
  listContainer: {
    backgroundColor: "white",
    width: "95%",
    height: "80%"
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "5%",
    width: "100%",
    height: "14%",
    backgroundColor: "#EDF2F6",
    marginBottom: "1.5%"
  },
  bold: {
    fontSize: 18,
    fontWeight: "normal",
    color: "black"
  },
  normal: {
    fontSize: 18,
    color: "black"
  },
  img: {
    height: 25,
    width: 25,
    marginLeft: 5,
    tintColor: "black"
  },
  icon: {
    height: 25,
    width: 25,
    marginLeft: 7,
    tintColor: "black"
  },
  nameAndIconContainer: {
    flexDirection: "row",
    justifyContent: "center"
  }
});

export default ServiceInfo;
