const authentication = (state=[], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state, {
                    user: action.user,
                    password: action.password
                }
            ]
        default:
            return state
    }
}

export default authentication