import React, { Component } from 'react'
import { Text, View } from 'react-native'

import LambdaLogo from '../elements/logos/LambdaLogo'
import SignupFrom from '../../containers/SignupFrom';

class CreatePage extends Component {
    render() {
        return (
            <View>
                <SignupFrom />
            </View>
        )
    }
}
export default CreatePage