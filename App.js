import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Member_page from './components/pages/member_page';
import Login_page from './components/pages/login_page';

import 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();


export default function App({}){
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Login">
        <Tab.Screen name="Login" component={Login_page}/>
        <Tab.Screen name="Member page" component={Member_page} options={{title:'Overview'}}/>
      </Tab.Navigator>   
    </NavigationContainer>

  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
