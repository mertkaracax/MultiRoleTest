import { Linking, Alert } from "react-native";
export const callNumber = (phone) => {
  console.log("callNumber ----> ", phone);
  let phoneNumber = phone;
  if (Platform.OS !== "android") {
    phoneNumber = `telprompt:${phone}`;
  } else {
    phoneNumber = `tel:${phone}`;
  }
  Linking.canOpenURL(phoneNumber)
    .then((supported) => {
      Alert.alert(
        "Arama",
        "Bir arama yapmak için yönlendirileceksiniz. Devam etmek istiyor musunuz?",
        [
          {
            text: "İptal",
            onPress: () => null
          },
          {
            text: "Evet",
            onPress: () => {
              if (!supported) {
                Alert.alert("Hata", "Telefon numarası geçersiz");
              } else {
                return Linking.openURL(phoneNumber);
              }
            }
          }
        ]
      );
      return true;
    })
    .catch((err) => console.log(err));
};
