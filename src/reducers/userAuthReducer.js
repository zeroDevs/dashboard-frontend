import { USER_LOGIN, USER_PROFILE, PROJ_PAY_FORM } from '../actions/types';

const initialState = {
    isLoggedIn: false,
    username: '',
    profile: {},
    projPayForm: null
}

export default (state=initialState, action) => {
    switch(action.type) {
        case USER_LOGIN:
            return {
                ...state,
                isLoggedIn: action.payload.loggedIn,
                username: action.payload.username
            }
        case USER_PROFILE:
            return {
                ...state,
                profile: action.payload.profile,
                username: action.payload.username,
                isLoggedIn: action.payload.loggedIn
            }
        case PROJ_PAY_FORM:
            return {
                ...state,
                projPayForm: action.payload
            }
        default:
            return state;
    }
}
