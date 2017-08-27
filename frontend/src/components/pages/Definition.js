import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';
import { connect } from 'react-redux';

class Definition extends Component {
  static navigationOptions = {
    title: 'Definition',
  };

  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
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
        <Text style={{ fontStyle: 'italic' }}>
          definition
        </Text>
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
