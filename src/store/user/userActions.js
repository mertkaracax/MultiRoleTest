import { roles as roleENUM } from "../../enums/roles";
import { LOGIN_SUCCESS, ROLE_UPDATED } from "../types";
import store from "..";
import { isSecurity } from "../../actions/actions";
import { getStudentAsync } from "../asyncStorage/securityActions";
import { createAddedReceivableStudent } from "../security/securityActions";

export const requestLogin = (data) => {
  const { dispatch } = store;

  dispatch({ type: LOGIN_SUCCESS, payload: data.token });

  const r = [];
  const roles = data.roles ? data.roles.split(",") : [];

  roles.forEach((role) => {
    r.push(roleENUM[role]);
  });
  dispatch({ type: ROLE_UPDATED, payload: r });
};

export const requestAsyncData = async () => {
  if (isSecurity()) {
    const students = await getStudentAsync();
    createAddedReceivableStudent(students);
  }
};
//
