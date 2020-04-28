import React, { Component } from 'react'
import { TextInput } from 'react-native'

import GeneralTheme from '../../../styles/GeneralTheme'

class ThemeTextInput extends Component {

    constructor(props) {
        super(props);
        state = {
            text: ''
        }
    }

    getInput = () => {
        console.log(this.state.text)
        return this.state.text
    }

    render() {
        const name = this.props.name === undefined ? "" : this.props.name
        const placeholder = this.props.placeholder === undefined ? "" : this.props.placeholder
        const style = this.props.style === undefined ? {} : this.props.style
        const secureTextEntry = this.props.type === "password" ? true : false
        const type = this.props.type === undefined ? "" : this.props.type
    
        const margin = this.props.margin === undefined ? 0 : this.props.margin
    
        const marginVertical = this.props.marginVertical === undefined ? 0 : this.props.marginVertical
        const marginHorizontal = this.props.marginHorizontal === undefined ? 0 : this.props.marginHorizontal
    
        const marginTop = this.props.marginTop === undefined ? 0 : this.props.marginTop
        const marginBottom = this.props.marginBottom === undefined ? 0 : this.props.marginBottom
        const marginLeft = this.props.marginLeft === undefined ? 0 : this.props.marginLeft
        const marginRight = this.props.marginRight === undefined ? 0 : this.props.marginRight
    
        const themeColor = this.props.themeColor === undefined ? 'white' : this.props.themeColor

        return (
            <TextInput
                name={name}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                autoCompleteType={type}
                callbackMethod={(input) => this.props.callbackMethod(input)}
    
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
                    shadowColor: themeColor
                }, style]}
            />
        )
    }
    
}

export default ThemeTextInput
