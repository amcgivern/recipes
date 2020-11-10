import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';


function Navbar(props){
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="nav-link">Recipe Website</Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
            </form>
            <ul class="navbar-nav mr-auto">
            <li><Link to="/account" className="nav-link">My Account</Link></li>
            <li><Link to="/recipe" className="nav-link">Recipe</Link></li>
            </ul>
          </div>
        </nav>
    )
}

export default Navbar;