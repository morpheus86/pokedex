import Pokedex from "../components/pokemon/Pokedex";
import PokeSummary from "../components/pokeDetail/PokeSummary";

export const globalRoutes = [
  {
    component: Pokedex,
    routes: [
      {
        path: "/",
        exact: true,
        component: Pokedex
      },
      {
        path: "/pokemon/:id",
        component: PokeSummary
      },
      {
        path: "/pokemon/:name",
        component: PokeSummary
      }
    ]
  }
];
