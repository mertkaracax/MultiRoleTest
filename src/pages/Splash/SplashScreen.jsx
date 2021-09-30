/* eslint-disable global-require */
import React, { useEffect, useState } from "react";
import { Text, Image, View, StyleSheet, Animated } from "react-native";
import { useHistory } from "react-router-native";
import OneSignal from "react-native-onesignal";
import { refreshAPPs } from "../../actions/actions";

export default function SplashScreen() {
  const history = useHistory();
  const [opacity, setOp] = useState(0);

  async function opacityUp() {
    setTimeout(() => {
      console.log("loading");
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < 500; i++) {
        setTimeout(() => {
          setOp(i / 500);
          // console.log(i / 100);
        }, 0);
      }
      history.push("/login");
    });
  }

  //   async function opacityDown() {
  //     setTimeout(() => {
  //       console.log("loadingbg");
  //       // eslint-disable-next-line no-plusplus
  //       for (let i = 600; i > 475; i--) {
  //         setTimeout(() => {
  //           setBgOp(i / 600);
  //         }, 0);
  //       }
  //     });
  //   }

  // async function getAppLanguage() {
  //   try {
  //     history.push("/login"); // düz logine göndercek
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  useEffect(async () => {
    await opacityUp();
  }, []);

  useEffect(async () => {
    OneSignal.setAppId("091faeaf-bc4c-4147-978e-4527baa9a2ba"); // old dff4d368-42f8-47bb-8973-954c5e8ac8fd
    console.log("OneSignal is set!\n");
    /*
    OneSignal.getDeviceState().then((state) => {
      console.log("OneSignal Device ID :", state.userId);
      store.dispatch(authAddDevice(state.userId)); // Update deviceId from reducer
    });
    */
    OneSignal.setNotificationWillShowInForegroundHandler((recievedEvent) => {
      refreshAPPs();
      const notif = recievedEvent.getNotification();
      console.log("OneSignal foreground notification:", notif.body);
      setTimeout(() => recievedEvent.complete(notif), 0);
    });

    OneSignal.setInAppMessageClickHandler((clickedEvent) => {
      refreshAPPs();
      console.log("OneSignal message click:", clickedEvent);
    });

    OneSignal.setNotificationOpenedHandler((notifiedEvent) => {
      refreshAPPs();
      const notif = notifiedEvent.getNotification();
      console.log("OneSignal In APP notification:", notif.body);
      setTimeout(() => notifiedEvent.complete(notif), 0);
    });
  }, []);

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
      }}>
      <Image
        opacity={opacity}
        style={styles.img}
        fadeDuration={50}
        source={require("../../assets/delta.jpg")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  img: {
    height: 90,
    width: 335,
    borderWidth: 1,
    borderRadius: 10
  }
});
