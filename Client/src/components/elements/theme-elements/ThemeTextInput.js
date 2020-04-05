import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const ThemeTextInput = (props) => {
    const name = props.name === undefined ? "" : props.name
    const placeholder = props.placeholder === undefined ? "" : props.placeholder
    const style = props.style === undefined ? {} : props.style
    const secureTextEntry = props.type === "password" ? true : false
    const type = props.type === undefined ? "" : props.type

    const margin = props.margin === undefined ? 0 : props.margin

    const marginVertical = props.marginVertical === undefined ? 0 : props.marginVertical
    const marginHorizontal = props.marginHorizontal === undefined ? 0 : props.marginHorizontal

    const marginTop = props.marginTop === undefined ? 0 : props.marginTop
    const marginBottom = props.marginBottom === undefined ? 0 : props.marginBottom
    const marginLeft = props.marginLeft === undefined ? 0 : props.marginLeft
    const marginRight = props.marginRight === undefined ? 0 : props.marginRight

    const themeColor = props.themeColor === undefined ? 'white' : props.themeColor

    return (
        <TextInput
            name={name}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            autoCompleteType={type}

            style={[styles.theme, {
                margin: margin,
                marginVertical: marginVertical,
                marginHorizontal: marginHorizontal,
                marginTop: marginVertical === 0 ? marginTop : marginTop !== 0 ? marginTop : marginVertical,
                marginBottom: marginVertical === 0 ? marginBottom : marginBottom !== 0 ? marginBottom : marginVertical,
                marginLeft: marginHorizontal === 0 ? marginLeft : marginLeft !== 0 ? marginLeft : marginHorizontal,
                marginRight: marginHorizontal === 0 ? marginRight : marginRight !== 0 ? marginRight : marginHorizontal,
                backgroundColor: themeColor,
                borderColor: themeColor,
                shadowColor: themeColor
            }, style]}
        />
    )
}

export default ThemeTextInput

const styles = StyleSheet.create({
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
    }
})