import React, { Component } from 'react'
import { StyleSheet, View, ImageBackground } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

import Navigator from './navigation/Navigator'

export default class LamdaApp extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <ImageBackground
            source={require('../assets/theme-image-3.jpg')}
            style={styles.backgroundImage}
            blurRadius={5}
            >
                <View style={styles.container}>
                    <NavigationContainer>
                        <Navigator/>
                    </NavigationContainer>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40
    },

    backgroundImage: {
        width: '100%',
        height: '100%',
        alignItems: 'center'
    }
})