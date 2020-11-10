import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar.js';
import Home from './Components/Home.js';
import Account from './Components/Account.js';
import Recipe from './Components/Recipe';

  // ========================================
  
  function App()  {
    return (
      <div className="App">
          <BrowserRouter>
            <Navbar/>
              <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/account" component={Account}></Route>
                <Route exact path="/recipe" component={Recipe}></Route>
              </Switch>
          </BrowserRouter>
      </div>
    );
  }

  ReactDOM.render (
    <App />,
    document.getElementById('root')
  );
  
