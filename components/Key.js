import React from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

export default class Key extends React.Component {
  constructor(props) {
    super(props);
    this._onPress = this._onPress.bind(this);
  }

  _onPress() {
    this.props.echoSymbol(this.props.symbol);
  }

  render() {
    return (
      <TouchableHighlight
        style={this.props.op ? [styles.key, styles.opkey] : styles.key}
        onPress={this._onPress}>
        <View>
          <Text style={this.props.op && styles.opkeytext}>
            {this.props.symbol}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  key: {
    borderRadius: 30,
    backgroundColor: '#b2fef7',
    borderColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
  },
  opkey: {
    backgroundColor: '#4f9a94',
    marginRight: 10,
  },
  opkeytext: {
    color: '#ffffff',
  },
});
