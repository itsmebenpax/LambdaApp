import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

import ThemeButton from '../../components/elements/theme-elements/ThemeButton'
import GeneralTheme from '../../styles/GeneralTheme'

import {connect} from 'react-redux'
import {
    switch_to_home_screen, switch_to_member_card_screen,
    switch_to_member_info_screen, switch_to_event_screen
} from '../../actions'

const HomeScreen = () => {
    console.log('Hello from homeScreen')
    return (
        <View style={{paddingTop:50, height:'80%', alignItems:'center'}}>
            <Text style={{color:'white', fontSize:25}}>Hallo from Lambda</Text>
        </View>
    )
}
export default connect()(HomeScreen)




 

