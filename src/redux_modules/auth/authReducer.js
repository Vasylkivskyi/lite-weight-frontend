import {
  REQUEST_USER_TOKEN,
  RECEIVE_USER_TOKEN,
  RECEIVE_USER_TOKEN_FAIL,
  VALIDATE_USER_TOKEN,
} from './authTypes';

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
      return {
        // todo
      };
    case RECEIVE_USER_TOKEN_FAIL:
      return {
        ...state,
        token: '',
      };
    case VALIDATE_USER_TOKEN:
      return {
        // todo
      };
    default:
      return state;
  }
};

export { auth };
