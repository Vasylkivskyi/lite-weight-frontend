export { REQUEST_EXERCISES, RECEIVE_EXERCISES, RECEIVE_EXERCISES_FAIL } from './exercisesTypes';
import { EXERCISES } from 'Constants/apiUrls.js';

import axios from 'axios';

const requestExercises = () => ({
  type: REQUEST_EXERCISES,
});

const receiveExercises = () => ({
  type: RECEIVE_EXERCISES,
});

const receiveExercisesFail = () => ({
  type: RECEIVE_EXERCISES_FAIL,
});

export const getExercises = (token) => async (dispatch) => {
  try {
    const result = await axios.get(EXERCISES, {
      headers: { 'x-access-token': token },
    });
    console.log('result------------------------', result.data);
  } catch (error) {
    console.error('Error from registerNewUser: ', error);
    return error;
  }
};
