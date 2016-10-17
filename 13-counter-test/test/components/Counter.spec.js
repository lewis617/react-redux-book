import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import Counter from '../../components/Counter';

function setup(counter = 0) {
  const actions = {
    increment: expect.createSpy(),
    incrementIfOdd: expect.createSpy(),
    incrementAsync: expect.createSpy(),
    decrement: expect.createSpy()
  };
  const component = shallow(
    <Counter counter={counter} {...actions} />
  );

  return {
    component,
    actions,
    buttons: component.find('button'),
    p: component.find('p')
  };
}

describe('components', () => {
  describe('Counter', () => {
    it('should display count', () => {
      const { p } = setup();
      expect(p.text()).toMatch(/^Clicked: 0 times/);
    });

    it('first button should call increment', () => {
      const { buttons, actions } = setup();
      buttons.at(0).simulate('click');
      expect(actions.increment).toHaveBeenCalled();
    });

    it('second button should call decrement', () => {
      const { buttons, actions } = setup();
      buttons.at(1).simulate('click');
      expect(actions.decrement).toHaveBeenCalled();
    });

    it('third button should call incrementIfOdd', () => {
      const { buttons, actions } = setup(43);
      buttons.at(2).simulate('click');
      expect(actions.incrementIfOdd).toHaveBeenCalled();
    });

    it('fourth button should call incrementAsync', () => {
      const { buttons, actions } = setup();
      buttons.at(3).simulate('click');
      expect(actions.incrementAsync).toHaveBeenCalled();
    });
  });
});
