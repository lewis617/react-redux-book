import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

function Main(props) {
  return (
    <div>
      <ul>
        <li><IndexLink to="/" activeStyle={{ color: 'red' }}>Home</IndexLink></li>
        <li><Link to="/counter" activeStyle={{ color: 'red' }}>Counter</Link></li>
      </ul>
      {/* this will render the child routes */}
      {React.cloneElement(props.children, props)}
    </div>
  );
}
Main.propTypes = {
  children: PropTypes.any.isRequired
};

export default Main;
