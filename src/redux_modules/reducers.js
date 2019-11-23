import { combineReducers } from 'redux';

import { auth } from './auth/authReducer';
import { alert } from './alert/alertReducer';
import { exercises } from './exercises/exercisesReducer';
import { trainings } from './training/trainingReducer';

export default combineReducers({ auth, alert, exercises, trainings });
