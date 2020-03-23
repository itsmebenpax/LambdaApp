import React, { Component } from 'react'
import { StyleSheet, View, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createSwitchNavigator } from 'react-navigation'

//import of screens
import HomePage from './components/pages/HomePage';
import MemberPage from './components/pages/MemberPage'
import LoginPage from './components/pages/LoginPage'
import CreateLoginPage from './components/pages/CreateLoginPage'
import { Header } from 'react-native-elements';

const Navigation = createDrawerNavigator();

function toggleDrawer({navigation}) {
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={()=>navigation.toggleDrawer()} title="Go back home" />
    </View>
  )
}

export default class App extends Component{
  render() {
    return(
      <AppSwitchNavigator />
    );
  }
}

const AppSwitchNavigator = createSwitchNavigator ({
  Login: LoginPage,
  Register: CreateLoginPage,
  Home: HomePage,
  MemberCard: MemberPage
})

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
