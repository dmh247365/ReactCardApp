import React from "react";

// need to put in:-
//1 - header
//2 - image box
//3 - a person box (PAO component)
//4 - a action box (PAO component)
//5 - a object box (PAO component)
//6 - stop button (component)
// 7 - next button (component)

const LearnPage = () => (
  <div>
    <div>
      <div className="content-container">
        <h1>This is the learning page component</h1>
      </div>
      <div className="paoBox paoBox--red">Person</div>
      <div className="paoBox paoBox--amber">Action</div>
      <div className="paoBox paoBox--green">Object</div>
      <button className="button">Quit</button>
      <button className="button">Reveal</button>
    </div>
  </div>
);

export default LearnPage;
