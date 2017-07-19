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

// Register root components - AppRegistry is the JS entry point to running RN apps
AppRegistry.registerComponent('Promptory', () => Promptory);
