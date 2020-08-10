import React, { Component } from 'react';
import { BlueBox } from '../Bluebox.style';
import { Carousel } from 'react-bootstrap';
import './Skills.scss';

class Skills extends Component {
  render() {
    return (
      <div className='container'>
        <div className='show-grid'>
          <BlueBox />
          <div className='myh2'>Coding.</div>
          <div className='coding'>
            <img
              className='stack'
              alt='900x500'
              src={require('../../Assets/img/stack.jpg')}
            />

            <div className='skills'>
              <ul>
                <li>Html5</li>
                <li>CSS/SASS</li>
                <li>Bootstrap</li>
                <li>Css Animations</li>
                <li>Vanilla Javascript</li>
                <li>OOP</li>
                <li>Es6</li>
                <li>React JS</li>
                <li>Redux/Context Api/Hook</li>
                <li>Node/Express</li>
                <li>Jquery</li>
              </ul>

              <ul>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>Webpack</li>
                <li>Grunt/Gulp</li>
                <li>Wordpress/php</li>
                <li>power BI</li>
                <li>Git/github</li>
                <li>Unit/Integration Testing</li>
              </ul>

              <ul>
                <li>Currently learning:</li>
                <li>redux-saga</li>
                <li>GraphQL</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <div className='show-grid'>
            <BlueBox />
            <div className='myh1'>
              Graphic <br />
              Design.
            </div>
            <div className='coding design'>
              <div className='graphic-ul'>
                <ul>
                  <li>Adobe Illustrator</li>
                  <li>Adobe Photoshop</li>
                  <li>Sketch</li>
                  <li>Figma</li>
                  <li>Mokeup</li>
                  <li>Logo Design</li>
                  <li>Icon Design</li>
                </ul>
              </div>

              <div className='graphics'>
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="img"
                      alt='900x500'
                      src={require('../../Assets/img/m1.jpg')}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="img"
                      alt='900x500'
                      src={require('../../Assets/img/m2.jpg')}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="img"
                      alt='900x500'
                      src={require('../../Assets/img/m3.jpg')}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="img"
                      alt='900x500'
                      src={require('../../Assets/img/m4.jpg')}
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
