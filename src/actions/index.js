import {LOGIN, LOGOUT, SWITCH_TO_SIGN_UP_SCREEN} from './actionTypes'
import {SWITCH_TO_NAVIGATOR, SWITCH_TO_LOGIN_SCREEN, SWITCH_TO_REGISTER_SCREEN, USER_NAVIGATION} from './actionTypes'

// authentication
export const login = (user, password) => ({
    type: LOGIN,
    user: user,
    password: password
})

export const logout = (token) => ({
    type: LOGOUT,
    token: token
})

// navigation
export const switch_to_navigator = () =>  ({
    type: SWITCH_TO_NAVIGATOR
})

export const switch_to_login_screen = () => ({
    type: SWITCH_TO_LOGIN_SCREEN
})

export const switch_to_register_screen = () => ({
    type: SWITCH_TO_REGISTER_SCREEN
})

export const switch_to_sign_up_screen = () => ({
    type: SWITCH_TO_SIGN_UP_SCREEN
})

// user navigation
export const switch_to_home_screen = () =>  ({
    type: USER_NAVIGATION.SWITCH_TO_HOME_SCREEN
})

export const switch_to_member_card_screen = () => ({
    type: USER_NAVIGATION.SWITCH_TO_MEMBER_CARD_SCREEN
})

export const switch_to_member_info_screen = () => ({
    type: USER_NAVIGATION.SWITCH_TO_MEMBER_INFO_SCREEN
})

export const switch_to_event_screen = () => ({
    type: USER_NAVIGATION.SWITCH_TO_EVENT_SCREEN
})