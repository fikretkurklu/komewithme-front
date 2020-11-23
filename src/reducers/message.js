import { ERROR, CLEAR, SUCCESS } from "../actions/types";

const initialState = {};

const messageReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ERROR:
      return {
        ...state,
        errors: payload.errors,
      };
    case SUCCESS:
      return {
        ...state,
        success: payload.success,
      };
    case CLEAR:
      return {
        ...state,
        errors: [],
        success: null,
      };
    default:
      return state;
  }
};

export default messageReducer;
