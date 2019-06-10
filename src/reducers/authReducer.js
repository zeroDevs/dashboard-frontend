import { LOGIN, USER_PROFILE } from '../actions/types';

const initialState = {
	isLoggedIn: false,
	username: '',
	profile: {}
}

export default (state=initialState, action) => {
	switch(action.type) {
		case LOGIN:
			return {
				...state,
				isLoggedIn: action.payload.loggedIn,
				username: action.payload.username
			}
		case USER_PROFILE:
			console.log(action.payload)
			return {
				...state,
				profile: action.payload
			}
		default:
			return state;
	}
}
