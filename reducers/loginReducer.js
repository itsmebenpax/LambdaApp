import { LOGGED_IN, LOGIN_CHANGE } from '../constants'

const initialState = {
    isLoggedIn: false
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_CHANGE:
            return {
                ...state,
                isLoggedIn: action.type
            };
        default:
            return state;
    }
}

export default loginReducer;