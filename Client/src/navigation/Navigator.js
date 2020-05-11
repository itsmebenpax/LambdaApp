import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { LOGGED_OUT, LOGGED_IN, REGISTERING} from './userStatus'
import { connect } from 'react-redux'


import LoginScreen from '../components/screens/LoginScreen'
import RegisterScreen from '../components/screens/RegisterScreen'

import UserNavigation from './UserNavigation'
import OtherNavigator from './OtherNavigator'


class Navigator extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        
        return (
            <View style={{flex:1, width: '100%',marginTop:60, height:'100%'}}>
                {this.switchView()}
            </View>
        )
    }

    switchView() {
        console.log(this.props.user_navigator_status)
        switch (this.props.user_navigator_status) {
            case LOGGED_OUT:
                return (
                    <LoginScreen/>
                )
            case LOGGED_IN:
                console.log("Logged in")
                return (
                    <UserNavigation/>
                    
                )
            case REGISTERING:
                return (
                    <RegisterScreen/>
                )
            default:
                return (
                    <LoginScreen/>
                )

        }
    }
}

const mapStateToProps = (state) => {
    console.log(state.navigator)

    return {
        user_navigator_status: state.navigator.user_navigator_status
    }
}



export default connect(mapStateToProps)(Navigator)