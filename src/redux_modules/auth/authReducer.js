import { REQUEST_USER_TOKEN, RECEIVE_USER_TOKEN, RECEIVE_USER_TOKEN_FAIL } from './authTypes';

import { Cookies } from 'react-cookie';
const cookies = new Cookies();

const initialState = {
  token: '',
  isAuthenticated: false,
};

const auth = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REQUEST_USER_TOKEN:
      return state;
    case RECEIVE_USER_TOKEN:
      cookies.set('token', payload);
      return {
        ...state,
        token: payload,
      };
    case RECEIVE_USER_TOKEN_FAIL:
      return {
        ...state,
        token: '',
      };
    default:
      return state;
  }
};

export { auth };
