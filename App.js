import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginPage from './components/pages/LoginPage';
import MemberPage from './components/pages/MemberPage'

import 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();


export default function App({}){
  return(
    <View style={styles.container}>
      <LoginPage/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
