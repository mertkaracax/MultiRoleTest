import { createStore, combineReducers } from "redux";

import user from "./user";
import security from "./security";

const reducers = combineReducers({
  user,
  security
});

export default createStore(reducers);
