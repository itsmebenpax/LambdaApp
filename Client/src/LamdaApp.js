import React, { Component } from 'react'
import { StyleSheet, View, ImageBackground } from 'react-native'
//import { createBottomTabNavigator } from 'react-navigation-tabs'

import LoginScreen from './components/screens/LoginScreen'
import CreatePage from './components/screens/CreatePage'

export default class LamdaApp extends Component {
    render() {
        let isLoggedIn = false;
        let isRegisteringUser = false;

        //const TabNavigator = createBottomTabNavigator();

        return (
            <ImageBackground
            source={require('../assets/theme-image-3.jpg')}
            style={styles.backgroundImage}
            blurRadius={5}
            >
                <View style={styles.container}>
                {isLoggedIn ? 
                (
                    {/* <NavigationContainer>
                        <TabNavigator.Navigator>
                            <TabNavigator.Screen name="Forside" component={HomeScreen}/>
                            <TabNavigator.Screen name="Medlemskort" component={MemberScreen}/>
                        </TabNavigator.Navigator>
                    </NavigationContainer> */}
                ) : isRegisteringUser ? 
                    (
                    <CreatePage/>
                    ) : (
                    <LoginScreen/>
                    )
                }
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40
    },

    backgroundImage: {
        width: '100%',
        height: '100%',
        alignItems: 'center'
    }
})