import React, { Component } from 'react'
import { Text, View } from 'react-native'

import SignupFrom from '../elements/SignupFrom';

export default class CreatePage extends Component {
    render() {
        return (
            <View>
                <SignupFrom />
            </View>
        )
    }
}
