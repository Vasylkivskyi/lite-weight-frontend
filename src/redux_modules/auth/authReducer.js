import { REQUEST_USER_TOKEN, RECEIVE_USER_TOKEN, REMOVE_TOKEN } from './authTypes';

import { Cookies } from 'react-cookie';
const cookies = new Cookies();

const auth = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case REQUEST_USER_TOKEN:
      return state;
    case RECEIVE_USER_TOKEN:
      cookies.set('token', payload);
      return state;
    case REMOVE_TOKEN:
      cookies.set('token', '');
    default:
      return state;
  }
};

export { auth };
