import axios from "axios";

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

export const fetchEvolutionChain = (name, id) => {
  return async dispatch => {
    try {
      const url = `https://pokeapi.co/api/v2/evolution-chain/${id}/`;
      const res = await axios.get(url);
      const response = res.data;
      dispatch({ type: "FETCH_EVO_CHAIN", evo: response });
    } catch (error) {
      dispatch({ type: "FETCH_EVO_CHAIN_ERROR", error });
    }
  };
};

export const fetchEvoImg = (id, name) => {
  return async dispatch => {
    try {
      const url = `https://pokeapi.co/api/v2/evolution-chain/${id}/`;
      const res = await axios.get(url);
      const response = res.data;

      const evolvingSpecies =
        response.chain.evolves_to[0].evolves_to[0].species.url;
      const pokemonIndex = evolvingSpecies.split("/")[
        evolvingSpecies.split("/").length - 2
      ];
      const url1 = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

      dispatch({ type: "FETCH_EVO_IMG", img2: url1 });
    } catch (error) {
      console.log(error);
    }
  };
};
