import { connect } from 'react-redux';
import * as ActionCreators from '../actions';
import Counter from '../components/Counter';

export default connect(
  state => ({ counter: state.counter }),
  ActionCreators
)(Counter);
