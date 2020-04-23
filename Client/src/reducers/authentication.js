const authentication = (state=[], action) => {
    switch (action.type) {
        case 'LOGIN':
            return [
                ...state, {
                    user: action.user,
                    password: action.password
                }
            ]
        case 'LOGOUT':
            return [
                ...state, {

                }
            ]
        default:
            return state
    }
}

export default authentication