import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../actions/types";

const username = localStorage.getItem("username");
const token = localStorage.getItem("token");

const initialState = token
  ? { isLoggedIn: true, user: { username, token } }
  : { isLoggedIn: false, user: null };

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default authReducer;
