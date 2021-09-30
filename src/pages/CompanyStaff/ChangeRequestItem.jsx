import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, Image, View, ActivityIndicator } from "react-native";
import { useHistory } from "react-router-native";
import api from "../../api";

const ChangeRequestItem = ({ item }) => {
  const history = useHistory();
  const [data, setData] = useState("");
  const [isRead, setRead] = useState(true);
  useEffect(async () => {
    if (!item.IsRead) {
      setRead(false);
    } else {
    }
    setTimeout(() => {
      api.getChangeRequestDetail(item.ChangeRequestId).then((output) => {
        setData(output);
      });
    }, 3000);
  }, []);

  return (
    <TouchableOpacity
      style={styles.view}
      onPress={() => history.push("/requestDetail", { object: item })}>
      <View style={styles.container}>
        <Image style={styles.avatar} source={require("../../assets/SchoolStaff/exchange.png")} />
        <View style={styles.textContainer}>
          {isRead ? (
            <View>
              <Text style={styles.text}>
                İstenen Tarih: {item.RequestDate?.slice(0, 19).replace("T", " ")}
              </Text>
              <Text style={styles.text}>
                Oluşturulma Tarihi: {item.CreatedDate?.slice(0, 19).replace("T", " ")}
              </Text>
              {/* <Text style={styles.text}>Talep: {data.Title}</Text> */}
            </View>
          ) : (
            <View>
              <Text style={styles.text2}>
                İstenen Tarih: {item.RequestDate?.slice(0, 19).replace("T", " ")}
              </Text>
              <Text style={styles.text2}>
                Oluşturulma Tarihi: {item.CreatedDate?.slice(0, 19).replace("T", " ")}
              </Text>
              {/* <Text style={styles.text2}>Talep: {data.Title}</Text> */}
            </View>
          )}
        </View>
      </View>
      <Image style={styles.icon} source={require("../../assets/CompanyStaff/right-angle.png")} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#EDF2F6",
    alignSelf: "center",
    width: "96%",
    height: 90,
    borderRadius: 4,
    padding: 5,
    paddingRight: 10,
    margin: 3,
    elevation: 4
  },
  container: {
    paddingLeft: 5,
    alignItems: "center",
    flexDirection: "row",
    height: "100%",
    width: "70%"
  },
  text: {
    fontWeight: "normal",
    fontSize: 14,
    color: "black"
  },
  text2: {
    fontWeight: "bold",
    fontSize: 14,
    color: "black"
  },

  avatar: {
    borderWidth: 1,
    borderRadius: 5,
    height: 50,
    width: 50,
    marginRight: 15
  },
  icon: {
    height: 30,
    width: 30,
    marginRight: 5
  },
  textContainer: {
    flexDirection: "column"
  },
  indicator: {
    position: "relative",
    top: "25%",
    height: 1
  }
});
export default React.memo(ChangeRequestItem);
