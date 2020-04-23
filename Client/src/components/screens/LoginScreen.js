import React from 'react'
import { View } from 'react-native'
import GeneralTheme from '../../styles/GeneralTheme'

import LambdaLogo from '../elements/logos/LambdaLogo'
import LoginForm from '../../containers/LoginForm'

const LoginScreen = () => {
    return (
        <View style={GeneralTheme.container}>
            <LambdaLogo width={200} marginVertical={80}/>
            <LoginForm width={320}/>
        </View>
    )
}

export default LoginScreen