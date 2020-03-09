import React, {Component} from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default class hhhh extends Component {
    render() {
        const {navigation} = this.props;
        return (
            <View style={{flex:1}}>
                <Text> hhhh </Text>
                <Button
                title="open drawer"
                onPress={() => navigation.toggleDrawer()} />
                </View>
            
        )
    }
}
const styles = StyleSheet.create({
    Web:{
        width: '190%',
    }
})



 

