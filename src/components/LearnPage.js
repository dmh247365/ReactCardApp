import React from "react";
import { connect } from "react-redux";

class LearnPage extends React.Component {
  constructor(props) {
    super(props);
    this.toggleBtnQuitWrong = this.toggleBtnQuitWrong.bind(this);
    this.toggleBtnRevealCorrect = this.toggleBtnRevealCorrect.bind(this);
    console.log("props", props);

    this.state = {
      revealPAO: false,
      btnQuitReveal: true,
      cardCount: 0,
      cardCorrectCount: 0
    };
  }

  toggleBtnRevealCorrect() {
    this.setState(prevState => {
      if (this.state.btnQuitReveal == true) {
        return {
          revealPAO: true,
          btnQuitReveal: false
        };
      } else if (this.state.cardCount < 12) {
        return {
          cardCorrectCount: prevState.cardCorrectCount + 1,
          cardCount: prevState.cardCount + 1,
          revealPAO: false,
          btnQuitReveal: true
        };
      } else {
        return this.props.history.push({
          pathname: "/results",
          state: this.state
        });
      }
    });
  }

  toggleBtnQuitWrong() {
    this.setState(prevState => {
      if (this.state.btnQuitReveal == true) {
        return this.props.history.push({
          pathname: "/results",
          state: this.state
        });
        {
          console.log(props);
        }
      } else {
        return {
          cardCount: prevState.cardCount + 1,
          btnQuitReveal: true,
          revealPAO: false
        };
      }
    });
  }

  render() {
    console.log(this.props.cards);
    console.log(this.state);
    console.log(this.state.visibilityReveal);
    console.log(this.state.cardCount);
    console.log(this.props.cards[0].ImageURL);
    return (
      <div>
        <div className="content-container">
          <div>
            <img
              src={
                "./images/cards/" +
                `${this.props.cards[this.state.cardCount].ImageURL}`
              }
              alt="playing cards"
            />
          </div>
          <div className="paoBox">
            <div className="paoBox__title">
              {this.state.revealPAO
                ? `${this.props.cards[this.state.cardCount].Person}`
                : "Person"}
            </div>
          </div>
          <div className="paoBox">
            <div className="paoBox__title">
              {this.state.revealPAO
                ? `${this.props.cards[this.state.cardCount].Action}`
                : "Action"}
            </div>
          </div>
          <div className="paoBox">
            <div className="paoBox__title">
              {this.state.revealPAO
                ? `${this.props.cards[this.state.cardCount].Object}`
                : "Object"}
            </div>
          </div>
          <div className="button-spacing">
            <button onClick={this.toggleBtnQuitWrong} className="button">
              {this.state.revealPAO ? "Wrong" : "Quit"}
            </button>
            <button onClick={this.toggleBtnRevealCorrect} className="button">
              {this.state.revealPAO ? "Correct" : "Reveal"}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cards: state.cards
  };
};

export default connect(mapStateToProps)(LearnPage);
