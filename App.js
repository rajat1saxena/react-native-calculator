import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Constants } from 'expo';

import ExpressionBox from './components/ExpressionBox.js';
import ResultBox from './components/ResultBox.js';
import NumPad from './components/NumPad.js';

// We are using math.js library to calculate results from any string expression
const math = require('mathjs');

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {lastexpression: [], expression: '', result: ''}

    this._assembleExpression = this._assembleExpression.bind(this);
    this._calculateResult = this._calculateResult.bind(this);
    this._rollbackExpression = this._rollbackExpression.bind(this);
  }

  _rollbackExpression() {
    this.state.expression && this.setState((prevState) => ({
      expression: prevState.lastexpression.pop(),
      lastexpression: prevState.lastexpression
    }));
  }

  _assembleExpression(symbol) {
    this.setState((prevState) => ({
      lastexpression: [...prevState.lastexpression, prevState.expression],
      expression: prevState.expression + symbol
    }));
  }

  _calculateResult() {
    let result;
    try {
      result = math.eval(this.state.expression);
    } catch (e) {
      result = 'Error';
    }
    this.setState({result: result});
  }

  render() {
    return (
      <View style={styles.container}>
        <ExpressionBox expression={this.state.expression}/>
        <ResultBox result={this.state.result}/>
        <NumPad
          assembleExpression={this._assembleExpression}
          calculateResult={this._calculateResult}
          deletePressed={this._rollbackExpression}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
