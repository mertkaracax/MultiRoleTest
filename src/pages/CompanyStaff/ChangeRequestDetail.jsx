import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  Image,
  BackHandler,
  View,
  Button,
  ScrollView,
  TouchableOpacity,
  Alert
} from "react-native";
import { useHistory } from "react-router-native";
import { useLocation } from "react-router";
import api from "../../api";

const ChangeRequestDetail = () => {
  // let school = "empty";
  const history = useHistory();
  const location = useLocation();
  const request = location.state.object;
  const [reqDate, setReqDate] = useState("");
  const [creDate, setCreDate] = useState("");
  const [data, setData] = useState("");
  const [isLocationType, setType] = useState(false);

  const backToHome = () => {
    history.goBack();
    return true;
  };

  useEffect(async () => {
    const backHandler = BackHandler.addEventListener("hardwareBackPress", backToHome);
    return () => backHandler.remove();
  }, []);

  useEffect(async () => {
    await api.getChangeRequestDetail(request.ChangeRequestId).then((output) => {
      console.log("changeReqDetail----", output);
      console.log(output.RequestedLocation);
      setData(output);
      setReqDate(output.RequestedDate.slice(0, 19).replace("T", " "));
      setCreDate(output.CreatedOn.slice(0, 19).replace("T", " "));
      console.log("Param _> ", JSON.stringify(request.Param));
      if (output.Type == 4 || output.Type == 5 || output.Type == 7) {
        setType(true);
      }
    });
    await api.getChangeRequestRead(request.ChangeRequestId).then((output) => {
      console.log("changeReqRead----", output);
    });
  }, []);

  return (
    <View style={styles.body}>
      <View style={styles.listContainer}>
        <View style={styles.listItem}>
          <Text style={styles.bold}>Talep: </Text>
          <Text style={styles.normal}>{data.Title}</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bold}>Veli: </Text>
          <Text style={styles.normal}>{data.CreatedByName}</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bold}>Öğrenci: </Text>
          <Text style={styles.normal}>{data.StudentName}</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bold}>Karşılayıcı: </Text>
          <Text style={styles.normal}>
            {/* {request.Param[1][0].Name} {request.Param[1][0].Surname}{" "} */}
          </Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bold}>İstenilen Tarih: </Text>
          <Text style={styles.normal}>{reqDate}</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bold}>Oluşturulma Tarihi: </Text>
          <Text style={styles.normal}>{creDate}</Text>
        </View>
        <View style={styles.listItem2}>
          <Text style={styles.bold}>Açıklama</Text>
          <Text style={styles.normal}>{data.Context}</Text>
        </View>
        {/* <View style={styles.listItem}>
          <Text style={styles.bold}>Talep edilen konum: </Text>
          <TouchableOpacity
            onPress={() => {
              if (data.RequestedLocation.Latitude != 0 || data.RequestedLocation.Longitude != 0) {
                history.push("/requestMap", {
                  locationObject: {
                    latitude: data.RequestedLocation.Latitude,
                    longitude: data.RequestedLocation.Longitude
                  },
                  request: request
                });
              } else {
                Alert.alert("Uyarı", "Bu talepte herhangi bir konum değişikliği bulunmamaktadır.");
              }
            }}
            style={{ flexDirection: "row", alignItems: "center" }}>
            <Image tintColor="black" style={styles.img} source={require("../../assets/map.png")} />
          </TouchableOpacity>
        </View> */}
      </View>

      <View style={styles.btnContainer}>
        {isLocationType ? (
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              history.push("/requestMap", {
                locationObject: {
                  latitude: data.RequestedLocation.Latitude,
                  longitude: data.RequestedLocation.Longitude
                },
                request: request
              });
            }}>
            <Text style={{ color: "white", fontSize: 17, fontWeight: "bold" }}>
              TALEP EDİLEN KONUMU GÖSTER
            </Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: "white",
    alignItems: "center",
    height: "100%",
    width: "100%",
    padding: 5
  },
  listContainer: {
    backgroundColor: "white",
    width: "100%",
    height: "91%",
    borderRadius: 4,
    alignItems: "center"
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "3%",
    width: "96%",
    height: "12.2%",
    backgroundColor: "#EDF2F6",
    marginBottom: "0.5%"
  },
  listItem2: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EDF2F6",
    width: "96%",
    height: "20%"
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
  btn: {
    backgroundColor: "#0E68AD",
    alignItems: "center",
    justifyContent: "center",
    width: "95%",
    borderRadius: 4,
    margin: 3,
    height: "100%"
  },
  btn2: {
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    width: "49%",
    borderRadius: 4,
    margin: 3
  },
  btnContainer: {
    height: "6.5%",
    width: "96%",
    flexDirection: "row"
  },
  img: {
    height: 25,
    width: 25,
    marginLeft: 7,
    tintColor: "black"
  }
});

export default ChangeRequestDetail;
