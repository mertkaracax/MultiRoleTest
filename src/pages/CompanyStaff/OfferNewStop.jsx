import { StyleSheet, View, BackHandler, Button } from "react-native";
import { Text, TouchableOpacity } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-native";
import api from "../../api";
import MapView, { Marker } from "react-native-maps";
import { useLocation } from "react-router";

const ReplyNewStop = () => {
  const history = useHistory();
  const location = useLocation();
  const coordinates = location.state.coordinates;
  const request = location.state.request;
  const [onPressLocation, setOnPressLocation] = useState({ latitude: 0, longitude: 0 });
  const [markers, setMarkers] = useState([{ latitude: 0, longitude: 0 }]);

  const backToHome = () => {
    history.goBack();
    return true;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener("hardwareBackPress", backToHome);
    return () => backHandler.remove();
  }, []);
  useEffect(async () => {
    console.log("REPLY NEW STOP");
    console.log(coordinates);
    await api.getDefaultStops(1, 2).then((output) => {
      console.log(output);
      let array = output.Stops;
      let markerList = [];
      array.forEach((item) => {
        let obj = { latitude: item.Location.Latitude, longitude: item.Location.Longitude };
        markerList.push(obj);
      });
      setMarkers(markerList);
    });
  }, []);

  return (
    <View style={styles.BackView}>
      <MapView
        onPress={(e) => {
          console.log(e.nativeEvent.coordinate);
          setOnPressLocation(e.nativeEvent.coordinate);
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
          description={"Talep edilen durak"}
          onPress={(a) => {
            setOnPressLocation(a.nativeEvent.coordinate);
          }}></Marker>
        {markers.map((marker, index) => (
          <View key={index}>
            <MapView.Marker
              coordinate={{ longitude: marker.longitude, latitude: marker.latitude }}
              title={marker.description}
              description={marker.description}
              key={index + markers.length + 3}
              onPress={(a) => {
                setOnPressLocation(a.nativeEvent.coordinate);
              }}></MapView.Marker>
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
      <View style={{ height: "4%", width: "100%", alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 12 }}>
          Enlem: {onPressLocation.latitude} {"       "}Boylam: {onPressLocation.longitude}
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() =>
            api.replyRequest(
              request.ChangeRequestId,
              {
                Address: " ",
                Latitude: onPressLocation.latitude,
                Longitude: onPressLocation.longitude
              },
              1,
              false
            )
          }>
          <Text style={{ color: "white", fontSize: 17, fontWeight: "bold" }}>ONAYLA</Text>
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
    height: "88.5%",
    width: "100%"
  },
  btn: {
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%"
  },
  btnContainer: {
    height: "7.5%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default ReplyNewStop;
