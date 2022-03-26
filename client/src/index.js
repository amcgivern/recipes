
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Account } from './components/Account.js';
import { Recipe } from './components/RecipePage/RecipePage';
import { Navbar } from './components/Navbar';
import RecipeGrid from './components/RecipeGrid';


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
                <Route exact path="/recipeGrid" component={RecipeGrid}></Route>
                <Route exact path="/" component={RecipeGrid}></Route>
              </Switch>
          </BrowserRouter>
      </div>
    );
  }

  ReactDOM.render (
    <App />,
    document.getElementById('root')
  );
  
