import {LOGIN, LOGOUT, REGISTER_USER, REGISTER_AS_MEMBER} from './actionTypes'

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
