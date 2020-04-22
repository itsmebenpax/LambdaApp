import { combineReducers } from 'redux'
import authentication from './authentication'
import information from './information'

export default combineReducers({
    authentication,
    information
})