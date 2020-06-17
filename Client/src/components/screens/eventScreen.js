import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {WebView} from 'react-native-webview'
import PropTypes from 'prop-types'


import {connect} from 'react-redux'
import {
    switch_to_home_screen, switch_to_member_card_screen,
    switch_to_member_info_screen, switch_to_event_screen
} from '../../actions'

const EventScreen = () => {
        return (
            <WebView
                style={styles.Web} 
                source={{html: 
                    '<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Flambda.odense&tabs=events&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=955094988008436" width="100%" height="80%" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>'}}
                />
        )

}
const styles = StyleSheet.create({
    Web:{
        width: '190%',
        height:'30%',
        backgroundColor: 'transparent'
    }
}
)
export default connect()(EventScreen)
