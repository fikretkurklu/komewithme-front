import {
  ADD_KOME_SUCCESS,
  ADD_KOME_FAIL,
  GET_ALL_KOME_SUCCESS,
  GET_ALL_KOME_FAIL,
} from "./types";

import KomeService from "../services/kome.service";

export const add_kome = (name, description) => (dispatch) => {
  return KomeService.add_kome(name, description).then(
    (response) => {
      dispatch({ type: ADD_KOME_SUCCESS });

      return Promise.resolve();
    },
    (error) => {
      dispatch({ type: ADD_KOME_FAIL });
      return Promise.reject();
    }
  );
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
