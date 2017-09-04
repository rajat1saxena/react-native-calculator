import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

export default class ExpressionBox extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Text style={styles.expressionbox}>{this.props.expression}</Text>
      );
  }
}

const styles = StyleSheet.create({
  expressionbox: {
    flex: 1,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: '#80cbc4',
    fontSize: 32,
    textAlign: 'right',
    color: '#212121',
  }
});
