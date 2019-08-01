import { LOGIN, USER_PROFILE, DISCORD_STATS } from '../actions/types';

const initialState = {
	isLoggedIn: false,
	username: '',
	profile: {},
	stats: {}
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
			// console.log(action.payload)
			return {
				...state,
				profile: action.payload
			}
		case DISCORD_STATS:
			return {
				...state,
				stats: action.payload
			}
		default:
			return state;
	}
}
