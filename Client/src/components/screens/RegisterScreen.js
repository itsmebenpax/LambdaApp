import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import GeneralTheme from '../../styles/GeneralTheme'
import ThemeButton from '../elements/theme-elements/ThemeButton'
import BackButton from '../elements/theme-elements/BackButton'

 
import LambdaLogo from '../elements/logos/LambdaLogo'
import RegisterForm from '../../containers/RegisterForm'
import SignupFrom from '../../containers/SignupFrom';
import { connect } from 'react-redux'
import {switch_to_login_screen } from '../../actions'



class RegisterScreen extends Component {
    state = {
        screen: "register"
    }
    
    switch_screens = (props) => {
        this.setState({screen: props.screen})
    }
     
    render(){
        if(this.state.screen === 'register')
        {
        return (
            <View style={GeneralTheme.container}>
                <BackButton
                    text='Tilbage' 
                    onPressMethod={() => {this.props.dispatch(switch_to_login_screen())}}
                    />
                <LambdaLogo width={200} marginVertical={80} marginBottom={40}/>
                <View width={320}>
                
                
                <ThemeButton
                    marginTop={40}
                    marginBottom={15}
                    text={'Er du medlem af Lambda men ikke af denne app'}
                    onPressMethod={() => {this.setState({screen:'user'})}}
                />
                <ThemeButton
                    marginTop={40}
                    marginBottom={15}
                    text={'Er du ikke medlem af lambda endnu'}
                    onPressMethod={() => {this.setState({screen:'member'})}}
                />
                </View>
            </View>
        );
        } else if(this.state.screen ==='user')
        {
            return(
                <View style={GeneralTheme.container}>
                    <BackButton
                    text='Tilbage' 
                    onPressMethod={() => {this.setState({screen:'register'})}}
                    />
                    <LambdaLogo width={200} marginVertical={80} marginBottom={20}/>
                    <RegisterForm width={320}/>
                </View>
            ) 
        } else if(this.state.screen ==='member')
        {
            return(
                <View style={GeneralTheme.container}>
                    <BackButton
                    text='Tilbage' 
                    onPressMethod={() => {this.setState({screen:'register'})}}
                    />
                    <LambdaLogo width={200} marginVertical={80} marginBottom={20}/>
                    <SignupFrom width={320}/> 
                </View>
            )
        }
    }  
}
export default connect()(RegisterScreen)