import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as ActionCreators from '../actions';

// 装饰器应该写在类声明上面
@connect(
  state => ({ counter: state.counter }),
  ActionCreators
)
class Counter extends Component { // eslint-disable-line

  static propTypes = {
    counter: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired
  };

  render() {
    const { counter, increment, decrement, incrementIfOdd, incrementAsync } = this.props;
    return (
      <p>
        Clicked: {counter} times
        {' '}
        <button onClick={increment}>+</button>
        {' '}
        <button onClick={decrement}>-</button>
        {' '}
        <button onClick={incrementIfOdd}>Increment if odd</button>
        {' '}
        {/* 这里必须写成箭头函数，否则incrementAsync中的delay参数将会是SyntheticEvent的实例*/}
        <button onClick={() => incrementAsync()}>Increment async</button>
      </p>
    );
  }
}

export default Counter;
