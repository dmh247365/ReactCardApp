import React from "react";
import { Link } from "react-router-dom";

const WelcomePage = () => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Memorize</h1>
      <p>The ultimate card learning app!</p>
      <Link to="/learn">
        <button className="button button--start">Start</button>
      </Link>
    </div>
  </div>
);

export default WelcomePage;
