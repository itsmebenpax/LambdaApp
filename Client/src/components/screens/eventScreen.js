import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'


export class eventScreen extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <WebView 
                    style={styles.Web} 
                    source={{html: '<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Flambda.odense&tabs=events&width=500&height=350&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=955094988008436" width="700" height="300" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>'}}/>
        )
    }
}
const styles = StyleSheet.create({
    Web:{
        width: '190%',
        height:'30%',
    }
})
const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(eventScreen)
