const initState = {
  description: {},
  isLoaded: false
};

const fetchDescriptionReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_DESCRIPTION":
      return {
        ...state,
        description: action.description,
        isLoaded: true
      };

    default:
      return state;
  }
};
export default fetchDescriptionReducer;
