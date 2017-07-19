import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';
import { connect } from 'react-redux';

import { changeWord } from '../redux/actions';
import styles from './Home.styles';

class Home extends Component {
  static navigationOptions = {
    title: 'Promptory Home',
  };

  constructor(props) {
    super(props);
    this.onWordChange = this.onWordChange.bind(this);
    this.lookupWord = this.lookupWord.bind(this);
  }

  onWordChange(word) {
    this.props.changeWord(word);
  }

  lookupWord() {
    const { navigate } = this.props.navigation;
    navigate('Definition');
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
          style={styles.input}
          onChangeText={this.onWordChange}
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
  // react navigation
  /* eslint-disable react/forbid-prop-types */
  navigation: React.PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
};

const mapStateToProps = state => ({
  word: state.word,
});

const mapDispatchToProps = {
  changeWord,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
