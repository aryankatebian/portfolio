import React, { Component } from "react";
import { BlueBox } from "../Bluebox.style";
import { Grid, Row, Col, Carousel } from "react-bootstrap";
import "./Skills.scss";

class Skills extends Component {
  render() {
    return (
      <div>
        <div>
          <Grid>
            <Row className="show-grid">
              <Col xs={6} mdpull={6} className="scroll">
                <BlueBox />
                <div className="myh2">Coding.</div>
              </Col>
              <Col xs={6}>
                <div className="skills">
                  <ul>
                    <li>Html5</li>
                    <li>CSS</li>
                    <li>Sass/Less</li>
                    <li>Bootstrap</li>
                    <li>Css Animations</li>
                    <li>Vanilla Javascript</li>
                    <li>OOP</li>
                    <li>Es6</li>
                    <li>React JS</li>
                    <li>Vue JS</li>
                    <li>Jquery</li>
                    <li>Gsap</li>
                  </ul>

                  <ul>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>Webpack</li>
                    <li>Grunt/Gulp</li>
                    <li>Wordpress</li>
                    <li>power BI</li>
                    <li>Git/github</li>
                  </ul>
                  <ul>
                    <li>Currently learning:</li>
                    <li>Redux / Vuex</li>
                    <li>GraphQL</li>
                    <li>NodeJS-Express</li>
                    <li>Python-Django</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
        <div>
          <Grid>
            <Row className="show-grid">
              <Col xs={6} mdpull={6} className="scroll">
                <BlueBox />
                <div className="myh1">
                  Graphic <br />
                  Design.
                </div>
                <div className="graphic-ul">
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
              </Col>
              <Col sm={6} xs={12}>
                <div className="graphics">
                  <Carousel>
                    <Carousel.Item>
                      <img
                        width={900}
                        height={500}
                        alt="900x500"
                        src={require("../../Assets/img/m1.jpg")}
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        width={900}
                        height={500}
                        alt="900x500"
                        src={require("../../Assets/img/m2.jpg")}
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        width={900}
                        height={500}
                        alt="900x500"
                        src={require("../../Assets/img/m3.jpg")}
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        width={900}
                        height={500}
                        alt="900x500"
                        src={require("../../Assets/img/m4.jpg")}
                      />
                    </Carousel.Item>
                  </Carousel>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Skills;
