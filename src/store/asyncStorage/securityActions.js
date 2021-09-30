import store from "..";
import { addAddedReceivableStudent } from "../security/securityActions";
import { loadAsyncData, saveAsyncData } from "./actions";

export const addStudentAsync = async (student) => {
  const { receivableStudents } = store.getState().security;
  let students = await loadAsyncData("addedStudents");
  students = JSON.parse(students);
  students = checkStudents(students);
  if (
    !students.find((s) => s[1]?.Id === student.Id) &&
    !receivableStudents.find((s) => s.Id === student.Id)
  ) {
    addAddedReceivableStudent(student);
    const tempStudent = [new Date().getDate(), student];
    students.push(tempStudent);
  }

  await saveAsyncData("addedStudents", JSON.stringify(students));
};

export const getStudentAsync = async () => {
  let students = await loadAsyncData("addedStudents");
  students = JSON.parse(students);
  students = checkStudents(students);
  return students.map((student) => student[1]);
};

export const checkStudents = (students = []) => {
  if (!Array.isArray(students)) return [];
  return students.filter((student) => student[0] === new Date().getDate());
};

export const saveStudentAsync = async (students) => {
  await saveAsyncData("addedStudents", JSON.stringify(students));
};
