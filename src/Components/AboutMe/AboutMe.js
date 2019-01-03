import React, { Component } from "react";
import { Grid, Row, Col, Image } from "react-bootstrap";
import "./AboutMe.scss";
import { BlueBox } from "../Bluebox.style";
class AboutMe extends Component {
  render() {
    return (
      <div className="AboutMe">
        <Grid>
          <Row className="show-grid">
            <Col sm={6} mdPush={0} className="scroll">
              <BlueBox />
              <div className="myh1">
                About <br /> Me.
              </div>
              <p className="aboutmetext">
                An interactive front-end developer
                <br />
                Currently based in London
                <br />
                Focussed on creative , interactive <br />
                and slick animations
              </p>
              <br />
              <p className="aboutmetext">
                After 2 years of academic education in IT and some years of self
                studying, I've learned coding and new technologies to make
                complex web applications and worked as freelance web designer to
                make websites for startup businesses and individual clients, now
                seeking a professional environment in which I can apply my web
                design creativity and develop my skills and gain experience in a
                challenging and rewarding career.
              </p>
              <div className="button download-btn">
                <span className="button__mask" />
                <span className="button__text">download C.V</span>
                <span className="button__text button__text--bis">
                  <a
                    target="blank"
                    href="https://drive.google.com/open?id=1fpmHxica7u0k9cdtxbCyTmlwkjXZPZJt"
                  >
                    download C.V
                  </a>
                </span>
              </div>
            </Col>
            <Col sm={6} md={6} xsHidden>
              <Image
                className="me"
                alt="me"
                src={require("../../Assets/img/me.jpg")}
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default AboutMe;
