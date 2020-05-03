import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import { connect } from 'react-redux'

import FacebookLogo from '../components/elements/logos/FacebookLogo'
import TwitterLogo from '../components/elements/logos/TwitterLogo'
import ThemeTextInput from '../components/elements/theme-elements/ThemeTextInput'
import ThemeButton from '../components/elements/theme-elements/ThemeButton'
import GeneralTheme from '../styles/GeneralTheme'
import userServices from '../../Services/userServices';
import {switch_to_login_screen, switch_to_sign_up_screen} from '../actions'

class RegisterForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            membership_number: '',
            email:' ',
            password: '',
            repeated_password: '',
            inputVerificationFailed: false,
            inputVerificationMessage: ''
        }
    }

    register = async () => {
        // verify all input
        this.verifyInput()

        console.log('after verify method: ' + this.state.inputVerificationFailed)
        
        // make an http request to the backend with new user data
        // if(!this.state.inputVerificationFailed) {
        //     let data = {
        //         membership_number: this.state.membership_number,
        //         email: this.state.email,
        //         password: this.state.password
        //     }
        //     const res = await userServices.createUser(data);
        //     console.log("RF: ",res)

        //     if(res === 200)
        //         alert("User have been created!");
            
        //     this.switchToLoginScreen()
        // }
    }

    /**
     * VERIFIES INPUT OF THE REGISTER FORM
     */
    verifyInput = () => {
        // msg feedback on input verification to the user
        let msg = ''
        
        // determines whether the passwords match
        if (this.state.password !== this.state.repeated_password) {
            this.setState({
                inputVerificationFailed: true
            }, console.log('before verify method: ' + this.state.inputVerificationFailed))
            
            // message for user
            msg += 'Adgangskoderne er ikke ens\n'
        }
        
        // determines whether the password is long enough (8 characters)
        if (this.state.password.length < 8) {
            this.setState({
                inputVerificationFailed: true
            })

            // message for user
            msg += 'Adgangskoden skal indeholde minimum 8 tegn\n'
        }
        
        // determines whether the password is too long (64 characters)
        if (this.state.password.length > 64) {
            this.setState({
                inputVerificationFailed: true
            })

            // message for user
            msg += 'Adgangskoden er for lang. Maksimum 64 tegn\n'
        }

        // confirms positive verification of input
        if (!this.state.inputVerificationFailed) {
            this.setState({
                inputVerificationFailed: false
            })

            msg = ''
        }

        this.setState({
            inputVerificationMessage: msg
        })
    }

    switchToLoginScreen = () => {
        this.props.dispatch(switch_to_login_screen())
    }

    switchToSignUpScreen = () => {
        this.props.dispatch(switch_to_sign_up_screen())
    }

    inputNotVerifiedStyle = () => {
        if (this.state.inputVerificationFailed)
            return {borderColor: 'red'}

        return {}
    }

    /**
     * THE UI OF THE REGISTER VIEW ON THE APP
     */
    render() {
        return (
            <View style={[styles.container, {width: this.props.width}]}>
                <ThemeTextInput
                    marginVertical={10}
                    type={'username'}
                    name={'membership_number'}
                    callbackMethod={(membership_number) => this.setState({membership_number})}
                    placeholder={'Medlemsnummer'}
                />

                <ThemeTextInput
                    marginVertical={10}
                    type={'email'}
                    name={'email'}
                    callbackMethod={(email) => this.setState({email})}
                    placeholder={'Email'}
                />

                <ThemeTextInput
                    marginVertical={10}
                    type={'password'}
                    name={'password'}
                    style={this.inputNotVerifiedStyle()}
                    callbackMethod={(password) => this.setState({password})}
                    placeholder={'Ny adgangskode'}
                />

                <ThemeTextInput
                    marginVertical={10}
                    type={'password'}
                    name={'reaped_password'}
                    style={this.inputNotVerifiedStyle()}
                    callbackMethod={(repeated_password) => this.setState({repeated_password})}
                    placeholder={'Bekræft adgangskode'}
                />

                {this.state.inputVerificationFailed ? 
                    (
                        <Text
                            style={GeneralTheme.smallText}
                        >
                            {this.state.inputVerificationMessage}
                        </Text>
                    ) : 
                    (
                        <></>
                    )
                }

                <ThemeButton
                    marginTop={40}
                    marginBottom={15}
                    text={'REGISTRER BRUGER'}
                    onPressMethod={this.register}
                />

                {/*<Text style={[GeneralTheme.smallText, {marginTop: 20}]}>Opret bruger med Sociale Netværk</Text>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                                            
                }}>
                    <FacebookLogo size={60} margin={20} />
                    <TwitterLogo size={60} margin={20}/>
                </View>
                */}

                <Text style={GeneralTheme.smallText}>
                    Er du ikke medlem af foreningen endnu?
                </Text>

                <Text
                    style={[GeneralTheme.smallText, {textDecorationLine: 'underline'}]}
                    onPress={this.switchToSignUpScreen}
                >
                    Meld dig ind her
                </Text>

                <ThemeButton
                    marginTop={40}
                    marginBottom={15}
                    text={'Tilbage til log ind'}
                    onPressMethod={this.switchToLoginScreen}
                />

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