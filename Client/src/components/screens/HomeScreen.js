import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

import ThemeButton from '../../components/elements/theme-elements/ThemeButton'
import GeneralTheme from '../../styles/GeneralTheme'

export default class HomePage extends Component {
    render() {
        return (
            <View style={GeneralTheme.container, {}}>
                <Text style={GeneralTheme.text}> Home Page </Text>
                <ThemeButton
                    marginTop={40}
                    marginBottom={15}
                    text={'Events'}
                    onPressMethod={this.onLogin}
                />
                <ThemeButton
                    marginTop={40}
                    marginBottom={15}
                    text={'Medlems side'}
                    onPressMethod={this.onLogin}
                />
            </View>
            
        )
    }
}




 

