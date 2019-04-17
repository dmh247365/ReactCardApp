import React from "react";
import { Link } from "react-router-dom";

// need to put in:-
//1 - header
//2 - results box (correct / out of)
//3 - new game button (component)
//4 - quit button (component)

const ResultsPage = props => {
  console.log(props.location.state);
  return (
    <div className="content-container">
      <div className="results-box">
        <div className="results-layout">
          <div className="results-box__heading">Memorize</div>
          <img src="./images/brain.png" alt="brian image" />
          <div className="results-box__title">Results</div>
          <div> Cards completed {props.location.state.cardCount + 1}</div>
          <div>
            Number of correct cards {props.location.state.cardCorrectCount}
          </div>
          <div className="button-spacing">
            <Link to="/">
              <button className="button">Quit</button>
            </Link>
            <Link to="/learn">
              <button className="button">Start</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
