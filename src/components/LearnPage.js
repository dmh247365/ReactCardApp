import React from "react";

class LearnPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleReveal = this.handleToggleReveal.bind(this);
    this.state = {
      visibilityReveal: true,
      visibilityCorrect: false,
      person: "Steve Davies",
      action: "cueing",
      object: "12 red snooker balls"
    };
  }

  handleToggleReveal() {
    this.setState(prevState => {
      return {
        visibilityReveal: !prevState.visibilityReveal
      };
    });
  }

  render() {
    return (
      <div>
        <div className="content-container">
          <div>
            <img src="./images/cards/KH.svg" alt="playing cards" />
          </div>
          <div className="paoBox">
            <div className="paoBox__title">
              {this.state.visibilityReveal ? "Person" : `${this.state.person}`}
            </div>
          </div>
          <div className="paoBox">
            <div className="paoBox__title">
              {this.state.visibilityReveal ? "Action" : `${this.state.action}`}
            </div>
          </div>
          <div className="paoBox">
            <div className="paoBox__title">
              {this.state.visibilityReveal ? "Object" : `${this.state.object}`}
            </div>
          </div>
          <div className="button-spacing">
            <button className="button">Quit</button>
            <button onClick={this.handleToggleReveal} className="button">
              {this.state.visibilityReveal ? "Reveal" : "Correct"}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default LearnPage;
