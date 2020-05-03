import React, { Component } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Overlay from 'react-native-modal-overlay';
import GeneralTheme from '../../../styles/GeneralTheme'
export class Loader extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <View>
                <Overlay visible={this.props.isLoading} containerStyle={GeneralTheme.overlay} childrenWrapperStyle={GeneralTheme.overlay_kid}>
                    <ActivityIndicator size="large" color="#0000ff" animating={this.props.isLoading}/>
                </Overlay> 
            </View>
        )
    }
}

export default connect()(Loader)
