import React, { useEffect } from "react";
import { StyleSheet, TouchableOpacity, View, Image, BackHandler } from "react-native";
import { useHistory } from "react-router-native";

// import { getSchools } from "../../actions/companyStaffActions";

const SchoolStaffHome = () => {
  const history = useHistory();

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
            history.push("/schoolInfoo");
          }}>
          <Image style={styles.icons} source={require("../../assets/SchoolStaff/school.png")} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItems} onPress={() => history.push("/serviceListt")}>
          <Image style={styles.icons} source={require("../../assets/SchoolStaff/school-bus.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.halfView}>
        <TouchableOpacity
          style={styles.menuItems}
          onPress={() => {
            history.push("/studentListt");
          }}>
          <Image style={styles.icons} source={require("../../assets/SchoolStaff/student.png")} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItems}
          onPress={() => {
            history.push("/changeRequestss");
          }}>
          <Image style={styles.icons} source={require("../../assets/SchoolStaff/exchange.png")} />
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
    padding: 0,
    flexDirection: "row"
  },
  halfView: {
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    height: "100%"
  },
  menuItems: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "black",
    width: "90%",
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
    margin: 6
  },
  icons: {
    width: 120,
    height: 120
  }
});

export default SchoolStaffHome;
