import Counter from '../components/Counter';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ActionCreators from '../actions';

export default connect(
  state => ({ counter: state.counter }),
  dispatch => bindActionCreators(ActionCreators, dispatch)
)(Counter);
