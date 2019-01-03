import React from "react";
import { Grid, Row, Col, Button, Thumbnail } from "react-bootstrap";
import "./Projects.scss";

class Javascript extends React.Component {
  render() {
    return (
      <div>
        {" "}
        <Grid>
          <Row>
            <Col sm={6} md={4}>
              <Thumbnail
                className="col"
                src={require("../../Assets/img/videoplayer.png")}
                alt="242x200"
                height="200px"
              >
                <h3 className="my-h3">Custom Video Player</h3>
                <p>
                  <Button
                    bsStyle="info"
                    target="blank"
                    href="https://codepen.io/katebian/pen/oJGVWP"
                  >
                    Code pen
                  </Button>
                </p>
              </Thumbnail>
            </Col>
            <Col sm={6} md={4}>
              <Thumbnail
                className="col"
                src={require("../../Assets/img/stickynav.png")}
                alt="242x200"
                height="200px"
              >
                <h3 className="my-h3">Sticky NavBar</h3>

                <p>
                  <Button
                    bsStyle="info"
                    target="blank"
                    href="https://codepen.io/katebian/pen/MZExQm"
                  >
                    code pen
                  </Button>
                </p>
              </Thumbnail>
            </Col>
            <Col sm={6} md={4}>
              <Thumbnail
                className="col"
                src={require("../../Assets/img/drag.png")}
                alt="242x200"
                height="200px"
              >
                <h3 className="my-h3">Drag and scroll</h3>

                <p>
                  <Button
                    bsStyle="info"
                    target="blank"
                    href="https://codepen.io/katebian/pen/MZExXv"
                  >
                    code pen
                  </Button>
                </p>
              </Thumbnail>
            </Col>
          </Row>

          <Row>
            <Col sm={6} md={4}>
              <Thumbnail
                className="col"
                src={require("../../Assets/img/flex.png")}
                alt="242x200"
                height="200px"
              >
                <h3 className="my-h3">Flex Gallery</h3>

                <p>
                  <Button
                    bsStyle="info"
                    target="blank"
                    href="https://codepen.io/katebian/pen/gBMqRQ"
                  >
                    code pen
                  </Button>
                </p>
              </Thumbnail>
            </Col>
            <Col sm={6} md={4}>
              <Thumbnail
                className="col"
                src={require("../../Assets/img/drum.png")}
                alt="242x200"
                height="200px"
              >
                <h3 className="my-h3">Drum kit</h3>

                <p>
                  <Button
                    bsStyle="info"
                    target="blank"
                    href="https://jovial-wozniak-c75c00.netlify.com/"
                  >
                    Netlify
                  </Button>
                </p>
              </Thumbnail>
            </Col>
            <Col sm={6} md={4}>
              <Thumbnail
                className="col"
                src={require("../../Assets/img/game.png")}
                alt="242x200"
                height="200px"
              >
                <h3 className="my-h3">Whack A Mole Game</h3>

                <p>
                  <Button
                    bsStyle="info"
                    target="blank"
                    href="https://festive-allen-8cceb5.netlify.com"
                  >
                    Netlify
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
