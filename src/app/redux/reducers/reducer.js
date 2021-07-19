const initialState = { counter: 0, dataUser: {} };

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

    case "SET_USER":
      return { ...state, dataUser: action.data };

    default:
      return state;
  }
};
