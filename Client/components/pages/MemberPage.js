import React, { Component } from 'react'
import { StyleSheet,Text, View, Button, TextInput } from 'react-native';

import Axios from 'axios';

export default class MemberPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            memberShipNumber:null,
            expireDate: "",
        }
        
    }
    /*componentWillMount(){
        var res = Axios.get('http://localhost:9000/api');
        console.log(res)
    }*/

    getUser = async () => {
        var user = await Axios.get('http://localhost:9000/api')
        this.setState({expireDate: user.data})
        console.log("member", user.data)
    }

    render() {
        return (
            <View style={styles}>
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
    container: {
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    Avatar:{
        height:100,
        width:100,
        marginTop: 180,
        borderRadius: 50,
        backgroundColor: 'gray',
        justifyContent:'center',
        alignItems:'center',
        fontSize:50,
    }
})
