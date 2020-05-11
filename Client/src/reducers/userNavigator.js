import { USER_NAVIGATION } from '../actions/actionTypes'
import { UserNavigation } from '../navigation/UserNavigation'

const userNavigator = (state=[], action) => {
    switch (action.type) {
        case USER_NAVIGATION.SWITCH_TO_HOME_SCREEN:
            return ({currentScreen: USER_NAVIGATION.SWITCH_TO_HOME_SCREEN})

        case USER_NAVIGATION.SWITCH_TO_MEMBER_CARD_SCREEN:
            return ({currentScreen: USER_NAVIGATION.SWITCH_TO_MEMBER_CARD_SCREEN})

        case USER_NAVIGATION.SWITCH_TO_MEMBER_INFO_SCREEN:
            return ({currentScreen: USER_NAVIGATION.SWITCH_TO_MEMBER_INFO_SCREEN})

        case USER_NAVIGATION.SWITCH_TO_EVENT_SCREEN:
            return ({currentScreen: USER_NAVIGATION.SWITCH_TO_EVENT_SCREEN})

        default:
            return state
    }
}

export default userNavigator