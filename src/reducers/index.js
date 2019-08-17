import { combineReducers } from 'redux';
import authReducer from './authReducer';
import signupReducer from './signupReducer';
import userAuthReducer from './userAuthReducer';

export default combineReducers({
	auth: authReducer,
	signup: signupReducer,
	user_auth: userAuthReducer
});
