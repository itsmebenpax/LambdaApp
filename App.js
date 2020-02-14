import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginPage from './components/pages/LoginPage';
import Member_page from './components/pages/member_page';
import Login_page from './components/pages/login_page';
import MemberPage from './components/pages/MemberPage'

import 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();


export default function App({}){
  return(
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Login">
          <Tab.Screen name="Login" component={Login_page}/>
          <Tab.Screen name="Member page" component={Member_page} options={{title:'Overview'}}/>
        </Tab.Navigator>   
      </NavigationContainer>
      <MemberPage info="">
          <Text>Hello from app.js</Text>
      </MemberPage>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
