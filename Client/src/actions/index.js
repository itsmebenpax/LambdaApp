import {LOGIN, LOGOUT, REGISTER_USER, REGISTER_AS_MEMBER} from './actionTypes'
import {SWITCH_TO_NAVIGATOR, SWITCH_TO_LOGIN_SCREEN, SWITCH_TO_REGISTER_SCREEN} from './actionTypes'

// authentication
export const login = (user, password) => ({
    type: 'LOGIN',
    user: user,
    password: password
})

export const logout = (token) => ({
    type: 'LOGOUT',
    token: token
})

export const register_user = () => ({
    type: 'REGISTER_USER',
    
})

export const register_member = () => ({
    type: 'REGISTER_AS_MEMBER',
    
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

