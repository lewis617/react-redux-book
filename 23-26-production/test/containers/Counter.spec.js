import expect from 'expect';
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import nock from 'nock';
import { Counter } from '../../src/containers';
import { loadCounter } from '../../src/actions/counter';
import configureStore from '../../src/utils/configureStore';
import config from '../../src/config';

function setup(value = 0) {
  global.__SERVER__ = true;
  global.__COOKIE__ = null;
  nock('http://' + config.apiHost + ':' + config.apiPort)
    .get('/counter')
    .reply(200, { value });

  const store = configureStore();
  return store.dispatch(loadCounter())
    .then(() => {
      const app = mount(
        <Provider store={store}>
          <Counter />
        </Provider>
      );
      return {
        buttons: app.find('button'),
        pre: app.find('pre').at(0)
      };
    });
}

describe('containers', () => {
  describe('Counter', () => {
    afterEach(() => {
      nock.cleanAll();
    });

    it('should display initial count', () => setup()
      .then(({ pre }) => {
        expect(pre.text()).toMatch(/"value": 0/);
      }));

    it('should display updated count after increment button click', () => setup()
      .then(({ buttons, pre }) => {
        buttons.at(0).simulate('click');
        expect(pre.text()).toMatch(/"value": 1/);
      }));

    it('should display updated count after decrement button click', () => setup()
      .then(({ buttons, pre }) => {
        buttons.at(1).simulate('click');
        expect(pre.text()).toMatch(/"value": -1/);
      }));

    it('shouldnt change if even and if odd button clicked', () => setup()
      .then(({ buttons, pre }) => {
        buttons.at(2).simulate('click');
        expect(pre.text()).toMatch(/"value": 0/);
      }));

    it('should change if odd and if odd button clicked', () => setup(1)
      .then(({ buttons, pre }) => {
        buttons.at(2).simulate('click');
        expect(pre.text()).toMatch(/"value": 2/);
      }));

    it('should change if incrementAsync button clicked', done => {
      setup(1).then(({ buttons, pre }) => {
        buttons.at(3).simulate('click');
        setTimeout(() => {
          expect(pre.text()).toMatch(/"value": 2/);
          done();
        }, 1000);
      });
    });

    it('should display updated count after load button click', done => {
      setup(1)
        .then(({ buttons, pre }) => {
          nock.cleanAll();
          nock('http://' + config.apiHost + ':' + config.apiPort)
            .get('/counter')
            .reply(200, { value: 100 });
          buttons.at(4).simulate('click');
          setTimeout(() => {
            expect(pre.text()).toMatch(/"value": 100/);
            done();
          }, 1000);
        });
    });
  });
});
