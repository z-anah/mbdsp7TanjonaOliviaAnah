const initialState = { counter: 0 };

export default counter = (state = initialState, action) => {
  let nextState;

  if (typeof state === "undefined") {
    return 0;
  }

  switch (action.type) {
    case "INCREMENT":
      nextState = { ...state, counter: state.counter + 1 };
      return nextState;

    case "DECREMENT":
      nextState = { ...state, counter: state.counter - 1 };
      return nextState;

    default:
      return state;
  }
};
