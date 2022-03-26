import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Account } from './components/Account.js';
import { Recipe } from './components/RecipePage/RecipePage';
import { Navbar } from './components/Navbar';
import RecipeGrid from './components/RecipeGrid';
import { AddRecipe } from './components/AddRecipe';

// ========================================

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/account" component={Account}></Route>
                    <Route
                        exact
                        path="/recipeGrid"
                        component={RecipeGrid}
                    ></Route>
                    <Switch>
                        <Route
                            exact
                            path="/recipe/new"
                            component={AddRecipe}
                        ></Route>
                        <Route
                            exact
                            path="/recipe/:id"
                            component={Recipe}
                        ></Route>
                    </Switch>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
