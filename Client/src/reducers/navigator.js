import { SWITCH_TO_NAVIGATOR, SWITCH_TO_LOGIN_SCREEN, SWITCH_TO_REGISTER_SCREEN } from '../actions/actionTypes'
import { LOGGED_IN, LOGGED_OUT, REGISTERING } from '../navigation/userStatus'

const navigator = (state=[], action) => {
    switch (action.type) {
        case SWITCH_TO_NAVIGATOR:
            return ({user_navigator_status: LOGGED_IN})
        case SWITCH_TO_LOGIN_SCREEN:
            return ({user_navigator_status: LOGGED_OUT})
        case SWITCH_TO_REGISTER_SCREEN:
            return ({user_navigator_status: REGISTERING})
        default:
            return state
    }
}

export default navigator