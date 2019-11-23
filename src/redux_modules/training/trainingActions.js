import { REQUEST_SAVE_TRAINING, RECEIVE_LATEST_TRAININGS } from './trainingTypes';
import axios from 'axios';
import { SET_URL } from 'Constants/apiUrls.js';
import Router from 'next/router';

const receiveExercises = (data) => ({
  type: RECEIVE_LATEST_TRAININGS,
  payload: data,
});

const saveTraining = (data, token) => async (dispatch) => {
  try {
    await axios.post(SET_URL, data, {
      headers: { 'x-access-token': token },
    });
    return { TYPE: REQUEST_SAVE_TRAINING };
  } catch (error) {
    console.error('Error from saveTraining', error);
    if (error.response.data.name === 'TokenExpiredError') {
      Router.push('/login');
    }
  }
};

const getLatestTraining = (token) => async (dispatch) => {
  try {
    const result = await axios.get(SET_URL, { headers: { 'x-access-token': token } });
    dispatch(receiveExercises(result.data));
  } catch (error) {
    console.error('Error from getLatestTraining', error);
    if (error.response.data.name === 'TokenExpiredError') {
      Router.push('/login');
    }
  }
};

export { saveTraining, getLatestTraining };
