import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';

const HomeNavbar = () => {
  const bgColor = "#604509";
  const buttonStyle = {
    marginRight: '15px', // Adjust the right margin as needed
  };

  return (
    <>
      <Navbar style={{ backgroundColor: bgColor}}  variant="dark" fixed="top">
        <Container>
          <div className='d-flex justify-content-between align-items-center w-100'>
            <Navbar.Brand>
              <img
                src="/logo.jpg"
                width="200"
                className="h-auto d-inline-block align-top mr-3"
                alt="Logo"
              />
            </Navbar.Brand>
            <Nav className="align-self-end fs-4" variant='tabs'>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#findchef">Find Chef</Nav.Link>
              <Nav.Link href="#bookchef">Book Chef</Nav.Link>
            </Nav>
            <div className="d-flex ml-auto">
              <Button variant="outline-light" style={buttonStyle}>Sign-Up</Button>
              <Button variant="outline-light" className="ml-2">Log-In</Button>
            </div>
          </div>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default HomeNavbar;
