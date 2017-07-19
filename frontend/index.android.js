import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import App from './src/App';

export default class Promptory extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('Promptory', () => Promptory);
