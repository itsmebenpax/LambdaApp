import React from 'react'
import { Image } from 'react-native'

const TwitterLogo = (props) => {
    return (
        <Image
            source={require('../../../../assets/Twitter_Logo.png')}
            style={{
                width: props.size,
                height: props.size,
                resizeMode: 'stretch',
                margin: props.margin
            }}
        />
    )
}

export default TwitterLogo
