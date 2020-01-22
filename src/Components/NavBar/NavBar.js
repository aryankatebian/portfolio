import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import './NavBar.scss';

class NavBar extends Component {
  state = {
    eventKey: 0
  };
  render() {
    console.log(this.state);
    return (
      <div className='NavBar'>
        <Navbar inverse collapseOnSelect style={{ backgroundColor: 'black' }}>
          <Navbar.Header>
            <Navbar.Brand className='logo'>
              <a href='/portfolio'>
                <img
                  src={require('../../Assets/img/alien3.png')}
                  style={{ height: '50px', marginTop: '-15px' }}
                  alt='home'
                />
              </a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem componentClass='span'>
                <Link
                  onClick={() => this.setState({ eventKey: 1 })}
                  to='/aboutme'
                  className={
                    this.state.eventKey === 1 ? 'my-link activee' : 'my-link'
                  }
                >
                  About Me
                </Link>
              </NavItem>

              <NavItem componentClass='span'>
                <Link
                  onClick={() => this.setState({ eventKey: 2 })}
                  to='/projects'
                  className={
                    this.state.eventKey === 2 ? 'my-link activee' : 'my-link'
                  }
                >
                  Projects
                </Link>
              </NavItem>
              <NavItem componentClass='span'>
                <Link
                  onClick={() => this.setState({ eventKey: 3 })}
                  to='/contactme'
                  className={
                    this.state.eventKey === 3 ? 'my-link activee' : 'my-link'
                  }
                >
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
