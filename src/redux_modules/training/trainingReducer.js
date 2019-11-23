import { REQUEST_SAVE_TRAINING, RECEIVE_LATEST_TRAININGS } from './trainingTypes';

export const trainings = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case RECEIVE_LATEST_TRAININGS:
      console.log('pay', payload);
      return payload;
    default:
      return state;
  }
};
