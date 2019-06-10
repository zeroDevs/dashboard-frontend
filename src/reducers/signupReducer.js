import { PRESIGNUP, SIGNUP } from '../actions/types.js';

const initialState = {
    tokVer: false,
    su: false
}

export default(state=initialState, action) => {
    switch(action.type) {
        case PRESIGNUP:
            return {
                ...state,
                tokVer: action.payload.tokVer
            }
        case SIGNUP:
            return {
                ...state,
                su: action.payload.su
            }
        default:
            return state;
    }
}
