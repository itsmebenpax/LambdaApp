import {LOGIN, LOGOUT, SWITCH_TO_SIGN_UP_SCREEN} from './actionTypes'
import {SWITCH_TO_NAVIGATOR, SWITCH_TO_LOGIN_SCREEN, SWITCH_TO_REGISTER_SCREEN} from './actionTypes'

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