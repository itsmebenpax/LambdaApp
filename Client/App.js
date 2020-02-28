import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

//import of screens
import HomePage from './components/pages/HomePage';
import MemberPage from './components/pages/MemberPage'
import LoginPage from './components/pages/LoginPage'
import NavBar from './components/elements/NavBar'
import { Header } from 'react-native-elements';

const Navigation = createDrawerNavigator();

export default class App extends Component{
  render(){
    return(
        <NavigationContainer>
          <Header 
            rightComponent={{icon: 'menu'}}
            />
          <Navigation.Navigator drawerStyle={{backgroundColor:'gray',}} drawerType='front' initialRouteName='Home' drawerPosition='right'>
            <Navigation.Screen name='Home' component={HomePage} />
            <Navigation.Screen name='Mamber page' component={MemberPage} />
            <Navigation.Screen name='Login' component={LoginPage} />
          </Navigation.Navigator>
        </NavigationContainer>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  navbar: {
    justifyContent: 'center',
    alignItems:'center',
    height: "10%",
    backgroundColor: "#00d822"
}
});
