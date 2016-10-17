import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Counter from './containers/Counter';
import Main from './containers/Main';
import Home from './containers/Home';

export default () => (
  <Route path="/" component={Main}>
    <IndexRoute component={Home} />
    <Route path="counter" component={Counter} />
  </Route>
);
