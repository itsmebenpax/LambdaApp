import React from 'react'
import { View, StyleSheet } from 'react-native'

import LambdaLogo from '../elements/logos/LambdaLogo'
import RegisterForm from '../../containers/RegisterForm'

const RegisterScreen = () => {
    return (
        <View style={styles.container}>
            <LambdaLogo width={200} marginVertical={80} marginBottom={40}/>
            <RegisterForm width={320}/>
        </View>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: 'contain',
        width: '100%',
        alignItems: 'center'
    }
})