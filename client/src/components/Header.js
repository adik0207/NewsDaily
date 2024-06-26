import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">News Daily</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={NavLink} exact to="/" activeClassName="active">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/login" activeClassName="active">
            Login
          </Nav.Link>
          <Nav.Link as={NavLink} to="/register" activeClassName="active">
            Register
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
