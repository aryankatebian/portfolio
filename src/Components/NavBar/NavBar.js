import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.scss";

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <Navbar inverse collapseOnSelect style={{ backgroundColor: "black" }}>
          <Navbar.Header>
            <Navbar.Brand className="logo">
              <a href="/">
                <img
                  src={require("../../Assets/img/alien3.png")}
                  style={{ height: "50px", marginTop: "-15px" }}
                  alt="home"
                />
              </a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1}>
                <Link to="/aboutme" className="my-link">
                  About Me
                </Link>
              </NavItem>
              <NavItem eventKey={2}>
                <Link to="/skills" className="my-link">
                  Skills
                </Link>
              </NavItem>
              <NavItem eventKey={3}>
                <Link to="/projects" className="my-link">
                  Projects
                </Link>
              </NavItem>
              <NavItem eventKey={4}>
                <Link to="/contactme" className="my-link">
                  Contact Me
                </Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
