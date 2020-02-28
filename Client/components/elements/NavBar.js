import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native';


export default class NavBar extends Component{
    render(){
        const {navigation} = this.props;
        return (
            <View style={styles.navbar}>
                <Text> textInComponent </Text>
                <Button
                title="open drawer"
                onPress={() => navigation.openDrawer()} />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    navbar: {
        justifyContent: 'center',
        alignItems:'center',
        height: "10%",
        backgroundColor: "#00d822"
    }
})
