import React, { Component } from 'react'
import { Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import SelectInput from 'react-native-select-input-ios';

import userServices from '../../Services/userServices'
import ThemeButton from '../components/elements/theme-elements/ThemeButton'
import ThemeTextInput from '../components/elements/theme-elements/ThemeTextInput'
import GeneralTheme from '../styles/GeneralTheme'
import { connect } from 'react-redux';
import {switch_to_login_screen} from '../actions'

class SignupFrom extends Component {
    constructor(props) {
        super(props);
        
    }
    state = {
        firstName: '',
        lastName:'',
        email:'',
        address:'',
        city:'',
        zip:'',
        phone_number: '',
        birthday:'',
        gender:-1,
        password: '',
        reaped_password:'',
        membertypeID:71,
        sms:-1,
        emails:-1,
        

    }
    onCreate = async () => {
        console.log("signup: ",this.state)
        if(this.state.password != '' || this.state.firstName != '' || this.state.email != '')
        {
            let data = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                address: this.state.address,
                city: this.state.city,
                zip: this.state.zip,
                mobil_number: this.state.phone_number,
                birthday: this.state.birthday,
                gender: this.state.gender,
                password: this.state.password,
                membertypeID: this.state.membertypeID,
                sms: this.state.sms,
                emails: this.state.emails,
            }
            const res = await userServices.createMember(data);
            if(res === 200)
            alert("User have been created!");
            this.switchToLoginScreen();
        }else if(this.state.reaped_password != this.state.password)
        {
            alert('Adgangskoden skal være ens!')
        } else {
            alert('Alle felter skal være udfyldt')
        }
        
    } 

    switchToLoginScreen = () => {
        this.props.dispatch(switch_to_login_screen())
    }
    render() {
        const genderOptions = [{value:-1, label:'Køn'},{ value: 0, label: 'Ikke angivet' }, {value: 1, label:'Mand'}, {value:2, label:'Kvinde'}, {value:3, label:'Ikke defineret'}]
        const SMSYNOptions = [{value:-1, label: 'Modtage smser'},{value:1, label: 'Ja tak'}, {value:0, label:'Nej tak'}]
        const EmailsYNOptions = [{value:-1, label: 'Modtage emails'},{value:1, label: 'Ja tak'}, {value:0, label:'Nej tak'}]
        return (
        <SafeAreaView style={GeneralTheme.container}>
            <ScrollView contentContainerStyle={{width: this.props.width}}>
                <Text style={GeneralTheme.smallText}>Indtast oplysninger</Text>
                <ThemeTextInput
                    name='firstName'
                    placeholder='Fornavn'
                    style={styles.textInput}
                    onChangeText={(firstName) => this.setState({firstName})}
                    value={this.state.firstName}
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
                <ThemeTextInput
                    name='birthday'
                    value={this.state.birthday}
                    placeholder='Fødselsdag (dd-mm-yyyy)'
                    style={styles.textInput}
                    onChangeText={(birthday) => this.setState({birthday})}
                    autoCompleteType='off'
                />
                <SelectInput
                    style={[GeneralTheme.theme, styles.selecter, styles.textInput]}
                    labelStyle={[styles.selectertext]}
                    value={this.state.gender} options={genderOptions}   
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
                    onPressMethod={this.onCreate}
                    text='Opret bruger'>
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

export default connect()(SignupFrom)