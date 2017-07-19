import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';
import { connect } from 'react-redux';

import { changeWord } from '../redux/actions';

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
    fontStyle: 'italic',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

class Home extends Component {
  static navigationOptions = {
    title: 'Promptory Home',
  };

  constructor(props) {
    super(props);
    this.state = {
      wordInput: '',
    };

    this.lookupWord = this.lookupWord.bind(this);
  }

  lookupWord() {
    console.warn(`Word: ${this.props.word}`);
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
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 5, padding: 2 }}
          onChangeText={wordInput => this.props.changeWord(wordInput)}
          placeholder="Type a word here"
          value={this.props.word}
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

Home.propTypes = {
  word: React.PropTypes.string.isRequired,
  // action creators
  changeWord: React.PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  word: state.word,
});

const mapDispatchToProps = {
  changeWord,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
