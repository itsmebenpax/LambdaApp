import React, { Component } from 'react'
import { StyleSheet, Text, ScrollView, SafeAreaView } from 'react-native'
import { connect } from 'react-redux'
import * as SecureStore from 'expo-secure-store';
import ThemeButton from '../components/elements/theme-elements/ThemeButton'
import ThemeTextInput from '../components/elements/theme-elements/ThemeTextInput'
import SelectInput from 'react-native-select-input-ios';
import GeneralTheme from '../styles/GeneralTheme'
import userServices from '../../Services/userServices'

export class MemberInfo extends Component {
    constructor(props){
        super(props)
        this.state = {
            user: '',
            isLoading:true
        }
    }
componentDidMount = async() =>{
    let userObject = JSON.parse(await userServices.getUserWithID(await SecureStore.getItemAsync('token')));
    this.setState({user: userObject.resultdata.member})
}

onSubmit = async() =>{
    alert('Hello')
}

    render() {
        console.log('User: ', this.state.user.Firstname)
        const genderOptions = [{value:-1, label:'Køn'},{ value: 0, label: 'Ikke angivet' }, {value: 1, label:'Mand'}, {value:2, label:'Kvinde'}, {value:3, label:'Ikke defineret'}]
        const SMSYNOptions = [{value:-1, label: 'Modtage smser'},{value:1, label: 'Ja tak'}, {value:0, label:'Nej tak'}]
        const EmailsYNOptions = [{value:-1, label: 'Modtage emails'},{value:1, label: 'Ja tak'}, {value:0, label:'Nej tak'}]
        return (
        <SafeAreaView style={GeneralTheme.container}>
            <ScrollView contentContainerStyle={{width: this.props.width}}>
                <Text style={GeneralTheme.smallText}>Indtast oplysninger</Text>
                <ThemeTextInput
                    name='firstName'
                    placeholder={(this.state.user.Firstname)}
                    style={styles.textInput}
                    onChangeText={(firstName) => this.setState({firstName})}
                    value={this.state.user.Firstname}
                    autoCompleteType='username'
                />
                <ThemeTextInput
                    name='lastName'
                    value={this.state.lastName}
                    placeholder='Efternavn'
                    style={styles.textInput}
                    onChangeText={(lastName) => this.setState({lastName})}
                    autoCompleteType='username'
                />
                <ThemeTextInput
                    name='email'
                    value={this.state.email}
                    placeholder='Email'
                    style={styles.textInput}
                    keyboardType='email-address'
                    onChangeText={(email) => this.setState({email})}
                    autoCompleteType='email'
                />
                <ThemeTextInput
                    name='address'
                    value={this.state.address}
                    placeholder='Adresse'
                    style={styles.textInput}
                    onChangeText={(address) => {this.setState({address})}}
                    autoCompleteType='street-address'
                />
                <ThemeTextInput
                    name='zip'
                    value={this.state.zip}
                    placeholder='Post nummer'
                    style={styles.textInput}
                    keyboardType='numeric'
                    onChangeText={(zip) => this.setState({zip})}
                    autoCompleteType='postal-code'
                />
                <ThemeTextInput
                    name='city'
                    value={this.state.city}
                    placeholder='By'
                    style={styles.textInput}
                    onChangeText={(city) => this.setState({city})}
                    autoCompleteType='off'
                />
                <ThemeTextInput
                    name='phone_number'
                    value={this.state.phone_number}
                    placeholder='Telefon nummber'
                    keyboardType='phone-pad'
                    style={styles.textInput}
                    onChangeText={(phone_number) => this.setState({phone_number})}
                    autoCompleteType='tel'
                />
                <SelectInput
                    style={[GeneralTheme.theme, styles.selecter, styles.textInput]}
                    labelStyle={[styles.selectertext]}
                    value={this.state.user} options={genderOptions}   
                    onValueChange={(gender) => this.setState({gender})}
                     
                />
                <SelectInput
                    style={[GeneralTheme.theme, styles.selecter, styles.textInput]}
                    labelStyle={[styles.selectertext]}
                    value={this.state.sms} options={SMSYNOptions}   
                    onValueChange={(sms) => this.setState({sms})} 
                />
                <SelectInput
                    style={[GeneralTheme.theme, styles.selecter, styles.textInput]}
                    labelStyle={[styles.selectertext]}
                    value={this.state.emails} options={EmailsYNOptions}   
                    onValueChange={(emails) => this.setState({emails})} 
                />
                
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
                    placeholder='Genag adgangskode'
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
        fontFamily: 'Avenir',
        opacity: 0.2,
        fontSize: 12,
        
    }


})

export default connect()(MemberInfo)
