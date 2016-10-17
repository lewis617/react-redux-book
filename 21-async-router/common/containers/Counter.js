import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';

@connect(
  state => ({ state }),
  actionCreators
)
class Counter extends Component { // eslint-disable-line

  static propTypes = {
    increment: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    load: PropTypes.func.isRequired,
    state: PropTypes.object.isRequired
  };

  render() {
    const {
      increment, decrement, incrementIfOdd, incrementAsync, state, load
    } = this.props;
    return (
      <div>
        <button onClick={increment}>+</button>
        {' '}
        <button onClick={decrement}>-</button>
        {' '}
        <button onClick={incrementIfOdd}>Increment if odd</button>
        {' '}
        <button onClick={() => incrementAsync()}>Increment async</button>
        {' '}
        <button onClick={load}>load</button>
        <br/><br/>
        程序当前的state:
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    );
  }
}

export default Counter;
