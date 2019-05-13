import axios from "axios";

export const fetchPokedex = () => {
  return async dispatch => {
    try {
      const url = "http://localhost:8000";
      const res = await axios.get(`${url}`);
      const response = res.data;
      dispatch({ type: "FETCH_POKEDEX", response });
    } catch (error) {
      dispatch({ type: "FETCH_POKEDEX_ERROR", error });
    }
  };
};

export const fetchHabitat = id => {
  return async dispatch => {
    try {
      const url = `http://localhost:8000/${id}/habitat`;
      const res = await axios.get(url);
      const response = res.data;
      dispatch({ type: "FETCH_HABITAT", habitat: response });
    } catch (error) {
      dispatch({ type: "FETCH_HABITAT_ERROR", error });
    }
  };
};

export const fetchByName = name => {
  return async dispatch => {
    try {
      const url = `http://localhost:8000/${name}`;
      const res = await axios.get(url);
      const response = res.data;
      dispatch({ type: "FETCH_BY_NAME", pokemon: response });
    } catch (error) {
      dispatch({ type: "FETCH_BY_NAME_ERROR", error });
    }
  };
};
