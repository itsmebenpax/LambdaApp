const information = (state=[], action) => {
    switch (action.type) {
        case 'GET_USER_INFO':
            return[
                ...state, {

                }
            ]
        
        default:
            return state
        }
    }
export default information