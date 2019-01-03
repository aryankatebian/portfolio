import React, { Component } from "react";
import { BlueBox } from "../Bluebox.style";
import { Grid, Row, Col, Nav, NavItem } from "react-bootstrap";
import Javascript from "./Javascript";
import Wordpress from "./Wordpress";
import "./Projects.scss";
class Projects extends Component {
  state = {
    activeKey: 1
  };
  handleSelect(selectedKey) {
    this.setState({ activeKey: selectedKey });
  }
  toggleCategories() {
    if (this.state.activeKey === 1) {
      return <Javascript />;
    } else if (this.state.activeKey === 2) {
      return <Wordpress />;
    } else if (this.state.activeKey === 3) {
      return <div>3</div>;
    }
  }

  render() {
    return (
      <div className="Projects">
        <Grid>
          <Row className="show-grid">
            <Col sm={6} mdPush={0} className="scroll">
              <BlueBox />
              <div className="myh2">Projects.</div>
            </Col>
          </Row>
        </Grid>
        <div className="projects">
          <div>
            <Nav
              bsStyle="tabs"
              justified
              activeKey={this.state.activeKey}
              onSelect={key => this.handleSelect(key)}
            >
              <NavItem eventKey={1} title="Item1" className="mytab">
                Vanilla Javascript
              </NavItem>

              <NavItem eventKey={2} title="Item2" className="mytab">
                Real World Projects
              </NavItem>
            </Nav>
            <br />
            <br />
            <br />
            <div>{this.toggleCategories()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
