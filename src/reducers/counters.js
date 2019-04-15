// COUNTERS DEFAULT STATE
const counterReducerDefaultState = {
  cardCount: 0,
  displayPAO: false
};

// COUNTERS_REDUCER
const countersReducer = (state = counterReducerDefaultState, action) => {
  switch (action.type) {
    case "INCREMENT_CARD_COUNT":
      return {
        cardCount: state.cardCount + 1,
        displayPAO: true
      };
    default:
      return state;
  }
};

export default countersReducer;
