import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ImageBackground, Image} from 'react-native'
import {Input, withTheme} from 'react-native-elements';

// fake backend import
import login from '../../fake-backend/LoginInformation'

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            medlemsnummer: "",
            adgangskode: ""
        }
    }

    handleInputChange = (key) => (event) => {
        console.log(event)
        console.log(key)
        console.log(event.nativeEvent.text)
        console.log(this.state.medlemsnummer)
        this.setState({
            [key]: event.nativeEvent.text
        })
        this.props.onChange(event)
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
                        name='medlemsnummer'
                        placeholder='Medlemsnummer'
                        style={[styles.theme, styles.input]}
                        onChange={this.handleInputChange('medlemsnummer')}
                        autoCompleteType='username'
                    />
                    <TextInput
                        name='adgangskode'
                        placeholder='Adgangskode'
                        style={[styles.theme, styles.input]}
                        secureTextEntry={true}
                        autoCompleteType='password'
                    />
                    <TouchableOpacity
                        title='Login'
                        type='outline'
                        style={[styles.theme, styles.button]}
                    >
                        <Text style={styles.text}> LOGIN </Text>
                    </TouchableOpacity>
                    <Text style={styles.smallText}>Opret en bruger her</Text>
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
        opacity: 0.7
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
        marginVertical: 80,
        marginTop: 50,
        padding: 35,
        marginRight: 20,
        width: '100%'
    }
});