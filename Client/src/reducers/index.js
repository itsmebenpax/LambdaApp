import { combineReducers } from 'redux'
import authentication from './authentication'
import information from './information'
import navigator from './navigator'

export default combineReducers({
    authentication,
    information,
    navigator
})