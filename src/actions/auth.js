import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  ERROR,
  SUCCESS,
  CLEAR,
} from "./types";

import AuthService from "../services/auth.service";

export const register = (username, email, password) => (dispatch) => {
  return AuthService.register(username, email, password).then(
    (response) => {
      let success = {
        name: "account created",
        message: "verification mail sent to your email account",
      };

      dispatch({ type: CLEAR });
      dispatch({ type: REGISTER_SUCCESS });
      dispatch({
        type: SUCCESS,
        payload: { success: success },
      });

      return Promise.resolve();
    },
    (error) => {
      let errors = [];

      if (error.response.data.errors) {
        error.response.data.errors.forEach((element) => {
          errors.push({ name: element.field, message: element.defaultMessage });
        });
      }

      if (error.response.data.error === "Found") {
        errors.push({
          name: error.response.data.error,
          message: error.response.data.message,
        });
      }

      dispatch({ type: CLEAR });
      dispatch({ type: REGISTER_FAIL });
      dispatch({
        type: ERROR,
        payload: { errors: errors },
      });

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
      dispatch({ type: CLEAR });
      dispatch({ type: LOGIN_FAIL });
      dispatch({
        type: ERROR,
        payload: {
          errors: [
            { name: "login failed", message: "username or password wrong" },
          ],
        },
      });
      return Promise.reject();
    }
  );
};

export const logout = () => (dispatch) => {
  AuthService.logout();

  dispatch({ type: LOGOUT });
};
