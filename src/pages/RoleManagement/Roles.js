/* eslint-disable global-require */
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  role: {
    alignItems: "center",
    padding: 8
  },
  image: {
    borderWidth: 0.5,
    borderColor: "gray",
    height: 112,
    width: 112
  }
});

export const SchoolStaff = ({ onClick }) => {
  return (
    <TouchableOpacity onPress={() => onClick("/schoolstaff")}>
      <View style={styles.role}>
        <Image style={styles.image} source={require("../../assets/school-staff.png")} />
        <Text style={{ marginTop: 15, fontSize: 16 }}>schoolStaff</Text>
      </View>
    </TouchableOpacity>
  );
};

export const CompanyStaff = ({ onClick }) => {
  return (
    <TouchableOpacity onPress={() => onClick("/companystaff")}>
      <View style={styles.role}>
        <Image style={styles.image} source={require("../../assets/company-staff.png")} />

        <Text style={{ marginTop: 15, fontSize: 16, color: "white" }}>companystaff</Text>
      </View>
    </TouchableOpacity>
  );
};

export const Hostess = ({ onClick }) => {
  return (
    <TouchableOpacity onPress={() => onClick("/hostess")}>
      <View style={styles.role}>
        <Image style={styles.image} source={require("../../assets/hostess.jpg")} />

        <Text style={{ marginTop: 15, fontSize: 16, color: "white" }}>hostess</Text>
      </View>
    </TouchableOpacity>
  );
};

export const Parent = ({ onClick }) => {
  return (
    <TouchableOpacity onPress={() => onClick("/parent")}>
      <View style={styles.role}>
        <Image style={styles.image} source={require("../../assets/parent.png")} />
        <Text style={{ marginTop: 15, fontSize: 16 }}>parent</Text>
      </View>
    </TouchableOpacity>
  );
};
export const Security = ({ onClick }) => {
  return (
    <TouchableOpacity onPress={() => onClick("/security")}>
      <View style={styles.role}>
        <Image style={styles.image} source={require("../../assets/security.png")} />

        <Text style={{ marginTop: 15, fontSize: 16 }}>security</Text>
      </View>
    </TouchableOpacity>
  );
};
