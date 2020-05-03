import React, { Component } from 'react'
import { Text, StyleSheet, ScrollView } from 'react-native'

import userServices from '../../Services/userServices'

import LambdaLogo from '../components/elements/logos/LambdaLogo'

import { connect } from 'react-redux';
import GeneralTheme from '../styles/GeneralTheme';
import ThemeTextInput from '../components/elements/theme-elements/ThemeTextInput';
import ThemeButton from '../components/elements/theme-elements/ThemeButton';
import { switch_to_register_screen } from '../actions';

import DatePicker from 'react-native-datepicker'

class SignupForm extends Component {
    constructor(props) {
        super(props);
        
    }
    state = {
        membership_number:'',
        firstName: '',
        lastName:'',
        email:'',
        address:'',
        city:'',
        postel_code:'',
        phone_number: '',
        birthday:'',
        gender:'',
        password: '',
        reaped_password:''
    }

    onCreate = async () => {
        if(this.state.reaped_password != this.state.password)
        {
            alert('Adgangskoden skal være ens!')
        } else {
            let data = {
                membership_number: this.state.membership_number,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                address: this.state.address,
                city: this.state.city,
                postel_code: this.state.postel_code,
                phone_number: this.state.phone_number,
                birthday: this.state.birthday,
                gender: this.state.gender,
                password: this.state.password,
            }
            const res = await userServices.createUser(data);
            if(res === 200)
            alert("User have been created!");
            
        }
        
    } 

    switchToRegisterScreen = () => {
        this.props.dispatch(switch_to_register_screen())
    }

    render() {
        return (
            <ScrollView
                contentContainerStyle={[styles.container, {width: this.props.width}]}
                showsVerticalScrollIndicator={false}
            >

                <LambdaLogo width={200} marginVertical={40}/>

                <Text style={GeneralTheme.text}>Indtast oplysninger</Text>

                <ThemeTextInput
                    marginVertical={10}
                    type={'name'}
                    name='name'
                    placeholder='Fornavn'
                    callbackMethod={() => {}}
                />

                <ThemeTextInput
                    marginVertical={10}
                    type={'off'}
                    name='surname'
                    placeholder='Efternavn'
                    callbackMethod={() => {}}
                />

                <ThemeTextInput
                    marginVertical={10}
                    type={'email'}
                    name='email'
                    placeholder='Email'
                    callbackMethod={() => {}}
                />

                <ThemeTextInput
                    marginVertical={10}
                    type={'street-address'}
                    name='street_address'
                    placeholder='Adresse'
                    callbackMethod={() => {}}
                />

                <ThemeTextInput
                    marginVertical={10}
                    type={'postal-code'}
                    name='postal_code'
                    placeholder='Post nummer'
                    callbackMethod={() => {}}
                />

                <ThemeTextInput
                    marginVertical={10}
                    type={'off'}
                    name='city'
                    placeholder='By'
                    callbackMethod={() => {}}
                />

                <ThemeTextInput
                    marginVertical={10}
                    type={'tel'}
                    name='phone_number'
                    placeholder='Telefonnummer'
                    callbackMethod={() => {}}
                />

                <ThemeTextInput
                    marginVertical={10}
                    type={'off'}
                    name=''
                    placeholder='Fødselsdag'
                    callbackMethod={() => {}}
                />

                <ThemeTextInput
                    marginVertical={10}
                    type={'off'}
                    name=''
                    placeholder='Køn'
                    callbackMethod={() => {}}
                />

                <ThemeTextInput
                    marginVertical={10}
                    type={'username'}
                    name='membership_number'
                    placeholder='Medlemsnummer'
                    callbackMethod={() => {}}
                />

                <ThemeTextInput
                    marginVertical={10}
                    type={'password'}
                    name='password'
                    placeholder='Ny adgangskode'
                    callbackMethod={() => {}}
                />

                <ThemeTextInput
                    marginVertical={10}
                    type={'password'}
                    name='repeated_password'
                    placeholder='Bekræft ny adgangskode'
                    callbackMethod={() => {}}
                />

                <ThemeButton
                    marginVertical={40}
                    marginTop={60}
                    text={'MELD DIG IND'}
                    onPress={() => {}}
                />

                <ThemeButton
                    marginTop={20}
                    marginBottom={15}
                    text={'Tilbage til log ind'}
                    onPressMethod={this.switchToRegisterScreen}
                />

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        resizeMode: 'contain',
        alignItems: 'center'
    }
})
export default connect()(SignupForm)