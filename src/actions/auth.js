import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./types";

import AuthService from "../services/auth.service";

export const register = (username, email, password) => (dispatch) => {
  return AuthService.register(username, email, password).then(
    (response) => {
      dispatch({ type: REGISTER_SUCCESS });

      return Promise.resolve();
    },
    (error) => {
      dispatch({ type: REGISTER_FAIL });

      return Promise.reject();
    }
  );
};

export const login = (username, password) => (dispatch) => {
  return AuthService.login(username, password).then(
    (response) => {
      dispatch({ type: LOGIN_SUCCESS, payload: { user: response } });
      return Promise.resolve();
    },
    (error) => {
      dispatch({ type: LOGIN_FAIL });
      return Promise.reject();
    }
  );
};

export const logout = () => (dispatch) => {
  AuthService.logout();

  dispatch({ type: LOGOUT });
};
