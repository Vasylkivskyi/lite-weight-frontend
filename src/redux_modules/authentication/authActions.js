import { REQUEST_USER_TOKEN, RECEIVE_USER_TOKEN } from './authTypes';
import { USERS } from 'Constants/apiUrls.js';

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
    const userToken = await fetch(USERS, {
      method: 'POST',
      body: JSON.stringify(data), // data must be {object}!
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const token = await userToken.json();
    dispatch(receiveUserToken(token));
    return userToken;
  } catch (error) {
    console.error('Error from registerNewUser: ', error);
    return error;
  }
};

export { registerNewUser };
