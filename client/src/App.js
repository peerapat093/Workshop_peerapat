import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "../src/containers/Home";
import About from "./containers/About";
import Order from "../src/containers/order/order";
import Product from "../src/containers/product/product";
import NotFoun from "../src/containers/error/NotFoun";


class App extends Component {




  renderRouter() {
    return (

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/orders" component={Order} />
        <Route exact path="/products" component={Product} />
        <Route exact path="*" component={NotFoun} />
      </Switch>


    )
  }
  render() {
    return (
      <BrowserRouter>{this.renderRouter()}</BrowserRouter>
    );
  }
}

export default App;
