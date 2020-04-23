import React from 'react'
import { View, StyleSheet } from 'react-native'
import GeneralTheme from '../../styles/GeneralTheme'

import LambdaLogo from '../elements/logos/LambdaLogo'
import RegisterForm from '../../containers/RegisterForm'

const RegisterScreen = () => {
    return (
        <View style={GeneralTheme.container}>
            <LambdaLogo width={200} marginVertical={80} marginBottom={40}/>
            <RegisterForm width={320}/>
        </View>
    )
}









export default RegisterScreen

