import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "./App";
import RecipeDetails from "./components/RecipeDetails";

const Router = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/recipeDetails/:id" component={RecipeDetails} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default Router;
