import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native';


export default class NavBar extends Component{
    render(){
        const {navigation} = this.props;
        return (
            <View style={styles.navbar}>
                <Button
                title="open drawer"
                onPress={() => navigation.toggleDrawer()} />
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
