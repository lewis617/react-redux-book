import { combineReducers } from 'redux';
import counter from './counter';

/**
 * 虽然本例中只有一个reducer，但还是使用了`combineReducers`来进行合并，便于后期的拓展。
 * 在进行合并后，计数器的数值将被转移到`state.counter`中。
 */

const rootReducer = combineReducers({
  counter,
});

export default rootReducer;
