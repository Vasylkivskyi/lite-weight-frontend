import { REQUEST_USER_TOKEN, RECEIVE_USER_TOKEN, RECEIVE_USER_TOKEN_FAIL } from './authTypes';

const authentication = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USER_TOKEN:
      return { userToken: action.payload };
    default:
      return state;
  }
};

export { authentication };
