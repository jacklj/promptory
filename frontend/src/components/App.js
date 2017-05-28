/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { wordInput: 'Enter your word here' };

    this.lookupWord = this.lookupWord.bind(this);
  }

  lookupWord() {
    console.warn('Word: ' + this.state.wordInput);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Promptory.
        </Text>
        <Text style={styles.instructions}>
          To get started, look up a word below.
        </Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, margin: 5, padding: 2}}
          onChangeText={(wordInput) => this.setState({wordInput})}
          value={this.state.wordInput}
        />
        <Button
          onPress={this.lookupWord}
          title="Go"
          color="#841584"
          accessibilityLabel="Look up the word here"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('App', () => App);
