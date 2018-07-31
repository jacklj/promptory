import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Card extends Component {
  render() {
    return (
      <View style={{ backgroundColor: '#841584' }}>
        <View>
          <Text>A flashcard title</Text>
        </View>
        <View>
          <Text>A flashcard content</Text>
        </View>
      </View>
    );
  }
}

Card.propTypes = {
  word: React.PropTypes.string.isRequired,
  definition: React.PropTypes.string.isRequired,
};
