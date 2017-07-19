import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './redux/reducer';
import Home from './components/Home';

const store = createStore(reducer);

const App = StackNavigator({
  Home: { screen: Home },
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
