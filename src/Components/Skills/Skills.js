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
                    <li>html5</li>
                    <li>CSS</li>
                    <li>sass/less</li>
                    <li>bootstrap</li>
                    <li>css animations</li>
                    <li>javascript</li>
                    <li>es5/es6</li>
                    <li>jquery</li>
                    <li>p5.js</li>
                    <li>gsap</li>
                  </ul>

                  <ul>
                    <li>webpack</li>
                    <li>express</li>
                    <li>npm</li>
                    <li>wordpress</li>
                    <li>git/github</li>
                  </ul>
                  <ul>
                    <li>Currently learning:</li>
                    <li>react/redux</li>
                    <li>vanilla javascript</li>
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
