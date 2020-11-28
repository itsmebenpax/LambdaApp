import { LOGIN_CHANGE } from '../constants'

export function changeLoggedIn(isLoggedIn) {
    return {
        type: LOGIN_CHANGE,
        payload: isLoggedIn
    }
}