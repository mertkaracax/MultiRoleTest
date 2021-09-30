// import MapView, { Marker } from "react-native-maps";

import { StyleSheet, View, SearchBar, BackHandler, mapStyle } from "react-native";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-native";
import MapView, { Marker } from "react-native-maps";
import { useLocation } from "react-router";

const MapPagee = () => {
  const history = useHistory();
  const location = useLocation();
  const { latitude } = location.state;
  const { longitude } = location.state;

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
        showsScale
        showsMyLocationButton
        showsTraffic={false}
        showsUserLocation
        followsUserLocation={false}
        userLocationAnnotationTitle="you are here"
        style={styles.map}
        zoomControlEnabled
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}>
        <Marker
          coordinate={{ latitude, longitude }}
          pinColor="red"
          title="Okul"
          description="Okul adı"
        />
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

export default MapPagee;
