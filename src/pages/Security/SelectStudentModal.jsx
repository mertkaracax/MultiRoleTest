import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-native";
import { Text, StyleSheet, TouchableOpacity, View, BackHandler } from "react-native";
import { setStudentReceived } from "../../actions/securityActions";
import api from "../../api";
import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";
import { renderReceivableStudens } from "../../store/security/securityActions";

export default function SelectStudentModal({
  modalVisible = false,
  setModalVisible,
  receivers,
  studentId = 0
}) {
  const [selected, setSelected] = useState(0);

  const handleClick = () => {
    const recipientId = selected >= receivers.length ? -1 : receivers[selected].Id;
    api.deliverStudent(studentId, recipientId).then(() => {
      setStudentReceived(studentId);
      setModalVisible(false);
      renderReceivableStudens();
    });
  };

  return (
    <Modal open={modalVisible} setOpen={setModalVisible}>
      {receivers.map((receiver, index) => (
        <TouchableOpacity
          key={receiver.Id}
          style={selected === index ? styles.selectedReceiverCard : styles.receiverCard}
          onPress={() => setSelected(index)}>
          <Text>
            {receiver.Name} {receiver.Surname} {receiver.IsParent && "(Veli)"}
          </Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        style={selected === receivers.length ? styles.selectedReceiverCard : styles.receiverCard}
        onPress={() => setSelected(receivers.length)}>
        <Text>selectStudentText</Text>
      </TouchableOpacity>

      <View style={styles.buttons}>
        <Button type="text" onClick={() => setModalVisible(false)}>
          cancel
        </Button>

        <Button style={{ marginLeft: 12 }} onClick={() => handleClick()}>
          ok
        </Button>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  receiverCard: {
    borderBottomWidth: 0.7,
    borderColor: "gray",
    padding: 24
  },
  selectedReceiverCard: {
    borderBottomWidth: 0.7,
    borderColor: "gray",
    backgroundColor: "rgba(66, 135, 245, 0.5)",
    padding: 24
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 18
  }
});
