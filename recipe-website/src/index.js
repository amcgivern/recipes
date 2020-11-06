import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar.js';
import Home from './Components/Home.js';
import Account from './Components/Account.js';

  // ========================================
  
  function App()  {
    return (
      <div className="App">
          <BrowserRouter>
            <Navbar/>
              <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/account" component={Account}></Route>
              </Switch>
          </BrowserRouter>
      </div>
    );
  }

  ReactDOM.render (
    <App />,
    document.getElementById('root')
  );
  
