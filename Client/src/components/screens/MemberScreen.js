import React from 'react'
import { View } from 'react-native'

import GeneralTheme from '../../styles/GeneralTheme'
import LambdaLogo from '../elements/logos/LambdaLogo'
//import MemberCard from '../../containers/MemberCard'
import Memberinfo from '../../containers/MemberInfo'

const MemberScreen = () => {
    return (
        <View style={GeneralTheme.container}>
            <LambdaLogo width={200} marginVertical={80}/>
            <Memberinfo width={320}/>
        </View>
    )
}

export default MemberScreen