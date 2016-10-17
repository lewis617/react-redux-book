import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem,
  ButtonToolbar, Button, ButtonGroup, Glyphicon } from 'react-bootstrap';

import css from './App.scss';

export default class App extends React.Component { // eslint-disable-line
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">React-Bootstrap</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">Link</NavItem>
            <NavItem eventKey={2} href="#">Link</NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>

        <div className={'container ' + css.buttons}>
          <ButtonToolbar>
            <Button>Default</Button>
            <Button bsStyle="primary">Primary</Button>
            <Button bsStyle="success">Success</Button>
            <Button bsStyle="info">Info</Button>
            <Button bsStyle="warning">Warning</Button>
            <Button bsStyle="danger">Danger</Button>
            <Button bsStyle="link">Link</Button>
            <ButtonGroup>
              <Button><Glyphicon glyph="align-left" /></Button>
              <Button><Glyphicon glyph="align-center" /></Button>
              <Button><Glyphicon glyph="align-right" /></Button>
              <Button><Glyphicon glyph="align-justify" /></Button>
            </ButtonGroup>
          </ButtonToolbar>
        </div>

      </div>
    );
  }
}
