import { createStore, combineReducers } from "redux";
import countersReducer from "../reducers/counters";
import cardsReducer from "../reducers/cards";

// Store creation
export default () => {
  const store = createStore(
    combineReducers({
      cards: cardsReducer,
      counters: countersReducer
    })
  );
  return store;
};
