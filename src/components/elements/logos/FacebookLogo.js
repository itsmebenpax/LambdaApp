import React from 'react'
import { Image } from 'react-native'

const FacebookLogo = (props) => {
    return (
        <Image
            source={require('../../../../assets/Facebook_Logo.png')}
            style={{
                width: props.size,
                height: props.size,
                resizeMode: 'stretch',
                margin: props.margin
            }}
        />
    )
}

export default FacebookLogo

