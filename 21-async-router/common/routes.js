import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Counter from './containers/Counter';
import Main from './containers/Main';
import Home from './containers/Home';
import { load } from './actions';

export default store => {
  const preload = (nextState, replace, cb) => {
    if (__SERVER__ || nextState.location.action === 'PUSH') {
      store.dispatch(load()).then(() => cb());
    } else {
      cb();
    }
  };
  return (
    <Route path="/" component={Main}>
      <IndexRoute component={Home}/>
      <Route path="counter" component={Counter} onEnter={preload}/>
    </Route>
  );
};
