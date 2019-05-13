import axios from "axios";
import Pokedex from "pokedex-promise-v2";

const P = new Pokedex();
export const fetchPokeImage = id => {
  return async dispatch => {
    try {
      const url = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${id}.png?raw=true`;
      dispatch({ type: "FETCH_IMG", img: url, pokemonIdx: id });
    } catch (error) {
      dispatch({ type: "FETCH_IMG_ERROR", error });
    }
  };
};

export const fetchEvolutionChain = id => {
  return async dispatch => {
    try {
      const url = `https://pokeapi.co/api/v2/evolution-chain/${id}/`;
      const res = await axios.get(url);
      const response = res.data.chain.species;
      console.log(response);
      dispatch({ type: "FETCH_EVO_CHAIN", evo: response, index: id });
    } catch (error) {
      dispatch({ type: "FETCH_EVO_CHAIN_ERROR", error });
    }
  };
};

export const fetchEvoImg = id => {
  return async dispatch => {
    try {
      const url = `https://pokeapi.co/api/v2/evolution-chain/${id}/`;
      console.log(id);
      const res = await axios.get(url);
      const response = res.data;
      const evolvingSpecies =
        response.chain.evolves_to[0].evolves_to[0].species.url;
      const pokemonIndex = evolvingSpecies.split("/")[
        evolvingSpecies.split("/").length - 2
      ];
      console.log(res.data);
      const url1 = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

      dispatch({ type: "FETCH_EVO_IMG", img2: url1 });
    } catch (error) {
      console.log(error);
    }
  };
};
