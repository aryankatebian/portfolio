import React from "react";
import "../App.scss";

export class Footer extends React.Component {
  render() {
    return (
      <div className="copyright">
        2019-portfolio made with{" "}
        <a target="blank" href="https://reactjs.org/">
          REACTJS
        </a>{" "}
        © All rights reserved.
      </div>
    );
  }
}
