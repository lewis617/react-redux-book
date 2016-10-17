import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { IndexLink, browserHistory } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Helmet from 'react-helmet';
import { Spin } from '../../components';
import config from '../../config';
import { logout } from '../../actions/auth';

@connect(
  state => ({ user: state.async.user }),
  { logout }
)
class Main extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    user: PropTypes.any,
    logout: PropTypes.func.isRequired
  };

  handleLogout = (event) => {
    event.preventDefault();
    this.props.logout().then(() => browserHistory.push('/'));
  };

  render() {
    require('./Main.scss');
    const user = this.props.user;
    return (
      <div>
        <Helmet {...config.app.head}/>
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <IndexLink to="/">
                <span>{config.app.title}</span>
              </IndexLink>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>

          <Navbar.Collapse>
            <Nav navbar>
              {user && (
                <LinkContainer to="/counter">
                  <NavItem eventKey={1}>计数器</NavItem>
                </LinkContainer>)}
              {user && (
                <LinkContainer to="/forms">
                  <NavItem eventKey={2}>表单</NavItem>
                </LinkContainer>)}
              {user && (
                <LinkContainer to="/statistic">
                  <NavItem eventKey={3}>统计</NavItem>
                </LinkContainer>)}
            </Nav>
            <Nav navbar pullRight>
              {!user && (
                <LinkContainer to="/login">
                  <NavItem eventKey={4}>登录</NavItem>
                </LinkContainer>
              )}
              {user && (
                <NavDropdown eventKey={5} title={user.name} id="usernameDropdown">
                  <LinkContainer to="/logout">
                    <MenuItem eventKey={5.1} onClick={this.handleLogout}>登出</MenuItem>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Spin />

        <div>
          {/* this will render the child routes */}
          {React.cloneElement(this.props.children, this.props)}
        </div>
      </div>
    );
  }
}

export default Main;
