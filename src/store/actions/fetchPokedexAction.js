import axios from "axios";
import Pokedex from "pokedex-promise-v2";

const P = new Pokedex();
export const fetchPokedex = () => {
  return async dispatch => {
    try {
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
      dispatch({ type: "FETCH_BY_NAME", pokemon });
    } catch (error) {
      dispatch({ type: "FETCH_BY_NAME_ERROR", error });
    }
  };
};

export const fetchSpecies = id => {
  return async dispatch => {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon-species/${id}/`;
      // const speciesList = await P.getPokemonSpeciesList();
      const species = await axios.get(url);
      const speciesList = species.data;
      dispatch({ type: "FETCH_SPECIES_LIST", speciesList });
    } catch (error) {
      dispatch({ type: "SPECIES_LIST_ERROR", error });
    }
  };
};
