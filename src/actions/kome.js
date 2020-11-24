import {
  ADD_KOME_SUCCESS,
  ADD_KOME_FAIL,
  UPDATE_KOME_SUCCESS,
  UPDATE_KOME_FAIL,
  GET_ALL_KOME_SUCCESS,
  GET_ALL_KOME_FAIL,
  GET_MY_KOME_FAIL,
  GET_MY_KOME_SUCCESS,
  DELETE_KOME_FAIL,
  DELETE_KOME_SUCCESS,
  PARTICIPATE_KOME_FAIL,
  PARTICIPATE_KOME_SUCCESS,
  ERROR,
  SUCCESS,
  CLEAR,
} from "./types";

import KomeService from "../services/kome.service";

export const add_kome = (name, description) => (dispatch) => {
  return KomeService.add_kome(name, description)
    .then((response) => {
      let success = {
        name: "kome added",
        message: "new kome added successfully",
      };

      dispatch({ type: CLEAR });
      dispatch({ type: ADD_KOME_SUCCESS, payload: { myKomes: response.data } });
      dispatch({
        type: SUCCESS,
        payload: { success: success },
      });
      return Promise.resolve();
    })
    .catch((error) => {
      let errors = [];

      error.response.data.errors.forEach((element) => {
        errors.push({ name: element.field, message: element.defaultMessage });
      });

      dispatch({ type: CLEAR });
      dispatch({ type: ADD_KOME_FAIL });
      dispatch({
        type: ERROR,
        payload: { errors: errors },
      });
      return Promise.reject();
    });
};

export const update_kome = (id, name, description) => (dispatch) => {
  return KomeService.update_kome(id, name, description)
    .then((response) => {
      let success = {
        name: "kome updated",
        message: "kome update successfully",
      };

      dispatch({ type: CLEAR });
      dispatch({
        type: UPDATE_KOME_SUCCESS,
        payload: { myKomes: response.data },
      });
      dispatch({
        type: SUCCESS,
        payload: { success: success },
      });
      return Promise.resolve();
    })
    .catch((error) => {
      let errors = [];

      error.response.data.errors.forEach((element) => {
        errors.push({ name: element.field, message: element.defaultMessage });
      });

      dispatch({ type: CLEAR });
      dispatch({ type: UPDATE_KOME_FAIL });
      dispatch({
        type: ERROR,
        payload: { errors: errors },
      });
      return Promise.reject();
    });
};

export const get_all_kome = () => (dispatch) => {
  return KomeService.get_all_kome().then(
    (response) => {
      dispatch({
        type: GET_ALL_KOME_SUCCESS,
        payload: { komes: response.data },
      });
      return Promise.resolve();
    },
    (error) => {
      dispatch({ type: GET_ALL_KOME_FAIL });
      return Promise.reject();
    }
  );
};

export const get_my_kome = () => (dispatch) => {
  return KomeService.get_my_kome().then(
    (response) => {
      dispatch({
        type: GET_MY_KOME_SUCCESS,
        payload: { myKomes: response.data },
      });
      return Promise.resolve();
    },
    (error) => {
      dispatch({ type: GET_MY_KOME_FAIL });
      return Promise.reject();
    }
  );
};

export const delete_kome = (id) => (dispatch) => {
  return KomeService.delete_kome(id).then(
    (response) => {
      dispatch({
        type: DELETE_KOME_SUCCESS,
        payload: { myKomes: response.data },
      });
      return Promise.resolve();
    },
    (error) => {
      dispatch({
        type: DELETE_KOME_FAIL,
      });
      return Promise.reject();
    }
  );
};

export const participate_kome = (komeId) => (dispatch) => {
  return KomeService.participate_kome(komeId)
    .then((response) => {
      dispatch({
        type: PARTICIPATE_KOME_SUCCESS,
        payload: { komes: response.data },
      });
      return Promise.resolve();
    })
    .catch((error) => {
      dispatch({ type: PARTICIPATE_KOME_FAIL });
      return Promise.reject();
    });
};
