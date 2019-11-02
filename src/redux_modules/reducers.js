import { combineReducers } from 'redux';

import { auth } from './authentication/authReducer';

export default combineReducers({ auth });
