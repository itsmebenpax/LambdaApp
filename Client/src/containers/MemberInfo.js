import React, { Component } from 'react'
import { StyleSheet, Text, ScrollView, SafeAreaView, Alert } from 'react-native'
import { connect } from 'react-redux'
import * as SecureStore from 'expo-secure-store';
import ThemeButton from '../components/elements/theme-elements/ThemeButton'
import ThemeTextInput from '../components/elements/theme-elements/ThemeTextInput'
import SelectInput from 'react-native-select-input-ios';
import GeneralTheme from '../styles/GeneralTheme'
import userServices from '../../Services/userServices'
import Loader from '../components/elements/theme-elements/Loader'
import {switch_to_member_info_screen} from '../actions'


export class MemberInfo extends Component {
    constructor(props){
        super(props)
        this.state = {
            Firstname: "",
            Lastname: "",
            Email: "",
            Address: "",
            City: "",
            Zip: "",
            Mobile: "",
            GenderCode: "",
            ReceiveSMS: "",
            ReceiveMails: "",
            password:"",
            reaped_password:"",
            requestObject: "",
            isLoading:true
        } 
        
    }
    fetchData = async() => {
        let userObject = JSON.parse(await userServices.getUserWithID(await SecureStore.getItemAsync('token')));
        this.setState({
            requestObject: userObject.resultdata.member,
            isLoading:false})
    }
componentDidMount = async() =>{
    this.fetchData();
    
        
}

onSubmit = async() =>{
    var data = {};
    for (const [key, value] of Object.entries(this.state)) {
        if(value != "" && (key != "requestObject" && key != "isLoading"))
        {
            if(key === 'password' && (this.state.password != this.state.reaped_password)){
                alert('Adgangskoden skal være ens!')
                this.setState({password:"", reaped_password:""})
                return
            } else {
                console.log(`${key} ${value}`);
                data[key] = value
                delete data.reaped_password
            }
        }
      }
      data.token = await SecureStore.getItemAsync('token');
      console.log("data", data)

      const edit = await userServices.updateUser(data);
      this.refresh();
      console.log("edir", edit)
}
refresh = () => {
    this.props.dispatch(switch_to_member_info_screen())
}
    render() {
        
        const genderOptions = [{value:-1, label:'Køn'},{ value: 0, label: 'Ikke angivet' }, {value: 1, label:'Mand'}, {value:2, label:'Kvinde'}, {value:3, label:'Ikke defineret'}]
        const SMSYNOptions = [{value:-1, label: 'Modtage smser'},{value:true, label: 'Ja tak'}, {value:false, label:'Nej tak'}]
        const EmailsYNOptions = [{value:-1, label: 'Modtage emails'},{value:true, label: 'Ja tak'}, {value:false, label:'Nej tak'}]
        return (
        <SafeAreaView style={[GeneralTheme.container,{width:'100%', height:'100%'}]}>
            <ScrollView contentContainerStyle={{width: this.props.width}}>
                <Loader isLoading={this.state.isLoading} />
                <Text style={GeneralTheme.smallText}>Indtast oplysninger</Text>
                <ThemeTextInput
                    name='Firstname'
                    placeholder={(this.state.requestObject.Firstname)}
                    style={styles.textInput}
                    onChangeText={(Firstname) => this.setState({Firstname})}
                    value={this.state.Firstname}
                    autoCompleteType='off'
                />
                <ThemeTextInput
                    name='Lastname'
                    value={(this.state.Lastname)}
                    placeholder={(this.state.requestObject.Lastname)}
                    style={styles.textInput}
                    onChangeText={(Lastname) => this.setState({Lastname})}
                    autoCompleteType='off'
                />
                <ThemeTextInput
                    name='Address'
                    value={this.state.Address}
                    placeholder={(this.state.requestObject.Address)}
                    style={styles.textInput}
                    onChangeText={(Address) => {this.setState({Address})}}
                    autoCompleteType='street-address'
                />
                <ThemeTextInput
                    name='Zip'
                    value={this.state.Zip}
                    placeholder={(this.state.requestObject.Zip)}
                    style={styles.textInput}
                    keyboardType='numeric'
                    onChangeText={(Zip) => this.setState({Zip})}
                    autoCompleteType='postal-code'
                />
                <ThemeTextInput
                    name='City'
                    value={this.state.City}
                    placeholder={(this.state.requestObject.City)}
                    style={styles.textInput}
                    onChangeText={(City) => this.setState({City})}
                    autoCompleteType='off'
                />
                <ThemeTextInput
                    name='Mobile'
                    value={this.state.Mobile}
                    placeholder={(this.state.requestObject.Mobile)}
                    keyboardType='phone-pad'
                    style={styles.textInput}
                    onChangeText={(Mobile) => this.setState({Mobile})}
                    autoCompleteType='tel'
                />

                <Text style={[GeneralTheme.smallText, {marginTop: 20}]}>Køn:</Text>
                <SelectInput
                    style={[GeneralTheme.theme, styles.selecter, styles.textInput]}
                    labelStyle={[styles.selectertext]}
                    value={this.state.requestObject.GenderCode} options={genderOptions}   
                    onValueChange={(GenderCode) => this.setState({GenderCode})}
                     
                />

                <Text style={[GeneralTheme.smallText, {marginTop: 20}]}>Vil du modtage sms'er?</Text>
                <SelectInput
                    style={[GeneralTheme.theme, styles.selecter, styles.textInput]}
                    labelStyle={[styles.selectertext]}
                    value={this.state.requestObject.ReceiveSMS} options={SMSYNOptions}   
                    onValueChange={(ReceiveSMS) => this.setState({ReceiveSMS})} 
                />

                <Text style={[GeneralTheme.smallText, {marginTop: 20}]}>Vil du modtage emails?</Text>
                <SelectInput
                    style={[GeneralTheme.theme, styles.selecter, styles.textInput]}
                    labelStyle={[styles.selectertext]}
                    value={this.state.requestObject.ReceiveMails} options={EmailsYNOptions}   
                    onValueChange={(ReceiveMails) => this.setState({ReceiveMails})} 
                />

                <Text style={[GeneralTheme.smallText, {marginTop: 20}]}>Opret ny adgangskode:</Text>
                <ThemeTextInput
                    name='password'
                    type='password'
                    value={this.state.password}
                    placeholder='Adgangskode'
                    secureTextEntry={true}
                    style={styles.textInput}
                    onChangeText={(password) => this.setState({password})}
                    autoCompleteType='off'
                />
                <ThemeTextInput
                    name='reaped_password'
                    type='password'
                    value={this.state.reaped_password}
                    placeholder='Bekræft adgangskode'
                    secureTextEntry={true}
                    style={styles.textInput}
                    onChangeText={(reaped_password) => this.setState({reaped_password})}
                    autoCompleteType='off'
                />
                <ThemeButton
                    title='Create'
                    type='outline'
                    style={[ GeneralTheme.themeButton, styles.textInput]}
                    onPressMethod={this.onSubmit}
                    text='Opdater oplysninger'>
                </ThemeButton>
            </ScrollView>
        </SafeAreaView>
            
        )
        
    }
}
const styles = StyleSheet.create({
    textInput:{
        marginTop:10
    },
    selecter:{
        backgroundColor:'white',
    },
    selectertext:{
        fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'normal',
        opacity: 0.2,
        //fontSize: 12,
        
    }


})

export default connect()(MemberInfo)
