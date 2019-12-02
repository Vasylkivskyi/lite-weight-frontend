import { REQUEST_SAVE_TRAINING, RECEIVE_LATEST_TRAININGS } from './trainingTypes';
import axios from 'axios';
import { SET_URL } from 'Constants/apiUrls.js';
import { redirectUserDeleteToken } from 'Utils/auth';

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
    console.error('Error from saveTraining', error.response.data);
    redirectUserDeleteToken(error);
  }
};

const getLatestTraining = (token, res, page) => async (dispatch) => {
  try {
    const result = await axios.get(SET_URL, { headers: { 'x-access-token': token, page } });
    //console.log(result.data);
    dispatch(receiveExercises(result.data));
  } catch (error) {
    console.error('Error from getLatestTraining', error.response.data);
    redirectUserDeleteToken(error, res);
  }
};

export { saveTraining, getLatestTraining };
