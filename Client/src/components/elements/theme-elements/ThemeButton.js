import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import GeneralTheme from '../../../styles/GeneralTheme'

const ThemeButton = (props) => {
    const title = props.title === undefined ? "" : props.title
    const text = props.text === undefined ? "" : props.text
    const style = props.style === undefined ? {} : props.style
    const type = props.type === undefined ? "outline" : props.type

    const margin = props.margin === undefined ? 0 : props.margin

    const marginVertical = props.marginVertical === undefined ? 0 : props.marginVertical
    const marginHorizontal = props.marginHorizontal === undefined ? 0 : props.marginHorizontal

    const marginTop = props.marginTop === undefined ? 0 : props.marginTop
    const marginBottom = props.marginBottom === undefined ? 0 : props.marginBottom
    const marginLeft = props.marginLeft === undefined ? 0 : props.marginLeft
    const marginRight = props.marginRight === undefined ? 0 : props.marginRight

    const themeColor = props.themeColor === undefined ? '#7a450c' : props.themeColor

    const onPressMethod = props.onPressMethod

    return (
        <TouchableOpacity
            title={title}
            type={type}
            onPress={() => onPressMethod()}
            style={[GeneralTheme.theme, {
                margin: margin,
                marginVertical: marginVertical,
                marginHorizontal: marginHorizontal,
                marginTop: marginVertical === 0 ? marginTop : marginTop !== 0 ? marginTop : marginVertical,
                marginBottom: marginVertical === 0 ? marginBottom : marginBottom !== 0 ? marginBottom : marginVertical,
                marginLeft: marginHorizontal === 0 ? marginLeft : marginLeft !== 0 ? marginLeft : marginHorizontal,
                marginRight: marginHorizontal === 0 ? marginRight : marginRight !== 0 ? marginRight : marginHorizontal,
                backgroundColor: themeColor,
                borderColor: themeColor,
                shadowColor: themeColor,
            }, style]}
        >
            <Text style={GeneralTheme.text}> {text} </Text>
        </TouchableOpacity>
    )
 
}

export default ThemeButton