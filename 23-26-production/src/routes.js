import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { Main, Home, Counter, NotFound, Forms, Statistic, Login } from './containers';
import { loadCounter } from './actions/counter';
import { loadStatistic } from './actions/statistic';
import { loadAuthIfNeeded } from './actions/auth';

const preload = promise => (nextState, replace, cb) => {
  if (__SERVER__ || nextState.location.action === 'PUSH') {
    promise().then(() => cb());
  } else {
    cb();
  }
};

export default store => {
  const counterPromise = () => store.dispatch(loadCounter());
  const statisticPromise = () => store.dispatch(loadStatistic());
  const authPromise = () => store.dispatch(loadAuthIfNeeded());
  const requireLogin = (nextState, replace, cb) => {
    const user = store.getState().async.user;
    if (!user) {
      replace('/');
    }
    cb();
  };
  return (
    <Route path="/" component={Main} onEnter={preload(authPromise)}>
      <IndexRoute component={Home}/>
      <Route onEnter={requireLogin}>
        <Route path="counter" component={Counter} onEnter={preload(counterPromise)}/>
        <Route path="forms" component={Forms}/>
        <Route path="statistic" component={Statistic} onEnter={preload(statisticPromise)}/>
      </Route>>
      <Route path="login" component={Login}/>
      <Route path="*" component={NotFound} status={404}/>
    </Route>
  );
};
