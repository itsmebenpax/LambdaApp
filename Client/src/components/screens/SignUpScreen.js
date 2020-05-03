import React from 'react'
import { View, StyleSheet } from 'react-native'
import GeneralTheme from '../../styles/GeneralTheme'

import SignupForm from '../../containers/SignupForm'

const SignUpScreen = () => {
    return (
        <View style={GeneralTheme.container}>
            <SignupForm width={320}/>
        </View>
    )
}

export default SignUpScreen

