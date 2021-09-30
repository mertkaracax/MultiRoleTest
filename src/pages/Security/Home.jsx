/* eslint-disable react/no-array-index-key */
import React, { useCallback, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  BackHandler
} from "react-native";
import { useSelector } from "react-redux";

import { useHistory } from "react-router-native";
import FabButton from "../../components/Button/Fab";
import theme from "../../assets/theme";
import SelectStudentModal from "./SelectStudentModal";
import AddStudentModal from "./AddStudentModal";
import { getReceivableStudents } from "../../actions/securityActions";
import { renderReceivableStudens } from "../../store/security/securityActions";
import BackHandlerExit from "../../Helpers/RouteMethods";

const listStudents = (students, setModal, setStudentId) => {
  const history = useHistory();

  const backToHome = () => {
    history.push("/roleManagement");
    return true;
  };
  useEffect(async () => {
    const backHandler = BackHandler.addEventListener("hardwareBackPress", backToHome);

    return () => backHandler.remove();
  }, []);

  return (
    <ScrollView style={{ width: "94%" }}>
      {Array.isArray(students) &&
        students.map((student, index) => (
          <TouchableOpacity
            key={index}
            style={styles.studentCard}
            disabled={student?.IsReceived}
            onPress={() => {
              setModal(true);
              setStudentId(student.Id);
            }}>
            <Image style={styles.studentImage} source={{ uri: student?.Avatar.Contents }} />
            <Text style={styles.studentName}>
              {student.Name} {student.Surname}
            </Text>
            <Text style={student?.IsReceived ? styles.receivedStudent : styles.notReceivedStudent}>
              {student?.IsReceived ? "IsReceived" : "notReceived"}
            </Text>
          </TouchableOpacity>
        ))}
    </ScrollView>
  );
};

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default function SecurityHome() {
  const [plusModalVisible, setPlusModalVisible] = useState(false);
  const [selectModalVisible, setSelectModalVisible] = useState(false);
  const [studentId, setStudentId] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const {
    receivableStudents = [],
    receivableStudentsVersion,
    addedReceivableStudents = []
  } = useSelector((state) => state.security);

  useEffect(() => {
    getReceivableStudents();
  }, [receivableStudentsVersion]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    renderReceivableStudens();
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const k = receivableStudents && receivableStudents.find((student) => student.Id === studentId);
  const receivers = k ? k.Receivers : [];

  const resultReceivableStudents = receivableStudents.length; /// //////////////////////// tries
  console.log(`receivable students length is ${resultReceivableStudents}`);

  const resutlAddedReceivableStudents = addedReceivableStudents.length;
  console.log(`added receivable students length is ${resutlAddedReceivableStudents}`); /// ////////////////////////// tries

  const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
  const months = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık"
  ];

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
      <Text style={styles.title}> securityGuard: Pınar Bultan</Text>
      <View style={styles.dateView}>
        <Text>today</Text>
        <Text>
          {`${new Date().getDate()} ${months[new Date().getMonth()]} ${new Date().getFullYear()}`}
        </Text>
        <Text>{days[new Date().getDay()]} </Text>
      </View>

      {listStudents(
        receivableStudents?.concat(addedReceivableStudents),
        setSelectModalVisible,
        setStudentId
      )}

      <SelectStudentModal
        modalVisible={selectModalVisible}
        setModalVisible={setSelectModalVisible}
        receivers={receivers}
        studentId={studentId}
      />

      <AddStudentModal modalVisible={plusModalVisible} setModalVisible={setPlusModalVisible} />

      <View style={styles.addButton}>
        <FabButton handleClick={() => setPlusModalVisible(true)} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    zIndex: 0
  },
  title: {
    marginBottom: 16,
    color: "red",
    fontSize: 18
  },
  dateView: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    marginBottom: 8,
    width: "90%",
    height: 60,
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: theme.PRIMARY_COLOR
  },
  studentCard: {
    flexDirection: "row",
    width: "94%",
    height: 72,
    margin: 8,
    borderWidth: 1,
    borderColor: theme.PRIMARY_COLOR,
    borderRadius: 4,
    padding: 8,
    backgroundColor: theme.WHITE
  },
  studentImage: { height: 48, width: 48, alignSelf: "center", borderRadius: 24, marginLeft: 8 },
  studentName: {
    fontWeight: "700",
    marginLeft: 12
  },
  receivedStudent: {
    fontWeight: "700",
    color: "green",
    position: "absolute",
    end: 8,
    top: 8
  },
  notReceivedStudent: {
    fontWeight: "700",
    color: "red",
    position: "absolute",
    end: 8,
    top: 8
  },
  addButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    margin: 16
  }
});
