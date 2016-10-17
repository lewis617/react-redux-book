import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as ActionCreators from '../actions';

function Counter({ increment, decrement, undo, redo, value }) {
  return (
    <p>
      Clicked: {value} times
      {' '}
      <button onClick={increment}>+</button>
      {' '}
      <button onClick={decrement}>-</button>
      {' '}
      <button onClick={undo}>Undo</button>
      {' '}
      <button onClick={redo}>Redo</button>
    </p>
  );
}

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  undo: PropTypes.func.isRequired,
  redo: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
};

export default connect(
  state => ({ value: state.counter.present }),
  ActionCreators
)(Counter);
