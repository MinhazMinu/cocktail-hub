import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import SingleCocktail from "./pages/SingleCocktail";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import Navbar from "./conponents/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Router>
        <Switch>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/cocktail/:id">
            <SingleCocktail />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
