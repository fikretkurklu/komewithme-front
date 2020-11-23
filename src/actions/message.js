import { CLEAR } from "./types";

const clear_message = () => (dispatch) => {
  dispatch({
    type: CLEAR,
  });
};

export default { clear_message };
