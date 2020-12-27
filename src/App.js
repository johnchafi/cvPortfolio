import React from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import Home from "./components/Home";
import Education from "./components/Education";
import Experience from "./components/Experience";
import About from "./components/About";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Portofolio from "./components/Portofolio";

import { HashRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <>
        <Route exact path="/" component={Home} />
        <Switch>
          <Route path="/Skills" component={Skills}></Route>
          <Route path="/Education" component={Education}></Route>
          <Route path="/Experience" component={Experience}></Route>
          <Route path="/Profile" component={Profile}></Route>
          <Route path="/About" component={About}></Route>
          <Route path="/Portofolio" component={Portofolio}></Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
