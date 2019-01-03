import React from "react";
import { Switch, Route } from "react-router-dom";
import AboutMe from "./Components/AboutMe/AboutMe";
import Skills from "./Components/Skills/Skills";
import ContactMe from "./Components/ContactMe/ContactMe";
import Projects from "./Components/Projects/Projects";
import LandingPage from "./Components/LandingPage/LandigPage";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/skills" component={Skills} />
    <Route path="/projects" component={Projects} />
    <Route path="/contactme" component={ContactMe} />
  </Switch>
);

export default Main;
