import { LOGIN_SUCCESS, ROLE_UPDATED } from "../types";

const initialState = {
  token: "",
  roles: []
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return { ...state, token: action.payload };
    }
    case ROLE_UPDATED: {
      return { ...state, roles: action.payload };
    }
    default:
      return state;
  }
};

export default user;
