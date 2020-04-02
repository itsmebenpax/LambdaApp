import React, { Component } from 'react'
import { StyleSheet, View, Button, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//import of screens
import HomePage from './components/pages/HomePage';
import MemberPage from './components/pages/MemberPage'
import LoginPage from './components/pages/LoginPage'
import CreateLoginPage from './components/pages/CreateLoginPage'

import { connect } from 'react-redux';
import { login } from './actions/login'
import { bindActionCreators } from 'redux'

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';

const RNRedux = () => (
  <Provider store = { store }>
    <App/>
  </Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux)

import configureStore from './store/configureStore'
const store = configureStore()

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
//let isLoggedIn = false;
let isRegisteringUser = false;

class App extends Component{
  render() {
    const { isLoggedIn } = this.props;
    return(
      <Provider store={store}>
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
              <LoginPage/>
            )
        }

      </Provider>
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

const mapStateToProps = state => ({
  count: state.count
})

const ActionCreators = Object.assign(
  {},
  login
)

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)