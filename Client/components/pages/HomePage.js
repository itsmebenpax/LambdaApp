import React, {Component} from 'react';
import { Text, View, Button } from 'react-native';

export default class HomePage extends Component {
    render() {
        const {navigation} = this.props;
        return (
            <View style={{alignItems:'center', marginTop:50}}>
                <Text> Home Page </Text>
                <Button
                title="open drawer"
                onPress={() => navigation.toggleDrawer()} />
            </View>
        )
    }
}

 

