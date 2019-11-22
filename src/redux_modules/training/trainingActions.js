import { REQUEST_SAVE_TRAINING } from './trainingTypes';
import axios from 'axios';
import { SET_URL } from 'Constants/apiUrls.js';

export const saveTraining = (data, token) => async (dispatch) => {
  try {
    await axios.post(SET_URL, data, {
      headers: { 'x-access-token': token },
    });
    return { TYPE: REQUEST_SAVE_TRAINING };
  } catch (error) {
    console.error('Error from saveTraining', error);
  }
};
