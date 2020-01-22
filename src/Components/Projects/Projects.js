import React, { Component } from 'react';
import { BlueBox } from '../Bluebox.style';
import { Grid, Row, Col } from 'react-bootstrap';
import Javascript from './Javascript';
import Wordpress from './Wordpress';
import './Projects.scss';
class Projects extends Component {
  render() {
    return (
      <div className='Projects'>
        <Grid>
          <Row className='show-grid'>
            <Col sm={6} mdPush={0} className='scroll'>
              <BlueBox />
              <div className='myh2'>Projects.</div>
            </Col>
          </Row>
        </Grid>
        <div className='projects'>
          <Wordpress />
          <Javascript />
        </div>
      </div>
    );
  }
}

export default Projects;
