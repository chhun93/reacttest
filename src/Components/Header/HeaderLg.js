import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../DecorateFiles/HeaderLg.css";

class HeaderLg extends Component {
  render() {
    return (
      <div className="LgHeaderBar">
        <Navbar bg="white" className="justify-content-center">
          <Link className="navbar-brand mr-0" to="/">
            TestHome
          </Link>
        </Navbar>
        <Nav className="justify-content-center">
          <Link className="nav-link" to="/writePost">
            WriteTest
          </Link>
          <Link className="nav-link" to="/">
            TEST2
          </Link>
          <Link className="nav-link" to="/">
            TEST3
          </Link>
        </Nav>
      </div>
    );
  }
}

export default HeaderLg;
