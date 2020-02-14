import * as React from 'react';
import { StyleSheet,Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function member_page({navigation}) {
        return (
            <View style={styles.page}>
                <View style={styles.Avatar}>
                    <Text>BP</Text>
                </View>
                <Text> Benjamin </Text>
                <Button title="Login" onPress={() => navigation.navigate('Login')} />
            </View>
        )
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
