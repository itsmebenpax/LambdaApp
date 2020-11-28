import { createStore, combineReducers } from 'redux';

import loginReducer from '../reducers/loginReducer';

const rootReducer = combineReducers (
    { isLoggedIn: loginReducer }
);

const configureStore = () => {
    return createStore(loginReducer);
}

export default configureStore;