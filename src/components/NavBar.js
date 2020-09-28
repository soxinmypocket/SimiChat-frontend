import React from 'react';
import {NavLink} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'


const NavBar = () => {
  return(
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/">Guardian Angel</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/stats">Stats</Nav.Link>
        <Nav.Link href="/aces">Aces</Nav.Link>
        <Nav.Link href="/forum">Forum</Nav.Link>
        <Nav.Link href="/centers">Centers</Nav.Link>
        <Nav.Link href="/chat">Chat</Nav.Link>
        <NavDropdown title="Account" id="basic-nav-dropdown">
          <NavDropdown.Item href="/login">Login</NavDropdown.Item>
          <NavDropdown.Item href="/register">Register</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
  )
};

export default NavBar;

