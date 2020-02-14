import * as React from 'react';
import { StyleSheet,Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

<<<<<<< HEAD:components/pages/member_page.js
export default function member_page({navigation}) {
=======
export default class MemberPage extends Component {
    render() {
>>>>>>> b257908f33c4866d5598ea4a1a0c063926c1fe2f:components/pages/MemberPage.js
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
