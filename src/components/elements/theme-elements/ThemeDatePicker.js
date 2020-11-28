import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class ThemeDatePicker extends Component {


    render() {
        const name = this.props.name === undefined ? "" : this.props.name
        const placeholder = this.props.placeholder === undefined ? "" : this.props.placeholder
        const style = this.props.style === undefined ? {} : this.props.style
        const mode = this.props.mode === undefined ? 'date' : this.props.mode
        const minDate = this.props.minDate === undefined ? '' : this.props.minDate
        const maxDate = this.props.maxDate === undefined ? '' : this.props.maxDate
        const showIcon = this.props.showIcon === undefined ? false : this.props.showIcon

        const format = this.props.format === undefined ? 'DD-MM-YY' : this.props.format

        const margin = this.props.margin === undefined ? 0 : this.props.margin
    
        const marginVertical = this.props.marginVertical === undefined ? 0 : this.props.marginVertical
        const marginHorizontal = this.props.marginHorizontal === undefined ? 0 : this.props.marginHorizontal
    
        const marginTop = this.props.marginTop === undefined ? 0 : this.props.marginTop
        const marginBottom = this.props.marginBottom === undefined ? 0 : this.props.marginBottom
        const marginLeft = this.props.marginLeft === undefined ? 0 : this.props.marginLeft
        const marginRight = this.props.marginRight === undefined ? 0 : this.props.marginRight
    
        const themeColor = this.props.themeColor === undefined ? 'white' : this.props.themeColor

        return (
            <DatePicker
                name={name}
                placeholder={placeholder}
                onChangeText={(input) => this.props.callbackMethod(input)}
                mode={mode}
                minDate={minDate}
                maxDate={maxDate}
                format={format}
                showIcon={showIcon}

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
