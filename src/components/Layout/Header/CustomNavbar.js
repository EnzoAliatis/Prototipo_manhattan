import React  from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CustomNavbar = () => (
  <Navbar collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">BrandLogo</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1} componentClass={Link} href="/" to="/">
          Home
            </NavItem>
        <NavItem eventKey={2} componentClass={Link} href="/products" to="/products">
          Productos
            </NavItem>
        <NavItem eventKey={3} componentClass={Link} href="/accounting" to="/accounting">
          Registro
            </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default CustomNavbar