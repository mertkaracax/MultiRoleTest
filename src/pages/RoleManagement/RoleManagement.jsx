import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-native";
import { useLocation } from "react-router";
import { SchoolStaff, CompanyStaff, Hostess, Parent, Security } from "./Roles";
import BackHandlerExit from "../../Helpers/RouteMethods";

export default function RoleManagementScreen() {
  const { roles } = useSelector((state) => state.user);
  const history = useHistory();

  BackHandlerExit();
  /// ///////////////////
  // eğer mutlirole ise uygulamalardan geriye gelince bu ekrana gelecek, eğer uygulama stand-alone ise uygulamadan çıkış yapılsın mı ekranı gelcek.
  /// ////////////////
  const handleChange = (role) => {
    history.push(role);
  };

  return (
    <View style={styles.container}>
      {roles.includes("Hostess") && <Hostess onClick={handleChange} />}
      {roles.includes("Parent") && <Parent onClick={handleChange} />}
      {roles.includes("School Staff") && <SchoolStaff onClick={handleChange} />}
      {roles.includes("Company Staff") && <CompanyStaff onClick={handleChange} />}
      {roles.includes("Security") && <Security onClick={handleChange} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",

    paddingHorizontal: 32,
    backgroundColor: "white"

  }
});
