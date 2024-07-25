import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">Uber</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#ride">Ride</Nav.Link>
          <Nav.Link href="#drive">Drive</Nav.Link>
          <Nav.Link href="#business">Business</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#help">Help</Nav.Link>
          <Nav.Link href="#login">Login</Nav.Link>
          <Button variant="outline-light" className="ms-2">
            Sign Up
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
