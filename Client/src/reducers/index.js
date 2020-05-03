import { combineReducers } from 'redux'
import authentication from './authentication'
import navigator from './navigator'

export default combineReducers({
    authentication,
    navigator
})