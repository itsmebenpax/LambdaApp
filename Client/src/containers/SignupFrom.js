import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'

import userServices from '../../Services/userServices'
import { register_memberr } from '../actions';
import { connect } from 'react-redux';

class SignupFrom extends Component {
    constructor(props) {
        super(props);
        
        register_memberr.bind(this)
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

    onGet = async () => {
        let data = {membership_number: this.state.membership_number};
        const user = await userServices.getUserWithID(data);
        alert("User with MN: " + user.membership_number + " and email: " + user.email + " was found")
        
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
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headerText}>Indtast oplysninger</Text>
                <TextInput
                    name='membership_number'
                    placeholder='Medlems Nummber'
                    style={[styles.theme, styles.input]}
                    onChangeText={(membership_number) => this.setState({membership_number})}
                    value={this.state.membership_number}
                    autoCompleteType='off'
                />
                <TextInput
                    name='firstName'
                    placeholder='Fornavn'
                    style={[styles.theme, styles.input]}
                    onChangeText={(firstName) => this.setState({firstName})}
                    value={this.state.firstName}
                    autoCompleteType='username'
                />
                <TextInput
                    name='lastName'
                    value={this.state.lastName}
                    placeholder='Efternavn'
                    style={[styles.theme, styles.input]}
                    onChangeText={(lastName) => this.setState({lastName})}
                    autoCompleteType='username'
                />
                <TextInput
                    name='email'
                    value={this.state.email}
                    placeholder='Email'
                    style={[styles.theme, styles.input]}
                    onChangeText={(email) => this.setState({email})}
                    autoCompleteType='email'
                />
                <TextInput
                    name='address'
                    value={this.state.address}
                    placeholder='Adresse'
                    style={[styles.theme, styles.input]}
                    onChangeText={(address) => {this.setState({address})}}
                    autoCompleteType='street-address'
                />
                <TextInput
                    name='postel_code'
                    value={this.state.postel_code}
                    placeholder='Post nummer'
                    style={[styles.theme, styles.input]}
                    onChangeText={(postel_code) => this.setState({postel_code})}
                    autoCompleteType='postal-code'
                />
                <TextInput
                    name='city'
                    value={this.state.city}
                    placeholder='By'
                    style={[styles.theme, styles.input]}
                    onChangeText={(city) => this.setState({city})}
                    autoCompleteType='off'
                />
                <TextInput
                    name='phone_number'
                    value={this.state.phone_number}
                    placeholder='Telefon nummber'
                    style={[styles.theme, styles.input]}
                    onChangeText={(phone_number) => this.setState({phone_number})}
                    autoCompleteType='tel'
                />
                <TextInput
                    name='birthday'
                    value={this.state.birthday}
                    placeholder='Fødselsdag'
                    style={[styles.theme, styles.input]}
                    onChangeText={(birthday) => this.setState({birthday})}
                    autoCompleteType='off'
                />
                <TextInput
                    name='gender'
                    value={this.state.gender}
                    placeholder='Køn'
                    style={[styles.theme, styles.input]}
                    onChangeText={(gender) => this.setState({gender})}
                    autoCompleteType='off'
                />
                <TextInput
                    name='password'
                    value={this.state.password}
                    placeholder='Adgangskode'
                    style={[styles.theme, styles.input]}
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({password})}
                    autoCompleteType='off'
                />
                <TextInput
                    name='reaped_password'
                    value={this.state.reaped_password}
                    placeholder='Genag adgangskode'
                    style={[styles.theme, styles.input]}
                    secureTextEntry={true}
                    onChangeText={(reaped_password) => this.setState({reaped_password})}
                    autoCompleteType='off'
                />
                <TouchableOpacity
                    title='Create'
                    type='outline'
                    style={[styles.theme, styles.button]}
                    onPress={this.onCreate}>
                    <Text style={styles.text}> Opret bruger </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        marginVertical: 10,
        backgroundColor: 'white',
        borderColor: 'white',
        shadowColor: 'white',
        
    },
    button: {
        marginVertical: 10,
        marginTop: 30,
        backgroundColor: '#7a450c',
        borderColor: '#7a450c',
        shadowColor: '#7a450c',
        marginBottom: 15,
        justifyContent:'center',
        
    },
    theme: {
        height:30,
        paddingHorizontal: 30,
        width: '70%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 30,
        fontSize: 15,
        fontFamily: 'Avenir',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: { width: 2, height: 2}
    },
    text: {
        textAlign: 'center',
        color: '#000',
        fontSize: 15,
        fontFamily: 'Avenir'
    },
    headerText: {
        textAlign: 'center',
        color: '#000',
        fontSize: 20,
        fontFamily: 'Avenir'
    },
    container: {
        marginTop:20,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
})
export default connect()(SignupFrom)