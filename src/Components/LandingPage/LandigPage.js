import React, { Component } from 'react';
import './LandingPage.scss';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import SocialBar from '../SocialBarIcon';
import Typing from 'react-typing-animation';

class LandingPage extends Component {
  render() {
    return (
      <div className='LandingPage'>
        <div className='title'>
          <Typing>
            Hi!
            <br />I am Aryan,
            <br />
            Web Developer.
            <br />
            <h3>Front-end Developer / Javascript / React</h3>
          </Typing>
          <SocialBar />
        </div>

        <Link to='/aboutme'>
          <Image
            className='io'
            alt='io'
            src={require('../../Assets/img/io.png')}
            responsive
          />
        </Link>
        <Link to='/projects'>
          <Image
            className='earth'
            alt='earth'
            src={require('../../Assets/img/earth.png')}
            responsive
          />
        </Link>

        <Image
          className='moon'
          alt='moon'
          src={require('../../Assets/img/moon.png')}
          responsive
        />

        <Link to='/contactme'>
          <Image
            className='jupiter'
            alt='jupiter'
            src={require('../../Assets/img/jupiter.png')}
            responsive
          />
        </Link>
        <Image
          className='ground'
          alt='ground'
          src={require('../../Assets/img/ground.png')}
          responsive
        />
        <Image
          className='holder'
          alt='holder'
          src={require('../../Assets/img/holder.png')}
          responsive
        />
        <Image
          className='rocket'
          alt='rocket'
          src={require('../../Assets/img/rocket.png')}
          responsive
        />
      </div>
    );
  }
}

export default LandingPage;
