const initState = {
  name: "",
  pokemonIdx: "",
  img: "",
  imageLoading: false,
  isLoaded: false,
  evoChainData: [],
  imgChain: ""
};

const pokemonImgReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_IMG":
      return {
        ...state,
        pokemonIdx: action.pokemonIdx,
        img: action.img,
        imageLoading: true
      };
    case "FETCH_IMG_ERROR":
      console.log("Fetching image error");
      return state;
    case "FETCH_EVO_CHAIN":
      return {
        ...state,
        pokemonIdx: action.index,
        isLoaded: true,
        imgChain: action.imgChain,
        evoChainData: [...state.evoChainData, action.response]
      };
    case "FETCH_EVO_CHAIN_ERROR":
      console.log("Fetching Error");
      return state;
    case "FETCH_EVO_IMG":
      return {
        ...state,
        imgChain: action.img2
      };
    case "FETCH_EVO_IMG_ERROR":
      console.log("FETCH_EVO_IMG_ERROR");
      return state;
    default:
      return state;
  }
};

export default pokemonImgReducer;
