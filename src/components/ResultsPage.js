import React from "react";

// need to put in:-
//1 - header
//2 - results box (correct / out of)
//3 - new game button (component)
//4 - quit button (component)

const ResultsPage = props => {
  console.log(props.location.state);
  return (
    <div>
      <div>This is the Results page component</div>
      <div>correct is {props.location.state.cardCorrectCount}</div>
      <div>out of {props.location.state.cardCount}</div>
    </div>
  );
};

export default ResultsPage;
