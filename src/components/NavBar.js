import React from 'react';
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'



const NavBar = () => {
  return(
    <Navbar bg="light" className="justify-content-center" expand="lg">
    <Navbar.Brand href="/"><Link to="/" style={{color: "black"}}>SIMI</Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link to="/centers"><Link to="/centers" style={{color: "black"}}>NYC Mental Health Resources</Link></Nav.Link>
        <Nav.Link href="/chat"><Link to="/chat" style={{color: "black"}}>Chat</Link></Nav.Link>
        <NavDropdown title="Account" id="basic-nav-dropdown" style={{color: "black"}}>
          <NavDropdown.Item href="/login"><Link to="/login">Login</Link></NavDropdown.Item>
          <NavDropdown.Item href="/signup"><Link to="/signup">SignUp</Link></NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/profile"><Link to="/profile">Profile</Link></NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  )
};

export default NavBar;
