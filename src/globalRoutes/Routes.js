import Pokedex from "../components/pokemon/Pokedex";
import PokeSummary from "../components/pokeDetail/PokeSummary";
import App from "../App";
import NotFoundPage from "../server/NotFoundPage";

const Routes = [
  {
    component: App,
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
      },
      {
        path: "/pokemon/notfound",
        component: NotFoundPage
      }
    ]
  }
];

export default Routes;
