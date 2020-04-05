import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'

import FacebookLogo from '../components/elements/logos/FacebookLogo'
import TwitterLogo from '../components/elements/logos/TwitterLogo'
import ThemeTextInput from '../components/elements/theme-elements/ThemeTextInput'

export default class LoginForm extends Component {

    render() {
        return (
            <View style={[styles.container, {width: this.props.width}]}>
                
                <ThemeTextInput
                    marginVertical={10}
                    type={'username'}
                    name={'user'}
                    placeholder={'Medlemsnummer eller e-mail'}
                />

                <ThemeTextInput
                    marginVertical={10}
                    type={'password'}
                    name={'password'}
                    placeholder={'Adgangskode'}
                />

                <TouchableOpacity
                    title='Login'
                    type='outline'
                    style={[styles.theme, styles.button]}
                >
                    <Text style={styles.text}> LOGIN </Text>
                </TouchableOpacity>

                <Text style={styles.smallText}>Har du ikke en bruger? <Text style={{textDecorationLine: 'underline'}}>Opret en her</Text></Text>

                <Text style={[styles.smallText, {marginTop: 80}]}>Login med Sociale Netværk</Text>

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
    },

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

    socialmedialogo: {
        resizeMode: 'stretch',
        margin: 20,
        width: 60,
        height: 60
    }
})