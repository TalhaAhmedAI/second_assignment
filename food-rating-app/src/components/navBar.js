import React from "react";
import { connect } from "react-redux";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = ({ location }) => {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="/">Foodie</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/contact">Contact Us</Nav.Link>
        <Nav.Link href="/terms">Terms & Conditions</Nav.Link>
      </Nav>
      <Nav className="navbar-right" style={{ color: "white" }}>
        {location}
      </Nav>
    </Navbar>
  );
};

const mapStateToProps = (state) => {
  return { location: state.location };
};

export default connect(mapStateToProps)(NavBar);
