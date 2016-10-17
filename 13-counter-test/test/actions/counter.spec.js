import expect from 'expect';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../actions';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);


describe('actions', () => {
  describe('counter', () => {
    it('increment should create increment action', () => {
      expect(actions.increment()).toEqual({ type: actions.INCREMENT_COUNTER });
    });

    it('decrement should create decrement action', () => {
      expect(actions.decrement()).toEqual({ type: actions.DECREMENT_COUNTER });
    });

    it('incrementIfOdd should create increment action', () => {
      const expectedActions = [
        { type: actions.INCREMENT_COUNTER }
      ];
      const store = mockStore({ counter: 1 });
      store.dispatch(actions.incrementIfOdd());
      expect(store.getActions()).toEqual(expectedActions);
    });

    it('incrementIfOdd shouldnt create increment action if counter is even', () => {
      const expectedActions = [];
      const store = mockStore({ counter: 2 });
      store.dispatch(actions.incrementIfOdd());
      expect(store.getActions()).toEqual(expectedActions);
    });

    it('incrementAsync should create increment action', done => {
      const expectedActions = [
        { type: actions.INCREMENT_COUNTER }
      ];
      const store = mockStore({ counter: 0 });
      store.dispatch(actions.incrementAsync(100));
      setTimeout(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      }, 100);
    });
  });
});
