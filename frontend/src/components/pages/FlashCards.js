import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class FlashCards extends Component {
  render() {
    return (
      <View>
        <View style={{ fontSize: 20 }}>
          <Text>Flashcards</Text>
        </View>
        <View>
          <View style={{ backgroundColor: '#841584' }}>
            <View>
              <Text>A flashcard title</Text>
            </View>
            <View>
              <Text>A flashcard content</Text>
            </View>
          </View>
          <View>
            <Text>A flashcard title</Text>
          </View>
          <View>
            <Text>A flashcard content</Text>
          </View>
        </View>
      </View>
    );
  }
}
