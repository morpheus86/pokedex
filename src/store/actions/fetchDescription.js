import axios from "axios";

const fetchDescription = id => {
  return async dispatch => {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
      const res = await axios.get(url);
      const response = res.data;
      dispatch({ type: "FETCH_DESCRIPTION", description: response });
    } catch (error) {
      dispatch({ type: "FETCH_DESCRIPTION_ERROR", error });
    }
  };
};

export default fetchDescription;
