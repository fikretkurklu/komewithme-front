import { combineReducers } from "redux";

import auth from "./auth";
import kome from "./kome";

const allReducers = combineReducers({
  auth,
  kome,
});

export default allReducers;
