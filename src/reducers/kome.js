import { GET_ALL_KOME_FAIL, GET_ALL_KOME_SUCCESS } from "../actions/types";

const initialState = { komes: {} };

const komeReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
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
    default:
      return state;
  }
};

export default komeReducer;
