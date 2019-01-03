import React from "react";
import { Grid, Row, Col, Button, Thumbnail } from "react-bootstrap";
import "./Projects.scss";

class Javascript extends React.Component {
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col sm={6} md={6}>
              <Thumbnail
                className="col"
                src={require("../../Assets/img/numeraldesign.png")}
                alt="242x200"
                height="200px"
              >
                <h3 className="my-h3">numeraldesign.co.uk</h3>
                <p>
                  <Button
                    bsStyle="info"
                    target="blank"
                    href="http://www.numeraldesign.co.uk"
                  >
                    see the website
                  </Button>
                </p>
              </Thumbnail>
            </Col>
            <Col sm={6} md={6}>
              <Thumbnail
                className="col"
                src={require("../../Assets/img/mfs.png")}
                alt="242x200"
                height="200px"
              >
                <h3 className="my-h3">madefromscratch.london</h3>
                <p>
                  <Button
                    bsStyle="info"
                    target="blank"
                    href="http://www.madefromscratch.london"
                  >
                    see the website
                  </Button>
                </p>
              </Thumbnail>
            </Col>
          </Row>
          <br />
          <Row>
            <Col sm={6} md={6}>
              <Thumbnail
                className="col"
                src={require("../../Assets/img/ashori.png")}
                alt="242x200"
                height="200px"
              >
                <h3 className="my-h3">portfolio website</h3>
                <p>
                  <Button
                    bsStyle="info"
                    target="blank"
                    href="http://www.aryanashoori.pro"
                  >
                    see the website
                  </Button>
                </p>
              </Thumbnail>
            </Col>
            <Col sm={6} md={6}>
              <Thumbnail
                className="col"
                src={require("../../Assets/img/elika.png")}
                alt="242x200"
                height="200px"
              >
                <h3 className="my-h3">lilikastreats.com</h3>
                <p>
                  <Button
                    bsStyle="info"
                    target="blank"
                    href="http://www.lilikastreats.com/"
                  >
                    see the website
                  </Button>
                </p>
              </Thumbnail>
            </Col>
            <Col sm={6} md={6}>
              <Thumbnail
                className="col"
                src={require("../../Assets/img/body.png")}
                alt="242x200"
                height="200px"
              >
                <h3 className="my-h3">bodiscent.com</h3>
                <p>
                  <Button
                    bsStyle="info"
                    target="blank"
                    href="http://www.bodiscent.com/"
                  >
                    see the website
                  </Button>
                </p>
              </Thumbnail>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
export default Javascript;
