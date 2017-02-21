import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import App from './src/App';

console.log('首次挂载');
let instance = render(<App />, document.getElementById('root'));

window.renderComponent = () => {
  console.log('挂载');
  instance = render(<App />, document.getElementById('root'));
};

window.setState = () => {
  console.log('更新');
  instance.setState({ foo: 'bar' });
};

window.unmountComponentAtNode = () => {
  console.log('卸载');
  unmountComponentAtNode(document.getElementById('root'));
};

console.log('JSX中的闭合标签是ReactElement');
console.log(<h1>hello world</h1>);
console.log(<App />);

console.log('组件、ReactElement与组件实例');
console.log(App);
console.log(<App />);
console.log(instance);
