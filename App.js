import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Member_page from './components/pages/member_page'

export default function App() {
  return (
    <Member_page info="">
        <Text>Hello from app.js</Text>
    </Member_page>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
