import { combineReducers } from 'redux';
import undoable, { includeAction } from 'redux-undo';
import counter from './counter';
import { INCREMENT_COUNTER, DECREMENT_COUNTER, UNDO_COUNTER, REDO_COUNTER } from '../actions';

const rootReducer = combineReducers({
  counter: undoable(counter, {
    filter: includeAction([INCREMENT_COUNTER, DECREMENT_COUNTER]),
    limit: 10,
    debug: true,
    undoType: UNDO_COUNTER,
    redoType: REDO_COUNTER
  })
});

export default rootReducer;
