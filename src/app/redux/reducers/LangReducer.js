const initialState = { LangReducer: "fr" };

export default LangReducer = (state = initialState, action) => {
  let nextState;

  switch (action.type) {
    case "SET_LANG":
      nextState = { ...state, LangReducer: "en-MG" };
      return nextState;

    default:
      return state;
  }
};
