import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


import LoginPage from './components/pages/LoginPage';
import MemberPage from './components/pages/MemberPage'





export default function App({}){
  return(
    <View style={styles.container}>
      <MemberPage />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
