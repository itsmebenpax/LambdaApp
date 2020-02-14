import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

<<<<<<< HEAD
import Member_page from './components/pages/member_page';
import Login_page from './components/pages/login_page';
=======
import MemberPage from './components/pages/MemberPage'
>>>>>>> b257908f33c4866d5598ea4a1a0c063926c1fe2f

import 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();


export default function App({}){
  return (
<<<<<<< HEAD
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Login">
        <Tab.Screen name="Login" component={Login_page}/>
        <Tab.Screen name="Member page" component={Member_page} options={{title:'Overview'}}/>
      </Tab.Navigator>   
    </NavigationContainer>

=======
    <MemberPage info="">
        <Text>Hello from app.js</Text>
    </MemberPage>
>>>>>>> b257908f33c4866d5598ea4a1a0c063926c1fe2f
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
