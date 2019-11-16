import { REQUEST_EXERCISES, RECEIVE_EXERCISES, RECEIVE_EXERCISES_FAIL } from './exercisesTypes';
import { EXERCISES } from 'Constants/apiUrls.js';

import axios from 'axios';

const requestExercises = () => ({
  type: REQUEST_EXERCISES,
});

const receiveExercises = (data) => ({
  type: RECEIVE_EXERCISES,
  payload: data,
});

const receiveExercisesFail = () => ({
  type: RECEIVE_EXERCISES_FAIL,
});

export const getExercises = (token) => async (dispatch) => {
  try {
    dispatch(requestExercises());
    const result = await axios.get(EXERCISES, {
      headers: { 'x-access-token': token },
    });
    dispatch(receiveExercises(result.data));
  } catch (error) {
    dispatch(receiveExercisesFail());
    console.error('Error from getExercises: ', error);
    return error;
  }
};

export const saveExercise = (token, exerciseName) => async (dispatch) => {
  try {
    const exercise = { name: exerciseName };
    const response = await fetch(EXERCISES, {
      method: 'POST',
      body: JSON.stringify(exercise), // data must be an {object}!
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': token,
      },
    });
    dispatch(getExercises(token));
  } catch (error) {
    console.error('Error from saveExercise: ', error);
    return error;
  }
};

export const editExercise = (token, exercise) => async (dispatch) => {
  const { id, name } = exercise;
  try {
    const response = await fetch(EXERCISES + `/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ name }),
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': token,
      },
    });
    dispatch(getExercises(token));
  } catch (error) {
    console.error('Error from editExercise', error);
  }
};
