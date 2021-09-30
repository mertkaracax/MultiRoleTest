import React, { useEffect } from "react";
import { StyleSheet, TouchableOpacity, View, Image, Text, BackHandler } from "react-native";
import { useHistory } from "react-router-native";
import { useLocation } from "react-router";
import BackHandlerExit from "../../Helpers/RouteMethods";

const CompanyStaffHome = () => {
  const history = useHistory();
  const location = useLocation();

  const backToHome = () => {
    history.push("/roleManagement");
    return true;
  };
  useEffect(async () => {
    const backHandler = BackHandler.addEventListener("hardwareBackPress", backToHome);

    return () => backHandler.remove();
  }, []);

  return (
    <View style={styles.mainView}>
      <View style={styles.halfView}>
        <TouchableOpacity
          style={styles.menuItems}
          onPress={() => {
            history.push("/schoolInfo");
          }}>
          <Image style={styles.icons} source={require("../../assets/CompanyStaff/school.png")} />
          <Text style={{ color: "#548FB3", marginTop: "10%", fontSize: 15 }}>Okul Bilgisi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItems} onPress={() => history.push("/serviceList")}>
          <Image
            style={styles.icons}
            source={require("../../assets/CompanyStaff/school-bus.png")}
          />
          <Text style={{ color: "#548FB3", marginTop: "10%", fontSize: 15 }}>Servisler</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItems}
          onPress={() => {
            history.push("/hostessList");
          }}>
          <Image style={styles.icons} source={require("../../assets/CompanyStaff/hostess.png")} />
          <Text style={{ color: "#548FB3", marginTop: "10%", fontSize: 15 }}>Hostesler</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.halfView}>
        <TouchableOpacity
          style={styles.menuItems}
          onPress={() => {
            history.push("/studentList");
          }}>
          <Image style={styles.icons} source={require("../../assets/CompanyStaff/students.png")} />
          <Text style={{ color: "#548FB3", marginTop: "10%", fontSize: 15 }}>Öğrenciler</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItems}
          onPress={() => {
            history.push("/changeRequests");
          }}>
          <Image style={styles.icons} source={require("../../assets/SchoolStaff/exchange.png")} />
          <Text style={{ color: "#548FB3", marginTop: "10%", fontSize: 15 }}>
            Değişiklik Talepleri
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItems}
          onPress={() => {
            history.push("/driverList");
          }}>
          <Image style={styles.icons} source={require("../../assets/CompanyStaff/driver.png")} />
          <Text style={{ color: "#548FB3", marginTop: "10%", fontSize: 15 }}>Sürücüler</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    flexDirection: "row",
    backgroundColor: "white"
  },
  halfView: {
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    height: "100%"
  },
  menuItems: {
    elevation: 5,
    borderRadius: 5,
    width: "95%",
    height: "31%",
    alignItems: "center",
    justifyContent: "center",
    margin: "2%",
    borderWidth: 1,
    borderColor: "#ACBCC7",
    backgroundColor: "#EDF2F6"
  },
  icons: {
    width: 80,
    height: 80
  }
});

export default CompanyStaffHome;
