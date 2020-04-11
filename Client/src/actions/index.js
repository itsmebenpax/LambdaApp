import {LOGIN} from './actionTypes'

export const login = (user, password) => ({
    type: 'LOGIN',
    user: user,
    password: password
})