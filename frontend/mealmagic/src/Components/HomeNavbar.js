import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import React from 'react'

const HomeNavbar = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">
          <img
              src="/logo.jpg"
              width="200"
              height="50"
              className="ml-3"
              alt="React Bootstrap logo"
            /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#findchef">Find Chef</Nav.Link>
            <Nav.Link href="#bookchef">Book Chef</Nav.Link>
          
            <div class="d-flex justify-content-end">
            <Button variant="outline-light">Sign-Up</Button>
            <Button variant="outline-light">Log-In</Button>
            </div>          
          </Nav>
        </Container>
      </Navbar>
      <br />  
    </>
  );
}

export default HomeNavbar;