import React, { Component } from 'react';
import './App.scss';
import NavBar from './Components/NavBar/NavBar';
import { Footer } from './Components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';

import Main from './Main';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <NavBar />

          <Main />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
