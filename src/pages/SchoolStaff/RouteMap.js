import { StyleSheet, View, Image, BackHandler, Text } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-native";
import MapView, { Marker } from "react-native-maps";

import { useLocation } from "react-router";

const RouteMapp = () => {
  const history = useHistory();
  const location = useLocation();
  const markers = location.state.list;
  console.log(markers);

  const backToHome = () => {
    history.goBack();
    return true;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener("hardwareBackPress", backToHome);
    return () => backHandler.remove();
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
          latitude: markers[0].latitude,
          longitude: markers[0].longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}>
        {markers.map((marker, index) => (
          <View key={index}>
            <MapView.Marker
              coordinate={{ longitude: marker.longitude, latitude: marker.latitude }}
              title={marker.description}
              description={marker.description}
              key={index + markers.length + 3}
            />
            <MapView.Marker
              coordinate={{ longitude: marker.longitude, latitude: marker.latitude }}
              title={marker.description}
              description={marker.description}
              style={{ height: 70 }}
              key={index + 2 * markers.length + 3}>
              <View
                style={{
                  height: 30,
                  width: 30,
                  borderRadius: 50,
                  backgroundColor: "black",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                <Text
                  style={{ top: 0, zIndex: 2, fontSize: 16, color: "white", fontWeight: "bold" }}>
                  {index + 1}
                </Text>
              </View>
            </MapView.Marker>
          </View>
        ))}
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

export default RouteMapp;
