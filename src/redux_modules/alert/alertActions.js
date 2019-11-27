import { SET_ALERT, REMOVE_ALERT } from './alertTypes';
import uuidv4 from 'uuid/v4';

const setAlert = (msg, alertType) => (dispatch) => {
  const id = uuidv4();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id },
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), 2000);
};

export { setAlert };
