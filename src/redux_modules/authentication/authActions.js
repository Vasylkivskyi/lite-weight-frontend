import { REQUEST_USER_TOKEN, RECEIVE_USER_TOKEN } from './authTypes';
import { USERS, USERS_LOGIN } from 'Constants/apiUrls.js';

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
    await fetch(USERS, {
      method: 'POST',
      body: JSON.stringify(data), // data must be {object}!
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // dispatch(receiveUserToken(token));
    // return userToken;
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

export { registerNewUser, loginUser };
