import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { incrementCardCount } from "./actions/count";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();
console.log(store.getState());

store.dispatch(incrementCardCount());

console.log(store.getState());

// need to run some expenses functions see 11:42 of 99 Organizing redux

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
