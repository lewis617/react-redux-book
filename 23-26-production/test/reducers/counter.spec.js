import expect from 'expect';
import counter from '../../src/reducers/counter';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../../src/actions/counter';

describe('reducers', () => {
  describe('counter', () => {
    it('should handle INCREMENT_COUNTER action', () => {
      expect(counter({
        value: 0
      }, { type: INCREMENT_COUNTER })).toEqual({
        value: 1
      });
    });

    it('should handle DECREMENT_COUNTER action', () => {
      expect(counter({
        value: 1
      }, { type: DECREMENT_COUNTER })).toEqual({
        value: 0
      });
    });

    it('should ignore unknown actions', () => {
      expect(counter({
        value: 0
      }, { type: 'unknown' })).toEqual({
        value: 0
      });
    });
  });
});
