import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import { connect } from 'react-redux'

import FacebookLogo from '../components/elements/logos/FacebookLogo'
import TwitterLogo from '../components/elements/logos/TwitterLogo'
import ThemeTextInput from '../components/elements/theme-elements/ThemeTextInput'
import ThemeButton from '../components/elements/theme-elements/ThemeButton'
import GeneralTheme from '../styles/GeneralTheme'
import userServices from '../../Services/userServices';
import {switch_to_login_screen } from '../actions'

class RegisterForm extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        membership_number:'',
        email:'',
        password: '',
        reaped_password:''
    }
    register = async () => {
        if(this.state.reaped_password != this.state.password)
        {
            alert('Adgangskoden skal være ens!')
        } else {
            let data = {
                membership_number: this.state.membership_number,
                email: this.state.email,
                password: this.state.password
            }
            const res = await userServices.createUser(data);
            console.log("RF: ",res)
            if(res === 200)
            alert("User have been created!");
            this.props.dispatch(switch_to_login_screen())
        }
    }

    
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
                    callbackMethod={(password) => this.setState({password})}
                    placeholder={'Ny adgangskode'}
                />

                <ThemeTextInput
                    marginVertical={10}
                    type={'password'}
                    name={'reaped_password'}
                    callbackMethod={(reaped_password) => this.setState({reaped_password})}
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