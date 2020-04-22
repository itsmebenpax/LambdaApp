import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import userServices from'../../Services/userServices';

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

    onLogin = async () => {
        this.props.dispatch(login(this.state.user, this.state.password))
        if (this.state.user.length >= 1 && this.state.password.length >= 1)
        {
            let data = this.state;
            console.log("hello" ,data)
            let AT = await userServices.login(data);
            console.log('AT', AT)
                if(AT.status !== 200)
                {
                    alert('User not found')
                } else {
                alert('User found! Current user is: ' + AT.data.firstName +" "+ AT.data.lastName)
                    this.setState({
                        user:"",
                        password:""
                    })
            }
        }   
        else {
            console.log("error msg")
            alert('Enten medlems nummeret eller passwordet er forkert')
        }
    }

    /*login = () => {
        this.props.dispatch(login(this.state.user, this.state.password))
        this.setState({
            user: '',
            password: ''
        })
        console.log("props: ", this.props.children," STATE: ",this.state)
    }*/

    render() {
        return (
            <View style={[styles.container, {width: this.props.width}]}>
                <ThemeTextInput
                    marginVertical={10}
                    type={'username'}
                    name={'user'}
                    callbackMethod={(user) => this.setState({user})}
                    placeholder={'Medlemsnummer eller e-mail'}
                />

                <ThemeTextInput
                    marginVertical={10}
                    type={'password'}
                    name={'password'}
                    callbackMethod={(password) => this.setState({password})}
                    placeholder={'Adgangskode'}
                />

                <ThemeButton
                    marginTop={40}
                    marginBottom={15}
                    text={'LOGIN'}
                    onPressMethod={this.onLogin}
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