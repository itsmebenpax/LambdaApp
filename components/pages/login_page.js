import * as React from 'react';
import { StyleSheet,Text, View, Button } from 'react-native'

import Member_page from './member_page'

export default function login_page({navigation}) {
        return (
            <View style={styles.texxtt}>
                <Text>Login</Text>
            </View>
        )
    }

    const styles = StyleSheet.create({
        texxtt:{
            flex:1,
            alignItems: 'center',
            justifyContent: 'center',
        }
    });