import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import WelcomePage from "../components/WelcomePage";
import LearnPage from "../components/LearnPage";
import NotFoundPage from "../components/NotFoundPage";
import ResultsPage from "../components/ResultsPage";
import RevealPage from "../components/RevealPage";
import Header from "../components/Header";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={WelcomePage} />
        <Route path="/learn" component={LearnPage} />
        <Route path="/reveal" component={RevealPage} />
        <Route path="/results" component={ResultsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
