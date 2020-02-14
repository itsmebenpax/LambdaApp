import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 250,
        borderColor: 'gray',
        borderWidth: 1
    }
});

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    onChangeText = (text) => {
        
    }

    render() {
        return (
            <View>
                <TextInput
                    style={styles.input}
                    placeholder="Mail eller medlemsnummer"
                    onChangeText={text => this.setState({text})}
                    value={this.state.text}
                />
                <TextInput
                    style={styles.input}
                    placeholder=""
                />
            </View>
        )
    }
}
