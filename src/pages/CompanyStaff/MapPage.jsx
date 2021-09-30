import { StyleSheet, View, Image, BackHandler } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-native";
import MapView, { Marker } from "react-native-maps";

import { useLocation } from "react-router";

const MapPage = () => {
  const history = useHistory();
  const location = useLocation();
  let latitude = location.state.latitude;
  let longitude = location.state.longitude;

  const backToHome = () => {
    history.push("/schoolInfo");
    return true;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener("hardwareBackPress", backToHome);
    return () => backHandler.remove();
  }, []);
  useEffect(() => {
    console.log("yeter artık");
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
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}>
        <Marker
          coordinate={{ latitude: latitude, longitude: longitude }}
          pinColor="red"
          title={"Okul"}
          description={"Okul adı"}></Marker>
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  BackView: {
    flex: 1
  },
  map: {
    flex: 1
  }
});

export default MapPage;
