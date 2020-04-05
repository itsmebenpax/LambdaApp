import React from 'react'
import { View, StyleSheet } from 'react-native'

import LambdaLogo from '../elements/logos/LambdaLogo'
import LoginForm from '../../containers/LoginForm'

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <LambdaLogo width={200} marginVertical={80}/>
            <LoginForm width={320}/>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: 'contain',
        width: '100%',
        alignItems: 'center'
    }
})