import React, {Component} from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default class HomePage extends Component {
    render() {
        const {navigation} = this.props;
        return (
            <View style={{flex:1}}>
                <Text> Home Page </Text>
                <Button
                title="open drawer"
                onPress={() => navigation.toggleDrawer()} />
                <WebView style={styles.Web} originWhitelist={['*']} source={{html: '<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Flambda.odense&tabs=events&width=500&height=700&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=955094988008436" width="700" height="850" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>'}}/>
            </View>
            
        )
    }
}
const styles = StyleSheet.create({
    Web:{
        width: '190%',
    }
})



 

