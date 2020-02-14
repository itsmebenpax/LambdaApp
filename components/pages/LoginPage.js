import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import {Input} from 'react-native-elements';

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View width="80%" height="100%" style={styles.container}>
                <Input
                    placeholder='Medlemsnummer'
                    containerStyle={styles.input}
                />
                <Input
                    placeholder='Adgangskode'
                    containerStyle={styles.input}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        padding: 10
    },

    container: {
        alignItems: 'center',
        justifyContent: 'center',
    }
});