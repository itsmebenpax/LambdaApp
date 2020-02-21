import React, { Component } from 'react'
import { StyleSheet,Text, View, Button, TextInput } from 'react-native';

import Backend from '../../fake-backend/LoginInformation'

export default class MemberPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            memberShipNumber:null,
            expireDate: "",
        }
        
    }
    

    getUser = () => {
        var user = Backend.getUser(this.state.name);
        this.setState({
            name: user.name,
            memberShipNumber: user.memberShipNumber,
            expireDate: user.expireDate,
        });
        console.log(this.state);
        console.log(user)
    }

    render() {
        return (
            <View style={styles.page}>
                <View style={styles.Avatar}>
                    <Text>{this.state.name.charAt(0)}</Text>
                </View>
                <Text>{this.state.name}</Text>
                <Text>{this.state.memberShipNumber}</Text>
                <Text>{this.state.expireDate}</Text>
                <TextInput
                name='medlemsnummer'
                placeholder='Medlems navn'
                style={styles.input}
                onChangeText={(name) => this.setState({name})}/>
                <Button onPress={this.getUser} title="get"/> 
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
