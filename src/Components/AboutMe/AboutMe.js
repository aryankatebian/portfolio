import React, { Component } from 'react';
import Skills from '../Skills/Skills';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './AboutMe.scss';
import { BlueBox } from '../Bluebox.style';

class AboutMe extends Component {
  handleClick = e => {
    window.open(
      'https://drive.google.com/file/d/1m3zLibyaX4zbE6i1hhBfwd4-8DfF4dsq/view?usp=sharing'
    );
  };
  render() {
    return (
      <div className='AboutMe'>
        <Grid>
          <Row className='show-grid'>
            <Col sm={6} mdPush={0} className='scroll'>
              <BlueBox />
              <div className='myh1'>
                About <br /> Me.
              </div>
              <p className='aboutmetext'>
                An interactive front-end developer
                <br />
                Currently based in London
                <br />
                Focussed on creative , interactive <br />
                and slick animations
              </p>
              <br />
              <p className='aboutmetext'>
                After 2 years of academic education in IT and 3 years of self
                studying, I've learned coding and new technologies to make
                complex web applications and worked as freelance web designer to
                make websites for startup businesses and individual clients, now
                seeking a professional environment in which I can apply my web
                design creativity and develop my skills and gain experience in a
                challenging and rewarding career.
              </p>

              <div className='button download-btn' onClick={this.handleClick}>
                <span className='button__mask' />
                <span className='button__text'>download C.V</span>
                <span className='button__text button__text--bis' />
              </div>
            </Col>
            <Col sm={6} md={6} xsHidden>
              <Image
                className='me'
                alt='me'
                src={require('../../Assets/img/me.jpg')}
              />
            </Col>
          </Row>
        </Grid>
        <Skills />
      </div>
    );
  }
}

export default AboutMe;
