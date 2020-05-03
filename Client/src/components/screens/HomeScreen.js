import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

import ThemeButton from '../../components/elements/theme-elements/ThemeButton'
import GeneralTheme from '../../styles/GeneralTheme'

export default class HomePage extends Component {
    render() {
        console.log('Hello fro homeScreen')
        return (
            <View style={{flex:1, alignContent:'center', justifyContent:'center'}}>
                <Text style={{color:'White'}}>Hello</Text>
            </View>
        )
        
    }
}




 

