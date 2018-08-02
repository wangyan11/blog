import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from "react-router-dom";
import {
  Home,
  Blog
} from "./pages";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Redirect exact to="/home" from=""/>
          <Route component={Home} path="/home"/>
          <Route component={Blog} path="/Blog"/>

        </Switch>
      </Router>
    );
  }
}

export default App;
