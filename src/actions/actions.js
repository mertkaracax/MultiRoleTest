import { REACT_APP_TYPE } from "@env";
import store from "../store";
import { renderReceivableStudens } from "../store/security/securityActions";

export const refreshAPPs = () => {
  if (isSecurity()) {
    renderReceivableStudens();
  }
};

export const isSecurity = () => {
  const { roles } = store.getState().user;
  return "10" in roles || REACT_APP_TYPE === "SECURITY";
};

//+
export const isCompanyStuff = () => {
  const { roles } = store.getState().user;
  return "9" in roles || REACT_APP_TYPE === "COMPANY_STAFF";
};

export const isSchoolStaff = () => {
  const { roles } = store.getState().user;
  return "8" in roles || REACT_APP_TYPE === "SCHOOL_STAFF";
};
