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

export const SchoolInformation = ({ onClick }) => {
  return (
    <TouchableOpacity>
      <View style={styles.role}>
        <Image style={styles.image} source={require("../../assets/SchoolStaff/school.png")} />
        <Text style={{ marginTop: 15, fontSize: 16 }}>Okul Bilgileri</Text>
      </View>
    </TouchableOpacity>
  );
};

/*
export const CompanyStaff = ({ onClick }) => {
  return (
    <TouchableOpacity onPress={() => onClick("/companystaff")}>
      <View style={styles.role}>
        <Image style={styles.image} source={require("../../assets/company-staff.png")} />
        <Text style={{ marginTop: 15, fontSize: 16 }}>Company Staff</Text>
      </View>
    </TouchableOpacity>
  );
};

export const Hostess = ({ onClick }) => {
  return (
    <TouchableOpacity onPress={() => onClick("/hostess")}>
      <View style={styles.role}>
        <Image style={styles.image} source={require("../../assets/hostess.jpg")} />
        <Text style={{ marginTop: 15, fontSize: 16 }}>Hostess</Text>
      </View>
    </TouchableOpacity>
  );
};

export const Parent = ({ onClick }) => {
  return (
    <TouchableOpacity onPress={() => onClick("/parent")}>
      <View style={styles.role}>
        <Image style={styles.image} source={require("../../assets/parent.png")} />
        <Text style={{ marginTop: 15, fontSize: 16 }}>Parent</Text>
      </View>
    </TouchableOpacity>
  );
};
export const Security = ({ onClick }) => {
  return (
    <TouchableOpacity onPress={() => onClick("/security")}>
      <View style={styles.role}>
        <Image style={styles.image} source={require("../../assets/security.png")} />
        <Text style={{ marginTop: 15, fontSize: 16 }}>Security</Text>
      </View>
    </TouchableOpacity>
  );
};
*/
