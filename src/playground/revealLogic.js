import React from "react";
import ReactDOM from "react-dom";

console.log("in revel logic page");

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.state = {
      visibility: false
    };
  }

  handleAddOne() {
    console.log("handleAddOne");
  }

  render() {
    return (
      <div>
        <h1>Count: </h1>
        <button onClick={this.handleAddOne} className="button">
          Reveal
        </button>
        <p>no reveal</p>
        <button>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("app"));
