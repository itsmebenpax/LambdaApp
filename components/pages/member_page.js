import React, { Component } from 'react'
import { StyleSheet,Text, View } from 'react-native';

export default class member_page extends Component {
    render() {
        return (
            <View style={styles.page}>
                <View style={styles.Avatar}>
                    <Text>BP</Text>
                </View>
                <Text> Benjamin </Text>
                <Text></Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    page:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Avatar:{
        height:100,
        width:100,
        borderRadius: 50,
        backgroundColor: 'gray',
        justifyContent:'center',
        alignItems:'center',
        fontSize:50,
    }
})
