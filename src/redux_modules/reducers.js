import { combineReducers } from 'redux';

import { auth } from './authentication/authReducer';
import { alert } from './alert/alertReducer';

export default combineReducers({ auth, alert });
