import api from "../api";
import { loadAsyncData } from "../store/asyncStorage/actions";
import { saveStudentAsync } from "../store/asyncStorage/securityActions";
import {
  createAddedReceivableStudent,
  updateReceivableStudents
} from "../store/security/securityActions";

export const getReceivableStudents = () => {
  api.getReciveableStudents().then((response) => {
    updateReceivableStudents(response);
  });
};

export const setStudentReceived = async (studentId) => {
  let students = await loadAsyncData("addedStudents");
  students = JSON.parse(students);
  const newStudents = students.map((student) => {
    if (student[1]?.Id === studentId) {
      return [student[0], { ...student[1], IsReceived: true }];
    }
    return student;
  });
  saveStudentAsync(newStudents);
  createAddedReceivableStudent(newStudents.map((student) => student[1]));
};
