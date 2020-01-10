import React from 'react';
import Home from "./pages/Home"
import Recipes from "./pages/Recipes"
import RecipeDetailPage from "./pages/RecipeDetailPage"
import Error from "./pages/Error";
import './layouts/base.css'
import './layouts/clientlib.css'
import './layouts/all.css'

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/recipes/" component={Recipes} />
      <Route exact path="/recipes/:slug" component={RecipeDetailPage} />
      <Route component={Error} />
    </Switch>
  );
}

export default App;

