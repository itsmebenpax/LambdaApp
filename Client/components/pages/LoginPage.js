import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ImageBackground, Image, Platform} from 'react-native'
import {Input, withTheme} from 'react-native-elements';
//import CookieManager from 'react-native-cookies';

import userServices from './../../Services/userServices';

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            membershipNumber: '',
            password: ''
        }
        this.handleInputChangeMembershipNumber = this.handleInputChangeMembershipNumber.bind(this);
        this.handleInputChangePassword = this.handleInputChangePassword.bind(this);
    }

    handleInputChangeMembershipNumber = (value) => {
        this.setState({
            membershipNumber: value
        });
    }

    handleInputChangePassword = (value) => {
        this.setState({
            password: value
        });
    }
    onLogin = async () => {
        if (this.state.membershipNumber.length >= 1 && this.state.password.length >= 1)
        {
            let data ={
                userName: this.state.membershipNumber,
                password: this.state.password
            }
            console.log("hello" ,data)
            let AT = await userServices.tester();
            console.log('AT', AT)
                if(AT.status !== 200)
                {
                    alert('User not found')
                } else {
                //Platform.select
                /*CookieManager.set({
                    name: 'user',
                    value: AT.userName,
                    domain: 'some domain',
                    origin: 'some origin',
                    path: '/',
                    version: '1',})
                this.setState({membershipNumber:"", password:""})*/
                localStorage.setItem('user', AT.data.userName);
                alert('User found! Current user is: ' + AT.data.firstName +" "+ AT.data.lastName)
            }
        }   
        else {
            console.log("error msg")
            alert('Enten medlems nummeret eller passwordet er forkert')
        }
    }
    getUser = async () => {
        let users = await userServices.getusers();
        console.log(users);
    }
    render() {
        return (
            <ImageBackground
                source={require('../../assets/theme-image-3.jpg')}
                style={styles.backgroundImage}
                blurRadius={5}
            >
                <View width="80%" height="100%" style={styles.container}>
                    <View style={{width: '100%', height: '15%'}}/>
                    <Image
                        source={require('../../assets/logo.png')}
                        style={styles.logo}
                    />
                    <TextInput
                        name='membershipNumber'
                        value={this.state.membershipNumber}
                        placeholder='Medlemsnummer'
                        style={[styles.theme, styles.input]}
                        onChangeText={this.handleInputChangeMembershipNumber}
                        autoCompleteType='username'
                    />
                    <TextInput
                        name='password'
                        value={this.state.password}
                        placeholder='Adgangskode'
                        style={[styles.theme, styles.input]}
                        secureTextEntry={true}
                        onChangeText={this.handleInputChangePassword}
                        autoCompleteType='password'
                    />
                    <TouchableOpacity
                        title='Login'
                        type='outline'
                        style={[styles.theme, styles.button]}
                        onPress={this.onLogin}
                    >
                        <Text style={styles.text}> LOGIN </Text>
                    </TouchableOpacity>
                    <Text style={styles.smallText}>Har du ikke en bruger? <Text style={{textDecorationLine: 'underline'}}>Opret en her</Text></Text>

                    <Text style={[styles.smallText, {marginTop: 80}]}>Login med Sociale Netværk</Text>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                                                
                    }}>
                        <Image
                            source={require('../../assets/fb-logo.png')}
                            style={styles.socialmedialogo}
                        />
                        <Image
                            source={require('../../assets/twitter-logo.png')}
                            style={[styles.socialmedialogo, {width: 58, height: 58, marginRight: 20}]}
                        />
                    </View>
                </View>
            </ImageBackground>
        )
    }

}

const styles = StyleSheet.create({
    input: {
        marginVertical: 10,
        backgroundColor: 'white',
        borderColor: 'white',
        shadowColor: 'white'
    },

    button: {
        marginVertical: 10,
        marginTop: 40,
        backgroundColor: '#7a450c',
        borderColor: '#7a450c',
        shadowColor: '#7a450c',
        marginBottom: 15
    },

    theme: {
        padding: 18,
        paddingHorizontal: 30,
        width: '100%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 30,
        fontSize: 15,
        fontFamily: 'Avenir',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: { width: 2, height: 2}
    },

    text: {
        textAlign: 'center',
        color: 'white',
        fontSize: 15,
        fontFamily: 'Avenir'
    },

    smallText: {
        color: 'white',
        fontFamily: 'Avenir',
        opacity: 0.9,
        fontSize: 16
    },

    container: {
        alignItems: 'center',
        justifyContent: 'flex-start'
    },

    backgroundImage: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },

    logo: {
        resizeMode: 'contain',
        marginBottom: 110,
        padding: 35,
        marginRight: 20,
        width: '100%',
        height: "auto"
    },

    socialmedialogo: {
        resizeMode: 'stretch',
        width: 100,
        height: 100
    }
});