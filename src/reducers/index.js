import { combineReducers } from "redux";

import auth from "./auth";
import kome from "./kome";
import message from "./message";

const allReducers = combineReducers({
  auth,
  kome,
  message,
});

export default allReducers;
