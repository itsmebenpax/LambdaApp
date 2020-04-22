import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import { connect } from 'react-redux'

import FacebookLogo from '../components/elements/logos/FacebookLogo'
import TwitterLogo from '../components/elements/logos/TwitterLogo'
import ThemeTextInput from '../components/elements/theme-elements/ThemeTextInput'
import ThemeButton from '../components/elements/theme-elements/ThemeButton'
import GeneralTheme from '../styles/GeneralTheme'

class RegisterForm extends Component {
    constructor(props) {
        super(props)
    }

    register = () => {
        // what happens when u press register

        // check validity of input

        // talk to backend

        // give response to user
    }

    render() {
        return (
            <View style={[styles.container, {width: this.props.width}]}>
                <ThemeTextInput
                    marginVertical={10}
                    type={'username'}
                    name={'membership_number'}
                    callbackMethod={() => {}}
                    placeholder={'Medlemsnummer'}
                />

                <ThemeTextInput
                    marginVertical={10}
                    type={'email'}
                    name={'email'}
                    callbackMethod={() => {}}
                    placeholder={'Email'}
                />

                <ThemeTextInput
                    marginVertical={10}
                    type={'password'}
                    name={'password'}
                    callbackMethod={() => {}}
                    placeholder={'Ny adgangskode'}
                />

                <ThemeTextInput
                    marginVertical={10}
                    type={'password'}
                    name={'password'}
                    callbackMethod={() => {}}
                    placeholder={'Bekræft adgangskode'}
                />

                <ThemeButton
                    marginTop={40}
                    marginBottom={15}
                    text={'REGISTRER BRUGER'}
                    onPressMethod={this.register}
                />

                <Text style={[GeneralTheme.smallText, {marginTop: 20}]}>Opret bruger med Sociale Netværk</Text>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                                            
                }}>
                    <FacebookLogo size={60} margin={20} />
                    <TwitterLogo size={60} margin={20}/>
                </View>

                <Text style={GeneralTheme.smallText}>
                    Er du ikke medlem af foreningen endnu?
                </Text>
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

export default connect()(RegisterForm)