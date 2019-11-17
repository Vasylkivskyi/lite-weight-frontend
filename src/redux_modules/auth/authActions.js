import { REQUEST_USER_TOKEN, RECEIVE_USER_TOKEN, REMOVE_TOKEN } from './authTypes';
import { USERS, USERS_LOGIN } from 'Constants/apiUrls.js';
import { setAlert } from 'ReduxModules/alert/alertActions';

const requestUserToken = () => ({
  type: REQUEST_USER_TOKEN,
});

const receiveUserToken = (token) => ({
  type: RECEIVE_USER_TOKEN,
  payload: token,
});

const removeToken = () => ({
  type: REMOVE_TOKEN,
});

const registerNewUser = (data) => async (dispatch) => {
  try {
    dispatch(requestUserToken());
    const response = await fetch(USERS, {
      method: 'POST',
      body: JSON.stringify(data), // data must be {object}!
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const resData = await response.json();
    if (resData.message) {
      dispatch(setAlert(resData.message, 'danger'));
      return resData.message;
    }
    dispatch(receiveUserToken(resData.token));
  } catch (error) {
    console.error('Error from registerNewUser: ', error);
    return error;
  }
};

const loginUser = (data) => async (dispatch) => {
  try {
    dispatch(requestUserToken());
    const response = await fetch(USERS_LOGIN, {
      method: 'POST',
      body: JSON.stringify(data), // data must be {object}!
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const resData = await response.json();
    if (resData.message) {
      dispatch(setAlert(resData.message, 'danger'));
      return resData.message;
    }
    dispatch(receiveUserToken(resData.token));
  } catch (error) {
    console.error('Error from loginUser: ', error);
    return error;
  }
};

export { registerNewUser, loginUser, removeToken };
