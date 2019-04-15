import React from "react";

// need to:-
// 1 - put in a brain image
// 2 - put in a start button
// 3 - put in description text

const WelcomePage = () => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Memorize</h1>
      <p>The ultimate card learning app!</p>
      <button className="button button--start">Start</button>
    </div>
  </div>
);

export default WelcomePage;
