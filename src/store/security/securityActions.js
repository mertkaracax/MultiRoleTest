import {
  RECEIVABLE_STUDENTS_UPDATED,
  ADDED_RECEIVABLE_STUDENTS_UPDATED,
  ADDED_RECEIVABLE_STUDENTS_CREATED,
  RECEIVABLE_STUDENT_CHANGED
} from "../types";
import store from "..";

const { dispatch } = store;

export const updateReceivableStudents = (data) => {
  dispatch({ type: RECEIVABLE_STUDENTS_UPDATED, payload: data });
};

export const renderReceivableStudens = () => {
  dispatch({ type: RECEIVABLE_STUDENT_CHANGED });
};

export const addAddedReceivableStudent = (data) => {
  dispatch({ type: ADDED_RECEIVABLE_STUDENTS_UPDATED, payload: data });
};

export const createAddedReceivableStudent = (data) => {
  dispatch({ type: ADDED_RECEIVABLE_STUDENTS_CREATED, payload: data });
};
