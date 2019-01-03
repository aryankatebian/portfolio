import React, { Component } from "react";
import "./App.scss";
import NavBar from "./Components/NavBar/NavBar";
import { Footer } from "./Components/Footer";

import Main from "./Main";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
