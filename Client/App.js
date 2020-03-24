import React, { Component } from 'react'
import { StyleSheet, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//import of screens
import HomePage from './components/pages/HomePage';
import MemberPage from './components/pages/MemberPage'
import LoginPage from './components/pages/LoginPage'
import CreateLoginPage from './components/pages/CreateLoginPage'

//let isRegisterMembership = false;

function HomeScreen() {
  return (
    <View style={styles.container}>
      <HomePage/>
    </View>
  )
}

function MemberScreen() {
  return (
    <View style={styles.container}>
      <MemberPage/>
    </View>
  )
}

const TabNavigator = createBottomTabNavigator();
let isLoggedIn = false;
let isRegisteringUser = false;

export default class App extends Component{
  render() {
    return(
      <View>
        {isLoggedIn ? 
          (
            <NavigationContainer>
              <TabNavigator.Navigator>
                <TabNavigator.Screen name="Forside" component={HomeScreen}/>
                <TabNavigator.Screen name="Medlemskort" component={MemberScreen}/>
              </TabNavigator.Navigator>
            </NavigationContainer>
          ) : isRegisteringUser ? 
            (
              <CreateLoginPage/>
            ) : (
              <HomePage/>
            )
        }
      </View>
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
