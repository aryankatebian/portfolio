import React from "react";
import { Grid, Row, Col, Button, Thumbnail } from "react-bootstrap";
import "./Projects.scss";
import icon1 from "../../Assets/img/icon1.png";
import icon2 from "../../Assets/img/icon2.png";
import icon3 from "../../Assets/img/icon3.png";
import icon4 from "../../Assets/img/icon4.png";
import icon5 from "../../Assets/img/icon5.png";

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
                src={require("../../Assets/img/url-shortener.png")}
                alt="242x200"
                height="200px"
              >
                <h3 className="my-h3">Checking Price With Python</h3>
                <img src={icon1} alt="icon" style={{ width: "35px" }} />
                <p>
                  <Button
                    bsStyle="info"
                    target="blank"
                    href="https://github.com/aryankatebian/sending-email-Python-"
                  >
                    Github
                  </Button>
                </p>
              </Thumbnail>
            </Col>
            <Col sm={6} md={4}>
              <Thumbnail
                className="col"
                src={require("../../Assets/img/url-shortener.png")}
                alt="242x200"
                height="200px"
              >
                <h3 className="my-h3">URL Shortener</h3>
                <img
                  src={icon2}
                  alt="icon2"
                  style={{ width: "80px", margin: "0 30px 0 0" }}
                />
                <img src={icon3} alt="icon" style={{ width: "80px" }} />
                <p>
                  <Button
                    bsStyle="info"
                    target="blank"
                    href="https://github.com/aryankatebian/URL-shortener-backend"
                  >
                    Github
                  </Button>
                </p>
              </Thumbnail>
            </Col>
            <Col sm={6} md={4}>
              <Thumbnail
                className="col"
                src={require("../../Assets/img/vue.jpg")}
                alt="242x200"
                height="200px"
              >
                <h3 className="my-h3">A Simple Vue JS Blog-post</h3>
                <img src={icon4} alt="icon" style={{ width: "35px" }} />
                <p>
                  <Button
                    bsStyle="info"
                    target="blank"
                    href="https://simple-vuejs-blog.netlify.com/"
                  >
                    Netlify
                  </Button>
                </p>
              </Thumbnail>
            </Col>
          </Row>
          <Row>
            <Col sm={6} md={4}>
              <Thumbnail
                className="col"
                src={require("../../Assets/img/weather.png")}
                alt="242x200"
                height="200px"
              >
                <h3 className="my-h3">Weather-API</h3>
                <img src={icon5} alt="icon" style={{ width: "80px" }} />
                <p>
                  <Button
                    bsStyle="info"
                    target="blank"
                    href="https://mylocation-weather-api.netlify.com"
                  >
                    Netlify
                  </Button>
                </p>
              </Thumbnail>
            </Col>
            <Col sm={6} md={4}>
              <Thumbnail
                className="col"
                src={require("../../Assets/img/videoplayer.png")}
                alt="242x200"
                height="200px"
              >
                <h3 className="my-h3">Custom Video Player</h3>
                <img src={icon5} alt="icon" style={{ width: "80px" }} />
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
                <img src={icon5} alt="icon" style={{ width: "80px" }} />

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
                <img src={icon5} alt="icon" style={{ width: "80px" }} />

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
                <img src={icon5} alt="icon" style={{ width: "80px" }} />

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
                <img src={icon5} alt="icon" style={{ width: "80px" }} />

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
          <Col sm={6} md={4}>
            <Thumbnail
              className="col"
              src={require("../../Assets/img/drag.png")}
              alt="242x200"
              height="200px"
            >
              <h3 className="my-h3">Drag and scroll</h3>
              <img src={icon5} alt="icon" style={{ width: "80px" }} />

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
        </Grid>
      </div>
    );
  }
}
export default Javascript;
