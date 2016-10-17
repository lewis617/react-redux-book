import React, { Component } from 'react';

function Demo1() {
  return (
    <li>
      <h3>类似HTML</h3>
      <p data-attribute="demo1">可以嵌套，可以自定义属性</p>
    </li>
  );
}

function Demo2() {
  const name = 'JSX';
  const func = () => {
    let result = 'hello ';
    if (name) {
      result += name;
    } else {
      result += 'world';
    }
    return result;
  };
  return (
    <li>
      <h3>JavaScript表达式</h3>
      <p>hello {name || 'world'}</p>
      <p className={name ? 'class-a' : 'class-b'}>
        hello {name && 'world'}
      </p>
      <p>
        {func()}
      </p>
    </li>
  );
}

function Demo3() {
  return (
    <li>
      <h3>样式</h3>
      <p style={{ color: 'red', fontSize: '14px' }}>内联样式不是字符串，而是对象</p>
    </li>
  );
}

function Demo4() {
  return (
    <li>
      <h3>注释</h3>
      {/* 注释... */}
      <p>标签子节点内的注释应该写在大括号中</p>
    </li>
  );
}

function Demo5() {
  const arr = [
    <h3 key={0}>数组</h3>,
    <p key={1}>数组会自动展开。注意，数组中每一项元素需要添加key属性</p>,
  ];
  return (<li>{arr}</li>);
}

export default class App extends Component { // eslint-disable-line
  render() {
    return (
      <div>
        <h2>JSX语法</h2>
        <ul>
          <Demo1 />
          <Demo2 />
          <Demo3 />
          <Demo4 />
          <Demo5 />
        </ul>
      </div>
    );
  }
}
