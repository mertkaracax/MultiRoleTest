/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-native";
import { Text, StyleSheet, View, TextInput, TouchableOpacity, BackHandler } from "react-native";
import api from "../../api";
import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button/Button";
import { addStudentAsync } from "../../store/asyncStorage/securityActions";

export default function AddStudentModal({ modalVisible = false, setModalVisible }) {
  const [searchText, setSearchText] = useState("");
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState();

  const handleSubmit = () => {
    if (searchText.length >= 1 && searchText[0] !== " ")
      api.searchStudent(searchText).then((response) => setStudents(response || []));
  };

  const handleStudentClick = (student) => {
    setSelectedStudent(student);
    setAddModalVisible(true);
  };

  const handleOK = () => {
    addStudentAsync(selectedStudent);
    setAddModalVisible(false);
    setModalVisible(false);
  };

  return (
    <Modal open={modalVisible} setOpen={setModalVisible} scrollView>
      <View style={styles.searchBar}>
        <Text>search: </Text>
        <TextInput
          style={styles.textInput}
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
          onSubmitEditing={() => handleSubmit()}
        />
      </View>

      {students.map((student, index) => (
        <View style={styles.studentCard} key={index}>
          <TouchableOpacity onPress={() => handleStudentClick(student)}>
            <Text>
              {student.Name} {student.Surname}
            </Text>
          </TouchableOpacity>
        </View>
      ))}

      <Modal
        open={addModalVisible}
        setOpen={setAddModalVisible}
        header={false}
        customStyle={{ width: "90%", height: "30%" }}>
        <View style={styles.confirmModal}>
          <Text style={{ fontSize: 20 }}>addModalText</Text>
          <View style={styles.buttonGroup}>
            <Button type="text" onClick={() => setAddModalVisible(false)}>
              <Text style={{ fontWeight: "bold", fontSize: 22 }}>cancel</Text>
            </Button>
            <Button type="text" onClick={() => handleOK()}>
              <Text style={{ fontWeight: "bold", fontSize: 22 }}>ok</Text>
            </Button>
          </View>
        </View>
      </Modal>
    </Modal>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    borderBottomWidth: 1
  },
  studentCard: {
    borderBottomWidth: 0.7,
    borderColor: "gray",
    padding: 16
  },
  textInput: {
    borderColor: "gray",
    flex: 1
  },
  confirmModal: {
    padding: 10,
    paddingTop: 20,
    flex: 1,
    alignItems: "center"
  },
  buttonGroup: {
    flex: 1,
    flexDirection: "row",
    position: "absolute",
    bottom: 20,
    right: 20
  }
});
