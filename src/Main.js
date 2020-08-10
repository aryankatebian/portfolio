import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutMe from './Components/AboutMe/AboutMe';

import ContactMe from './Components/ContactMe/ContactMe';
import Projects from './Components/Projects/Projects';
import LandingPage from './Components/LandingPage/LandigPage';

const Main = () => (
  <Switch>
    <Route exact path='/' component={LandingPage} />
    <Route exact path='/portfolio' component={LandingPage} />
    <Route exact path='/aboutme' component={AboutMe} />
    <Route exact path='/projects' component={Projects} />
    <Route exact path='/contactme' component={ContactMe} />
  </Switch>
);

export default Main;
