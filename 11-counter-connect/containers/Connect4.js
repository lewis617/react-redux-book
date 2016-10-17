import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, incrementIfOdd, incrementAsync } from '../actions';

function Counter({ counter, dispatch }) {
  return (
    <p>
      Clicked: {counter} times
      {' '}
      <button onClick={() => dispatch(increment())}>+</button>
      {' '}
      <button onClick={() => dispatch(decrement())}>-</button>
      {' '}
      <button onClick={() => dispatch(incrementIfOdd())}>Increment if odd</button>
      {' '}
      <button onClick={() => dispatch(incrementAsync())}>Increment async</button>
    </p>
  );
}

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect(
  state => ({ counter: state.counter })
)(Counter);
