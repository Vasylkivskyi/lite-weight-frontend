import { REQUEST_USER_TOKEN, RECEIVE_USER_TOKEN, RECEIVE_USER_TOKEN_FAIL } from './authTypes';

const auth = (state = { userToken: '' }, action) => {
  switch (action.type) {
    case REQUEST_USER_TOKEN:
      return state;
    case RECEIVE_USER_TOKEN:
      return { userToken: action.payload };
    default:
      return state;
  }
};

export { auth };
