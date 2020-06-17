import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

import ThemeButton from '../../components/elements/theme-elements/ThemeButton'
import GeneralTheme from '../../styles/GeneralTheme'

import * as SecureStore from 'expo-secure-store'

import {connect} from 'react-redux'
import {
    switch_to_home_screen, switch_to_member_card_screen,
    switch_to_member_info_screen, switch_to_event_screen, switch_to_login_screen
} from '../../actions'

class HomeScreen extends Component {
    constructor(props) {
        super(props)
    }

    logout = () => {
        console.log(this.props);
        SecureStore.deleteItemAsync("token");
        this.props.dispatch(switch_to_login_screen());
    }

    render() {
        console.log('Hello from homeScreen')
        return (
            <View style={{paddingTop:50, height:'80%', alignItems:'center'}}>
                <Text style={GeneralTheme.Headertext}>Tilbud i baren på Lørdag!</Text>

                <Text style={[GeneralTheme.text, {width: '80%', textAlign: 'left', lineHeight:30}]}>
                    Der er Mexicaner-Tema i denne weekend og i den anledning
                    sælger vi: {"\n\n"}
                    
                    {"\t"}2 Tequila Sunrise for 45 kr {"\n"}
                    {"\t"}10 Tequila Shots for 80 kr {"\n\n"}
                    
                    Tilbudende gælder hele natten, gå ind på eventsiden for at 
                    og tryk deltag, så er du med i konkurrencen om et gratis 
                    barkort!

                    Vi ses i baren!
                </Text>

                <ThemeButton
                    title='logout'
                    type='outline'
                    style={[GeneralTheme.bigThemeButton]}
                    onPressMethod={this.logout}
                    text='Log ud'
                />
            </View>
        )
    }
}

export default connect()(HomeScreen)


 

