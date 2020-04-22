import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { LOGGED_OUT, LOGGED_IN, REGISTERING } from './userStatus'
import LoginScreen from '../components/screens/LoginScreen'
import { connect } from 'react-redux'
import RegisterScreen from '../components/screens/RegisterScreen'

class Navigator extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
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
                return (
                    <Text>Logged In!</Text>
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