import { LOGIN } from '../actions/types';

const initialState = {
	isLoggedIn: false,
	profile: {}
}

export default (state=initialState, action) => {
	switch(action.type) {
		default:
			return state;
	}
}