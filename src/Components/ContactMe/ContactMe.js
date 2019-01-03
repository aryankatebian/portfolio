import React, { Component } from "react";
import { Grid, Row, Col, Image } from "react-bootstrap";
import { BlueBox } from "../Bluebox.style";
import { ContactForm, Info } from "./Form";
import "./ContactMe.scss";
class ContactMe extends Component {
  render() {
    return (
      <div className="ContactMe">
        <Grid>
          <Row className="show-grid">
            <Col md={6} mdPush={0} className="scroll">
              <BlueBox />
              <div className="myh1">
                Contact <br /> Me.
              </div>
              <Info style={{ visibility: "visible" }} />
            </Col>
            <Col md={6}>
              <ContactForm />
            </Col>
          </Row>
          <Row>
            <Col>
              <Image
                className="ground"
                alt="ground"
                src={require("../../Assets/img/ground.png")}
                responsive
              />
              <Image
                className="holder"
                alt="holder"
                src={require("../../Assets/img/holder.png")}
                responsive
              />
              <Image
                className="rocket"
                alt="rocket"
                src={require("../../Assets/img/rocket.png")}
                responsive
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default ContactMe;
