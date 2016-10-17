import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import counter from './reducers';
import Connect1 from './containers/Connect1';
import Connect2 from './containers/Connect2';
import Connect3 from './containers/Connect3';
import Connect4 from './containers/Connect4';
import Connect5 from './containers/Connect5';

const store = createStore(counter, applyMiddleware(thunk));
const rootEl = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <div>
      <h2>使用react-redux连接</h2>
      <ul>
        <li>
          connect()的前两个参数分别为函数和对象：
          <Connect1 />
        </li>
        <li>
          connect()的前两个参数均为函数：
          <Connect2 />
        </li>
        <li>
          connect()的前两个参数均为函数，但使用了bindActionCreators：
          <Connect3 />
        </li>
        <li>
          connect()的第二个参数为空：
          <Connect4 />
        </li>
        <li>
          connect()的装饰器写法：
          <Connect5 />
        </li>
      </ul>
    </div>
  </Provider>, rootEl);
