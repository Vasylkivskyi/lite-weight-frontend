import { REQUEST_EXERCISES, RECEIVE_EXERCISES, RECEIVE_EXERCISES_FAIL } from './exercisesTypes';

const exercises = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case REQUEST_EXERCISES:
      return state;
    case RECEIVE_EXERCISES:
      return payload;
    case RECEIVE_EXERCISES_FAIL:
      return state;
    default:
      return state;
  }
};

export { exercises };
