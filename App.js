import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MemberPage from './components/pages/MemberPage'

export default function App() {
  return (
    <MemberPage info="">
        <Text>Hello from app.js</Text>
    </MemberPage>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
