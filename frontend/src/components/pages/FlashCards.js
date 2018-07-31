import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Card from '../ui-tools/Card';

export default class FlashCards extends Component {
  render() {
    return (
      <View>
        <View style={{ fontSize: 20 }}>
          <Text>Flashcards</Text>
        </View>
        <View>
          <Card
            word="Establishment"
            definition="Blah blahs b alssal hsalhbsalhb. jnkjnsd jsdn kjfn."
          />
          <Card
            word="Card"
            definition="yaka yaka yaka"
          />
        </View>
      </View>
    );
  }
}
