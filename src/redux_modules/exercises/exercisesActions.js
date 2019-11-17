import { REQUEST_EXERCISES, RECEIVE_EXERCISES, RECEIVE_EXERCISES_FAIL } from './exercisesTypes';
import { EXERCISES } from 'Constants/apiUrls.js';
import Router from 'next/router';

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

const getExercises = (token) => async (dispatch) => {
  try {
    dispatch(requestExercises());
    const result = await axios.get(EXERCISES, {
      headers: { 'x-access-token': token },
    });
    dispatch(receiveExercises(result.data));
  } catch (error) {
    dispatch(receiveExercisesFail());
    console.error('Error from getExercises: ', error.response.data);
    Router.push('/login');
    return error;
  }
};

const saveExercise = (token, exerciseName) => async (dispatch) => {
  try {
    const exercise = { name: exerciseName };
    await axios.post(
      EXERCISES,
      exercise, // data must be an {object}!
      {
        headers: {
          'x-access-token': token,
        },
      },
    );
    dispatch(getExercises(token));
  } catch (error) {
    console.error('Error from saveExercise: ', error.response.data);
    Router.push('/login');
    return error;
  }
};

const editExercise = (token, exercise) => async (dispatch) => {
  const { id, name } = exercise;
  try {
    await axios.put(
      EXERCISES + `/${id}`,
      { name },
      {
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': token,
        },
      },
    );
    dispatch(getExercises(token));
  } catch (error) {
    console.error('Error from editExercise', error.response.data);
    Router.push('/login');
  }
};

const deleteExercise = (token, id) => async (dispatch) => {
  try {
    await axios.delete(EXERCISES + `/${id}`, {
      headers: {
        'x-access-token': token,
      },
    });
    dispatch(getExercises(token));
  } catch (error) {
    console.error('Error from deleteExercise', error.response.data);
    Router.push('/login');
  }
};

export { deleteExercise, editExercise, getExercises, saveExercise };
