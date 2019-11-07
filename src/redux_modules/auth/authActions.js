import { REQUEST_USER_TOKEN, RECEIVE_USER_TOKEN, VALIDATE_USER_TOKEN } from './authTypes';
import { USERS, USERS_LOGIN, VALIDATE_TOKEN } from 'Constants/apiUrls.js';
import { setAlert } from 'ReduxModules/alert/alertActions';
import axios from 'axios';

const requestUserToken = () => ({
  type: REQUEST_USER_TOKEN,
});

const receiveUserToken = (token) => ({
  type: RECEIVE_USER_TOKEN,
  payload: token,
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
    const token = await response.json();
    dispatch(receiveUserToken(token.token));
    return token.token;
  } catch (error) {
    console.error('Error from loginUser: ', error);
    return error;
  }
};

const validateUserToken = (token) => async (dispatch) => {
  try {
    console.log(token);
    const response = await axios({
      method: 'get',
      url: VALIDATE_TOKEN,
      headers: { 'x-access-token': token },
    });
    // const response = await fetch(VALIDATE_TOKEN, {
    //   method: 'GET',
    //   headers: {
    //     'x-access-token': token,
    //   },
    // });
    // console.log(response);
    const res = await response.json();
    // console.log('resp', res);
  } catch (error) {
    //console.error('Error from validateUserToken: ', error);
    return error;
  }
};

export { registerNewUser, loginUser, validateUserToken };
