import React from 'react'
import { Image, ShadowPropTypesIOS } from 'react-native'


const LambdaLogo = (props) => {
    const aspectRatio = 1597 / 634
    const width = props.width
    const height = width / aspectRatio

    const margin = props.margin === undefined ? 0 : props.margin
    
    const marginVertical = props.marginVertical === undefined ? 0 : props.marginVertical
    const marginHorizontal = props.marginHorizontal === undefined ? 0 : props.marginHorizontal

    const marginTop = props.marginTop === undefined ? 0 : props.marginTop
    const marginBottom = props.marginBottom === undefined ? 0 : props.marginBottom
    const marginLeft = props.marginLeft === undefined ? 0 : props.marginLeft
    const marginRight = props.marginRight === undefined ? 0 : props.marginRight

    return (
        <Image
            source={require('../../../../assets/logo.png')}
            resizeMode='stretch'
            style={{
                height: height,
                width: width,
                margin: margin,
                marginVertical: marginVertical,
                marginHorizontal: marginHorizontal,
                marginTop: marginVertical === 0 ? marginTop : marginTop !== 0 ? marginTop : marginVertical,
                marginBottom: marginVertical === 0 ? marginBottom : marginBottom !== 0 ? marginBottom : marginVertical,
                marginLeft: marginHorizontal === 0 ? marginLeft : marginLeft !== 0 ? marginLeft : marginHorizontal,
                marginRight: marginHorizontal === 0 ? marginRight : marginRight !== 0 ? marginRight : marginHorizontal
            }}
        />
    )
}

export default LambdaLogo
