import { combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";
import pokedexReducer from "./pokedexReducer";
import pokemonImgReducer from "./pokemonImgReducer";
import fetchDescriptionReducer from "./fetchDescriptionReducer";

const rootReducer = combineReducers({
  pokedexData: pokedexReducer,
  imgLoading: pokemonImgReducer,
  description: fetchDescriptionReducer
});

export const middleware = applyMiddleware(logger, thunkMiddleware);

export default rootReducer;
