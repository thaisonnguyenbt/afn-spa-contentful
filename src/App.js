import React from 'react';
import logo from './logo.svg';
import Home from "./pages/Home"
import Recipes from "./pages/Recipes"
import RecipeDetail from "./pages/RecipeDetail"
import Error from "./pages/Error";
import './layouts/base.css'
import './layouts/clientlib.css'
import './layouts/all.css'

import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/recipes/" component={Recipes} />
        <Route exact path="/recipes/:slug" component={RecipeDetail} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

