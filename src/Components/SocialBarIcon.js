import React from "react";
import "./SocialBarIcon.scss";

class SocialBar extends React.Component {
  render() {
    return (
      <div className="contact-bar-social">
        <ul>
          <li>
            <a target="blank" href="https://github.com/aryankatebian">
              <div className="icon">
                <img alt="github" src={require("../Assets/img/github.png")} />
              </div>
            </a>
          </li>
          <li>
            <a
              target="blank"
              href="https://www.linkedin.com/in/aryan-katebian-49785b15a/"
            >
              <div className="icon">
                <img
                  alt="linkdin"
                  src={require("../Assets/img/linkedin.png")}
                />
              </div>
            </a>
          </li>
          <li>
            <a target="blank" href="https://codepen.io/katebian/">
              <div className="icon">
                <img alt="codepen" src={require("../Assets/img/codepen.png")} />
              </div>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default SocialBar;
