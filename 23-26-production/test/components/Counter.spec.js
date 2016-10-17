import expect from 'expect';
import React from 'react';
import { mount } from 'enzyme';
import path from 'path';

before(done => {
  if (typeof webpackIsomorphicTools !== 'undefined') {
    done();
    return;
  }
  const WebpackIsomorphicTools = require('webpack-isomorphic-tools');
  global.webpackIsomorphicTools = new WebpackIsomorphicTools(
    require('../../webpack/webpack-isomorphic-tools'))
    .development()
    .server(path.resolve(__dirname, '..', '..'), done);
});

function setup(counter = 0) {
  const actions = {
    increment: expect.createSpy(),
    incrementIfOdd: expect.createSpy(),
    incrementAsync: expect.createSpy(),
    decrement: expect.createSpy(),
    loadCounter: expect.createSpy()
  };
  const Counter = require('../../src/containers/Counter/Counter').Counter;
  const component = mount(
    <Counter counter={{ value: counter }} counterLoadState={{ loaded: true }} {...actions} />
  );

  return {
    component,
    actions,
    buttons: component.find('button')
  };
}

describe('components', () => {
  describe('Counter', () => {
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

    it('fifth button should call load', () => {
      const { buttons, actions } = setup();
      buttons.at(4).simulate('click');
      expect(actions.loadCounter).toHaveBeenCalled();
    });
  });
});
