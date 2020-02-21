import React, { Component } from 'react'
import { StyleSheet, View, TextInput, Button} from 'react-native'
import {Input} from 'react-native-elements';

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
            <View width="80%" height="100%" style={styles.container}>
                <TextInput
                    name='medlemsnummer'
                    placeholder='Medlemsnummer'
                    style={styles.input}
                    onChange={this.handleInputChange('medlemsnummer')}
                    autoCompleteType='username'
                />
                <TextInput
                    name='adgangskode'
                    placeholder='Adgangskode'
                    style={styles.input}
                    secureTextEntry={true}
                    autoCompleteType='password'
                />
                <Button
                    title='Login'
                    type='outline'
                    style={styles.button}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    input: {
        padding: 15,
        width: '100%',
        borderStyle: 'solid',
        borderWidth: 1,
        marginVertical: 10
    },

    button: {
        padding: 15,
        marginVertical: 10,
        width: '100%',
        borderStyle: 'solid',
        borderWidth: 1,
        marginVertical: 10
    },

    container: {
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    }
});