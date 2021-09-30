import { StyleSheet, View, BackHandler } from "react-native";
import { Text, TouchableOpacity } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-native";
import api from "../../api";
import MapView, { Marker } from "react-native-maps";
import { useLocation } from "react-router";

const RequestMap = () => {
  const history = useHistory();
  const location = useLocation();
  let coordinates = location.state.locationObject;
  let request = location.state.request;

  const backToHome = () => {
    history.goBack();
    return true;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener("hardwareBackPress", backToHome);
    return () => backHandler.remove();
  }, []);
  useEffect(() => {
    console.log("RequestMap Screen");
    console.log("coordinates => ", coordinates);
    console.log("request came => ", JSON.stringify(request));
  }, []);

  return (
    <View style={styles.BackView}>
      <MapView
        onPress={(e) => {
          console.log(e.nativeEvent.coordinate);
        }}
        showsScale={true}
        showsMyLocationButton={true}
        showsTraffic={false}
        showsUserLocation={true}
        followsUserLocation={false}
        userLocationAnnotationTitle="you are here"
        style={styles.map}
        zoomControlEnabled={true}
        initialRegion={{
          latitude: coordinates.latitude,
          longitude: coordinates.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}>
        <Marker
          coordinate={{ latitude: coordinates.latitude, longitude: coordinates.longitude }}
          pinColor="green"
          title={"Durak"}
          description={"Talep edilen durak"}></Marker>
      </MapView>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() =>
            api.replyRequest(
              request.ChangeRequestId,
              null,
              -1, //routeId
              true
            )
          }>
          <Text style={{ color: "white", fontSize: 17, fontWeight: "bold" }}>REDDET</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn2}
          onPress={() =>
            api.replyRequest(
              request.ChangeRequestId,
              {
                Address: "string",
                Latitude: coordinates.latitude,
                Longitude: coordinates.longitude
              },
              1, //routeId
              false
            )
          }>
          <Text style={{ color: "white", fontSize: 17, fontWeight: "bold" }}>ONAYLA</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn3}
          onPress={() =>
            history.push("/offerNewStop", { coordinates: coordinates, request: request })
          }>
          <Text style={{ color: "white", fontSize: 17, fontWeight: "bold" }}>YENİ DURAK</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  BackView: {
    height: "100%",
    width: "100%"
  },
  map: {
    height: "92%",
    width: "100%"
  },
  btn: {
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    width: "33.3%"
  },
  btn2: {
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    width: "33.33%"
  },
  btn3: {
    backgroundColor: "#0E68AD",
    alignItems: "center",
    justifyContent: "center",
    width: "33.33%"
  },
  btnContainer: {
    height: "8%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center"
  }
});

export default RequestMap;
