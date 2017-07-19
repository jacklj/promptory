import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import devToolsEnhancer from 'remote-redux-devtools';
// TODO: only have devTools on dev, not prod. JackLJ 19/7/2017

import reducer from './redux/reducer';
import Home from './components/Home';
import Definition from './components/Definition';

const store = createStore(reducer, devToolsEnhancer());

const App = StackNavigator({
  Home: { screen: Home },
  Definition: { screen: Definition },
});

export default class ReduxWrappedApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
