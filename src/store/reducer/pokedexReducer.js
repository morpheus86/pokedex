//dummy data

const iniState = {
  isFetching: false,
  pokemon: [],
  habitat: [],
  poke: [],
  species: "",
  getPoke: false
};

const pokedexReducer = (state = iniState, action) => {
  switch (action.type) {
    case "FETCH_POKEDEX":
      return {
        ...state,
        isFetching: true,
        pokemon: action.response
      };
    case "FETCH_POKEDEX_ERROR":
      console.log("FETCHING POKEMON ERROR");
      return state;
    case "FETCH_HABITAT":
      return {
        ...state,
        habitat: action.habitat
      };
    case "FETCH_HABITAT_ERROR":
      console.log("FETCH HABITAT ERRORS");
      return state;
    case "FETCH_BY_NAME":
      return {
        ...state,
        poke: action.pokemon,
        getPoke: true
      };
    case "FETCH_BY_NAME_ERROR":
      console.log("FETCH_BY_NAME_ERROR");
      return state;
    case "FETCH_SPECIES_LIST":
      return {
        ...state,
        isFetching: true,
        species: action.speciesList
      };

    default:
      return state;
  }
};

export default pokedexReducer;
