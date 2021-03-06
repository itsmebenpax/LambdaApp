import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './src/store'
import LamdaApp from './src/LamdaApp'

export default class App extends Component{

  render() {
    console.disableYellowBox = true;
    return(
      <Provider store={store} >
        <LamdaApp/>
      </Provider>
    );
  }
}
