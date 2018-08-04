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
  Blog,
  Detail,
  About
} from "./pages";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Redirect exact to="/home" from=""/>
          <Route component={Home} path="/home"/>
          <Route exact component={Blog} path="/blog"/>
          <Route component={Detail} path="/blog/post/:id"/>
          <Route component={About} path="/about"/>
        </Switch>
      </Router>
    );
  }
}

export default App;
