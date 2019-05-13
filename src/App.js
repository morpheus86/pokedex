import React from "react";
import "./App.css";
import Navigation from "./components/navbar/Navigation";
import Pokedex from "./components/pokemon/Pokedex";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PokeSummary from "./components/pokeDetail/PokeSummary";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Pokedex} />
          <Route path="/pokemon/:id" component={PokeSummary} />
          <Route path="/pokemon/:name" component={PokeSummary} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
