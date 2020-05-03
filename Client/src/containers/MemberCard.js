import React, { Component } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

import { connect } from 'react-redux'
import * as SecureStore from 'expo-secure-store';

import GeneralTheme from '../styles/GeneralTheme'
import userServices from '../../Services/userServices'
import Loader from '../components/elements/theme-elements/Loader'

export class MemberCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            user: '',
            isLoading:true
        }
    }
componentDidMount = async() =>{
    let userObject = JSON.parse(await userServices.getUserWithID(await SecureStore.getItemAsync('token')));
    console.log("MC: ",userObject)
    this.setState({user: userObject.resultdata.member, isLoading: false})
    
}

    render() {
        console.log("state: ",this.state.user)
        return (
            <View style={[GeneralTheme.container]}>
                <Loader isLoading={this.state.isLoading} />
                <Text style={[GeneralTheme.Headertext]}> Medlems kort </Text>
                <Text style={[GeneralTheme.cardText]}> {this.state.user.Fullname} </Text>
                <Text style={[GeneralTheme.cardText]}> {this.state.user.Email} </Text>
                <Text style={[GeneralTheme.cardText]}> {this.state.user.MemberID} </Text>
                <Text style={[GeneralTheme.cardText]}> {this.state.user.MemberType}</Text>
            </View>
        )
        
    }
}


export default connect()(MemberCard)
