import {
  ADD_KOME_FAIL,
  ADD_KOME_SUCCESS,
  UPDATE_KOME_SUCCESS,
  UPDATE_KOME_FAIL,
  GET_ALL_KOME_FAIL,
  GET_ALL_KOME_SUCCESS,
  GET_MY_KOME_FAIL,
  GET_MY_KOME_SUCCESS,
  DELETE_KOME_FAIL,
  DELETE_KOME_SUCCESS,
  PARTICIPATE_KOME_FAIL,
  PARTICIPATE_KOME_SUCCESS,
} from "../actions/types";

const initialState = { komes: {}, myKomes: {} };

const komeReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_KOME_FAIL:
      return {
        ...state,
      };
    case ADD_KOME_SUCCESS:
      return {
        ...state,
        myKomes: payload.myKomes,
      };
    case UPDATE_KOME_FAIL:
      return {
        ...state,
      };
    case UPDATE_KOME_SUCCESS:
      return {
        ...state,
        myKomes: payload.myKomes,
      };
    case GET_ALL_KOME_FAIL:
      return {
        ...state,
        komes: null,
      };
    case GET_ALL_KOME_SUCCESS:
      return {
        ...state,
        komes: payload.komes,
      };

    case GET_MY_KOME_FAIL:
      return {
        ...state,
        myKomes: null,
      };
    case GET_MY_KOME_SUCCESS:
      return {
        ...state,
        myKomes: payload.myKomes,
      };
    case DELETE_KOME_FAIL:
      return {
        ...state,
      };
    case DELETE_KOME_SUCCESS:
      return {
        ...state,
        myKomes: payload.myKomes,
      };
    case PARTICIPATE_KOME_SUCCESS:
      return {
        ...state,
        komes: payload.komes,
      };
    case PARTICIPATE_KOME_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default komeReducer;
