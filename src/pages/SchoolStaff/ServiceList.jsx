import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, BackHandler, View, ActivityIndicator } from "react-native";

import { useHistory } from "react-router-native";
import moment from "moment";
import ServiceItemm from "./ServiceItem";
// import { getBuses } from "../../actions/companyStaffActions";
import getSchoolBusesInfo from "../../actions/schoolStaffActions";
import api from "../../api";

const ServiceListt = () => {
  const history = useHistory();
  const [buses, setBuses] = useState([]);
  const [loading, setLoad] = useState(1);
  const currentDate = moment().utcOffset("+00:00").format("YYYY-MM-DD hh:mm:ss ");

  const backToHome = () => {
    history.push("/schoolStaffHome");
    return true;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener("hardwareBackPress", backToHome);

    return () => backHandler.remove();
  }, []);
  useEffect(async () => {
    {
      api.getSchoolBusesInfo(currentDate).then((output) => {
        console.log(`Buses: ${JSON.stringify(output)}`);
        setBuses(output);
        setLoad(0);
      });
    }
  }, []);

  return (
    <View style={styles.body}>
      <ActivityIndicator opacity={loading} style={styles.indicator} size="large" color="#0000ff" />
      <FlatList
        style={styles.flatlist}
        data={buses}
        renderItem={({ item }) => <ServiceItemm item={item} />}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    height: "100%",
    width: "100%",
    backgroundColor: "#F1F4F5"
  },

  indicator: {
    top: "50%"
  }
});

export default ServiceListt;
