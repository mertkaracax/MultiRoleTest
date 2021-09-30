import React, { useEffect } from "react";
import { StyleSheet, Text, Image, View, BackHandler, TouchableOpacity } from "react-native";
import { useHistory } from "react-router-native";
import { useLocation } from "react-router";
import { getParent } from "../../actions/companyStaffActions";

const StudentDetail = () => {
  const history = useHistory();
  const location = useLocation();
  const student = location.state.object;

  const backToHome = () => {
    history.push("/studentList");
    return true;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener("hardwareBackPress", backToHome);
    console.log(student);
    return () => backHandler.remove();
  }, []);

  return (
    <View style={styles.body}>
      <Image style={styles.avatar} source={{ uri: student.Avatar.Contents }} />
      <View style={styles.listContainer}>
        <View style={styles.listItem}>
          <Text style={styles.bold}>Adı:</Text>
          <Text style={styles.normal}>{student.Name}</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bold}>Numarası:</Text>
          <Text style={styles.normal}>{student.Number}</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bold}>Sınıfı:</Text>
          <Text style={styles.normal}>{student.ClassName}</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bold}>Velisi:</Text>
          <Text style={styles.normal}>
            {student.Parent.Name} {student.Parent.Surname}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: "white",
    paddingTop: 10,
    alignItems: "center",
    height: "100%",
    width: "100%"
  },
  avatar: {
    width: 180,
    height: 180,
    marginBottom: "5%"
  },
  listContainer: {
    backgroundColor: "white",
    width: "96%",
    height: "65%",
    borderRadius: 4
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#EDF2F6",
    padding: "5%",
    width: "100%",
    height: "24%",
    marginBottom: "1.5%"
  },
  bold: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black"
  },
  normal: {
    fontSize: 18,
    color: "black"
  }
});

export default StudentDetail;
