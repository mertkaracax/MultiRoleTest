import {
  RECEIVABLE_STUDENTS_UPDATED,
  ADDED_RECEIVABLE_STUDENTS_UPDATED,
  ADDED_RECEIVABLE_STUDENTS_CREATED,
  RECEIVABLE_STUDENT_CHANGED
} from "../types";

const initialState = {
  receivableStudents: [],
  addedReceivableStudents: [],
  receivableStudentsVersion: 0
};

const security = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVABLE_STUDENTS_UPDATED: {
      return { ...state, receivableStudents: action.payload };
    }
    case ADDED_RECEIVABLE_STUDENTS_UPDATED: {
      state.addedReceivableStudents.push(action.payload);
      return { ...state };
    }
    case ADDED_RECEIVABLE_STUDENTS_CREATED: {
      return { ...state, addedReceivableStudents: action.payload };
    }
    case RECEIVABLE_STUDENT_CHANGED: {
      return { ...state, receivableStudentsVersion: state.receivableStudentsVersion + 1 };
    }
    default:
      return state;
  }
};

export default security;
