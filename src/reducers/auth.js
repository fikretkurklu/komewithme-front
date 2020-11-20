import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../actions/types";

const username = localStorage.getItem("username");
const token = localStorage.getItem("token");
const expirationTime = localStorage.getItem("expirationTime");

let isTokenValid = false;

if (expirationTime) {
  if (new Date().getTime() < expirationTime) {
    isTokenValid = true;
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
  }
}

const initialState = isTokenValid
  ? { isLoggedIn: true, user: { username, token, expirationTime } }
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
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: false,
      };
    default:
      return state;
  }
};

export default authReducer;
