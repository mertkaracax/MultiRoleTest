import { useEffect } from "react";
import { BackHandler, Alert } from "react-native";

export default function BackHandlerExit() {
  useEffect(() => {
    const backAction = () => {
      Alert.alert("Çıkış", "Uygulamadan çıkmak istediğinize emin misiniz?", [
        {
          text: "İptal",
          onPress: () => null
        },
        { text: "Evet", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);

    return () => backHandler.remove();
  }, []);
}
