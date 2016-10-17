import Counter from '../components/Counter';
import { connect } from 'react-redux';
import * as ActionCreators from '../actions';

export default connect(
  state => ({ counter: state.counter }),
  ActionCreators
)(Counter);
