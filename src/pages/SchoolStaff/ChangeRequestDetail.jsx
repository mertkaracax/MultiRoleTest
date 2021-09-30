import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  Image,
  BackHandler,
  View,
  Button,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { useHistory } from "react-router-native";
import { useLocation } from "react-router";
import api from "../../api";

const ChangeRequestDetaill = () => {
  // let school = "empty";
  const history = useHistory();
  const location = useLocation();
  const request = location.state.object;
  const [data, setData] = useState("");

  const backToHome = () => {
    history.push("/changeRequestss");
    return true;
  };

  const handleClick = () => {
    console.log("1");
    api.approveChangeRequest(request.ChangeRequestId).then((output) => {
      console.log(output);
      console.log("2");
    });
  };

  useEffect(async () => {
    const backHandler = BackHandler.addEventListener("hardwareBackPress", backToHome);
    return () => backHandler.remove();
  }, []);

  useEffect(async () => {
    console.log("bundan önce");
    api.getSchoolStaffChangeRequestDetail(request.ChangeRequestId).then((output) => {
      console.log(output);
      console.log("bundan sonra");
      setData(output);
    });
  }, []);

  return (
    <View style={styles.body}>
      <View style={styles.listContainer}>
        <View style={styles.listItem}>
          <Text style={styles.bold}>Talep: </Text>
          <Text style={styles.normal}>{request.Title}</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bold}>Veli: </Text>
          <Text style={styles.normal}>{data.CreatedByName} </Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bold}>Öğrenci: </Text>
          <Text style={styles.normal}>{data.StudentName}</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bold}>Karşılayıcı: </Text>
          <Text style={styles.normal}>{data.ReceiverName}</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bold}>İstenilen Tarih: </Text>
          <Text style={styles.normal}>{data.RequestedDate?.slice(0, 19).replace("T", " ")}</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bold}>Oluşturulma Tarihi: </Text>
          <Text style={styles.normal}>{data.CreatedOn?.slice(0, 19).replace("T", " ")}</Text>
        </View>
        <View style={styles.listItem2}>
          <Text style={styles.bold}>Açıklama</Text>
          <Text style={styles.normal}>{data.Context}</Text>
        </View>
        <View style={{ height: "2.5%" }} />
      </View>
      <View style={styles.btn}>
        <Button
          style={{ fontSize: 20, color: "green" }}
          onPress={() => handleClick()}
          title="İsteği Onayla"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#F1F4F5",
    paddingVertical: "5%",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%"
  },
  listContainer: {
    backgroundColor: "white",
    width: "98%",
    height: "95%",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#0253BD",
    alignItems: "center"
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#D1D4D7",
    padding: "3%",
    width: "90%",
    height: "12.37%"
  },
  listItem2: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#D1D4D7",
    width: "90%",
    height: "19.37%",
    overflow: "scroll"
  },
  bold: {
    fontSize: 16,
    fontWeight: "bold"
  },
  normal: {
    fontSize: 16
  },
  btn: {
    backgroundColor: "#09A2F2",
    alignItems: "center",
    justifyContent: "center",
    width: "85%",
    height: "7%",
    margin: 10
  }
});

export default ChangeRequestDetaill;
