import axios from "axios";
import Pokedex from "pokedex-promise-v2";

const P = new Pokedex();
export const fetchPokedex = () => {
  return async dispatch => {
    try {
      // const url = `https://pokeapi.co/api/v2`;
      // const res = await axios.get(`${url}`);
      // const response = res.data;
      const getPokemon = await P.getPokemonsList();
      dispatch({ type: "FETCH_POKEDEX", response: getPokemon });
    } catch (error) {
      dispatch({ type: "FETCH_POKEDEX_ERROR", error });
    }
  };
};

export const fetchHabitat = id => {
  return async dispatch => {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon-habitat/${id}`;
      const res = await axios.get(url);
      const response = res.data;
      // const response = await P.getPokemonHabitatsList();
      console.log(response);
      dispatch({ type: "FETCH_HABITAT", habitat: response.name });
    } catch (error) {
      dispatch({ type: "FETCH_HABITAT_ERROR", error });
    }
  };
};

export const fetchByName = name => {
  return async dispatch => {
    try {
      const pokemon = await P.getPokemonByName(name);
      console.log(pokemon);
      dispatch({ type: "FETCH_BY_NAME", pokemon });
    } catch (error) {
      dispatch({ type: "FETCH_BY_NAME_ERROR", error });
    }
  };
};
