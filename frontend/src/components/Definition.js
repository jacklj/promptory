import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';
import { connect } from 'react-redux';

import lookUpWord from '../services/dictionaryLookup';

class Definition extends Component {
  static navigationOptions = {
    title: 'Definition',
  };

  static renderResults(results) {
    const jsx = [];
    for (const i = 0; i < results.length; i += 1) {
      const result = results[i];
      const jsxItem = (
        <View>
          <Text style={{ fontSize: 12, fontStyle: 'italic' }}>
            {result.partOfSpeech}
          </Text>
          <Text style={{ fontStyle: 15 }}>
            {result.definition}
          </Text>
        </View>
      );
    }
  }

  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);

    const results = lookupWord(props.word);
    this.state = {
      results,
    };
  }

  goBack() {
    const { goBack } = this.props.navigation;
    goBack(null);
  }

  render() {
    return (
      <View>
        <Text style={{ fontSize: 20 }}>
          {this.props.word}:
        </Text>
        {Definition.renderResults(this.state.results)}
        <Button
          onPress={this.goBack}
          title="< Back"
          color="#841584"
          accessibilityLabel="Look up another word"
        />
      </View>
    );
  }
}

Definition.propTypes = {
  word: React.PropTypes.string.isRequired,
  // react navigation
  /* eslint-disable react/forbid-prop-types */
  navigation: React.PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
};

const mapStateToProps = state => ({
  word: state.word,
});

export default connect(mapStateToProps)(Definition);
