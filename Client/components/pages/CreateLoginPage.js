import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class CreateLoginPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> textInComponent </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        marginVertical: 10,
        backgroundColor: 'white',
        borderColor: 'white',
        shadowColor: 'white'
    },

    button: {
        marginVertical: 10,
        marginTop: 40,
        backgroundColor: '#7a450c',
        borderColor: '#7a450c',
        shadowColor: '#7a450c',
        marginBottom: 15
    },

    theme: {
        padding: 18,
        paddingHorizontal: 30,
        width: '100%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 30,
        fontSize: 15,
        fontFamily: 'Avenir',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: { width: 2, height: 2}
    },

    text: {
        textAlign: 'center',
        color: 'white',
        fontSize: 15,
        fontFamily: 'Avenir'
    },

    smallText: {
        color: 'white',
        fontFamily: 'Avenir',
        opacity: 0.9,
        fontSize: 16
    },

    container: {
        alignItems: 'center',
        justifyContent: 'flex-start'
    },

    backgroundImage: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },

    logo: {
        resizeMode: 'contain',
        marginBottom: 110,
        padding: 35,
        marginRight: 20,
        width: '100%',
        height: "auto"
    },

    socialmedialogo: {
        resizeMode: 'stretch',
        width: 100,
        height: 100
    }
});