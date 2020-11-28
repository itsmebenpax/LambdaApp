import { combineReducers } from 'redux'

import navigator from './navigator'
import userNavigator from './userNavigator'

export default combineReducers({
    navigator,
    userNavigator
})