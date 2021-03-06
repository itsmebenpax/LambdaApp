import React, { Component } from 'react'
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native'
import userServices from'../../Services/userServices';
import * as SecureStore from 'expo-secure-store';

import {connect} from 'react-redux'
import {switch_to_navigator, switch_to_register_screen} from '../actions'

import FacebookLogo from '../components/elements/logos/FacebookLogo'
import TwitterLogo from '../components/elements/logos/TwitterLogo'
import ThemeTextInput from '../components/elements/theme-elements/ThemeTextInput'
import ThemeButton from '../components/elements/theme-elements/ThemeButton'
import GeneralTheme from '../styles/GeneralTheme'
import Loader from '../components/elements/theme-elements/Loader'


class LoginForm extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        user: '',
        password: '',
        isLoading:false
    }

    validateInput = async (input) => {
        let validation = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;        
        return validation.test(input)
    }

    onLogin = async () => {

        if (this.validateInput(this.state.user) && this.validateInput(this.state.password))
        {
            this.setState({isLoading:true})
            let data = this.state;
            let AT = await userServices.login(data);
                if(AT.status !== 200)
                {
                    alert('User not found')
                } else {
                this.setState({
                    user:"",
                    password:""
                })
                await SecureStore.setItemAsync("token", AT.token)
                const token = await SecureStore.getItemAsync('token')
                console.log("SecureSTORE: ", token)
                this.setState({isLoading:false})
                this.login();
            }
        }   
        else {
            console.log("error msg")
            alert('Enten medlems nummeret eller passwordet er forkert')
        }
    }

    login = () => {
        this.props.dispatch(switch_to_navigator())
    }

    register = () => {
        this.props.dispatch(switch_to_register_screen())
    }

    render() {
        return (
            <View style={[styles.container, {width: this.props.width}]}>
                <Loader isLoading={this.state.isLoading} />
                
                <ThemeTextInput
                    marginVertical={10}
                    type={'username'}
                    name={'user'}
                    onChangeText={(user) => this.setState({user})}
                    placeholder={'Medlemsnummer eller e-mail'}
                />

                <ThemeTextInput
                    marginVertical={10}
                    type={'password'}
                    name={'password'}
                    onChangeText={(password) => this.setState({password})}
                    placeholder={'Adgangskode'}
                />

                <ThemeButton
                    marginTop={40}
                    marginBottom={15}
                    text={'LOGIN'}
                    onPressMethod={this.onLogin}
                />

                <Text style={GeneralTheme.smallText}>
                    Har du ikke en bruger? <Text
                        style={{textDecorationLine: 'underline'}}
                        onPress={this.register}
                    >Opret en her</Text>
                </Text>

                {/*<Text style={[GeneralTheme.smallText, {marginTop: 80}]}>Login med Sociale Netværk</Text>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                                            
                }}>
                    <FacebookLogo size={60} margin={20} />
                    <TwitterLogo size={60} margin={20}/>
                </View>
                */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: 'contain',
        alignItems: 'center'
    },
    overlay:{
        justifyContent:'center',
        alignItems:'center'

    },
    overlay_kid:{
        width:150, 
        height:150, 
        justifyContent:'center'
    }
})

export default connect()(LoginForm)