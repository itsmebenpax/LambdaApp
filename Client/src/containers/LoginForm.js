import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'

import {connect} from 'react-redux'
import {login} from '../actions'

import FacebookLogo from '../components/elements/logos/FacebookLogo'
import TwitterLogo from '../components/elements/logos/TwitterLogo'
import ThemeTextInput from '../components/elements/theme-elements/ThemeTextInput'
import ThemeButton from '../components/elements/theme-elements/ThemeButton'
import GeneralTheme from '../styles/GeneralTheme'

class LoginForm extends Component {
    constructor(props) {
        super(props)

        login.bind(this)
    }

    state = {
        user: '',
        password: ''
    }

    login = (user, password) => {
        // redux store
        this.props.dispatch(login(user, password))
        console.log(this.state.user)
        this.setState({
            user: '',
            password: ''
        })
    }

    setUserState = (input) => {
        this.setState({
            user: input
        })
    }

    setPasswordState = (input) => {
        this.setState({
            password: input
        })
    }

    login = () => {
        this.props.dispatch(login(this.state.user, this.state.password))
        this.setState({
            user: '',
            password: ''
        })
        console.log(this.state.user)
    }

    render() {
        return (
            <View style={[styles.container, {width: this.props.width}]}>
                <ThemeTextInput
                    marginVertical={10}
                    type={'username'}
                    name={'user'}
                    callbackMethod={this.setUserState}
                    placeholder={'Medlemsnummer eller e-mail'}
                />

                <ThemeTextInput
                    marginVertical={10}
                    type={'password'}
                    name={'password'}
                    callbackMethod={this.setPasswordState}
                    placeholder={'Adgangskode'}
                />

                <ThemeButton
                    marginTop={40}
                    marginBottom={15}
                    text={'LOGIN'}
                    onPressMethod={this.login}
                />

                <Text style={GeneralTheme.smallText}>Har du ikke en bruger? <Text style={{textDecorationLine: 'underline'}}>Opret en her</Text></Text>

                <Text style={[GeneralTheme.smallText, {marginTop: 80}]}>Login med Sociale Netværk</Text>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                                            
                }}>
                    <FacebookLogo size={60} margin={20} />
                    <TwitterLogo size={60} margin={20}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: 'contain',
        alignItems: 'center'
    }
})

export default connect()(LoginForm)