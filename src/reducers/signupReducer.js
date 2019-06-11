import { PRESIGNUP, SIGNUP } from '../actions/types.js';

const initialState = {
    tokVer: {},
    su: {}
}

export default(state=initialState, action) => {
    switch(action.type) {
        case PRESIGNUP:
            return {
                ...state,
                tokVer: action.payload
            }
        case SIGNUP:
            return {
                ...state,
                su: action.payload
            }
        default:
            return state;
    }
}
