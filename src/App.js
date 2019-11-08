import React, { Component } from 'react';
import './App.css';

import {Switch, Route, Redirect, Link } from 'react-router-dom';
import Products from './components/products';
import CreateProduct from "./components/createProduct"
import 'bootstrap/dist/css/bootstrap.min.css';
import EditProduct from './components/editProduct';
class App extends Component {
  
  render(){
    return (
      
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand"> Product CRUD </Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to='/products/new' className="nav-link">Create product</Link>
                </li>
              </ul>
            </div>
          </nav> <br/>
        <Switch>  
  
            <Route path="/product/edit/:id" exact component={EditProduct}></Route>
            <Route path="/products/new" exact component={CreateProduct}></Route> 
            <Route  path="/products" exact component={Products}></Route>
            <Redirect from="/" to="/products" exact></Redirect>
          </Switch>  
      </React.Fragment>
    );
  }
}

export default App;
