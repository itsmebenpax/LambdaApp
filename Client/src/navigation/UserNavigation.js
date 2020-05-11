import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

import HomeScreen from '../components/screens/HomeScreen'
import MemberCardScreen from '../components/screens/MemberCardScreen'
import MemberInfoScreen from '../components/screens/MemberInfoScreen'
import EventScreen from '../components/screens/EventScreen'
import { USER_NAVIGATION } from '../actions/actionTypes'


import OtherNavigator from './OtherNavigator'

export class UserNavigation extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={{flex:1,width: '100%', height:'100%'}}>
                {this.switchView()}
                
                <OtherNavigator/>
            </View>  
            
        )
    }

    switchView() {
        console.log("User navi ",this.props.currentScreen)
        switch (this.props.currentScreen) {
            case USER_NAVIGATION.SWITCH_TO_HOME_SCREEN:
                console.log("Home")
                return (
                    <HomeScreen />
                )
            case USER_NAVIGATION.SWITCH_TO_MEMBER_CARD_SCREEN:
                return (
                    <MemberCardScreen />
                    
                )
            case USER_NAVIGATION.SWITCH_TO_MEMBER_INFO_SCREEN:
                return (
                    <MemberInfoScreen />
                )
            case USER_NAVIGATION.SWITCH_TO_EVENT_SCREEN:
                return (
                    <EventScreen />
                )

            default:
                console.log("Default")
                return (
                    <HomeScreen/>
                )

        }
    }
}

const mapStateToProps = (state) => {
    
    return {
        currentScreen: state.userNavigator.currentScreen
    }
}

export default connect(mapStateToProps)(UserNavigation)
