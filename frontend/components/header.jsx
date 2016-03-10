var React = require('react');
var ScoreStore = require('../stores/score');
var ScoreActions = require('../actions/score_actions');

window.ScoreStore = ScoreStore;

var Header = React.createClass({

  getInitialState: function () {
    return ({
      score: "0",
      topScore: "0"
    });
  },

  componentDidMount: function () {
    this.scoreListener = ScoreStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.scoreListener.remove();
  },

  _onChange: function () {
    this.setState({
      score: ScoreStore.score(),
      topScore: ScoreStore.topScore()
    });
  },

  render: function() {
    var score = this.state.score;
    var topScore = this.state.topScore;

    return (
      <header className="game-header">
        <h1 className="game-name">Wizard Stones</h1>
        <section className="scores-holder">
          <div className="current-score">
            <h3 className="score-type">Current Score:</h3>
            <h3 className="score">{score}</h3>
          </div>
          <div className="player-top-score">
            <h3 className="score-type">Your Top Score:</h3>
            <h3 className="score">{topScore}</h3>
          </div>
          <div className="group"></div>
        </section>
      </header>
    );
  }

});

module.exports = Header;
