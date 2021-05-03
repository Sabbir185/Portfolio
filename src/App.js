import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Blogs from "./components/Blogs/Blogs";
import AboutMe from "./components/AboutMe/AboutMe";
import NotFound from "./components/NotFound/NotFound";

function App() {


  return (
    <Router>
      <Switch>

        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/projects'>
          <Projects/>
        </Route>
        <Route path='/blogs'>
          <Blogs/>
        </Route>
        <Route path='/about'>
          <AboutMe/>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
