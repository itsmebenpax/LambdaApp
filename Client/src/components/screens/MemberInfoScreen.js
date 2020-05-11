import React from 'react'
import { View } from 'react-native'

import GeneralTheme from '../../styles/GeneralTheme'
import LambdaLogo from '../elements/logos/LambdaLogo'
//import MemberCard from '../../containers/MemberCard'
import MemberInfo from '../../containers/MemberInfo'

import {connect} from 'react-redux'
import {
    switch_to_home_screen, switch_to_member_card_screen,
    switch_to_member_info_screen, switch_to_event_screen
} from '../../actions'

const MemberInfoScreen = () => {
    return (
        <View style={[GeneralTheme.container,{height:'100%', width:'100%'}]}>
            <LambdaLogo width={200} marginVertical={80}/>
            <MemberInfo width={320}/>
        </View>
    )
}

export default connect()(MemberInfoScreen)