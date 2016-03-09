var Game = require('../lib/game');
var React = require('react');
var KeyMap = require('../constants/key_mapping');
var ScoreActions = require('../actions/score_actions');
var GameWindow = require('./game_window');



var GameHolder = React.createClass({
  getInitialState: function () {
    this.game = new Game();
    return ({
      board: this.game.grid.grid,
      won: false,
      lost: false
    });
  },

  componentDidMount: function () {
    document.addEventListener("keydown", this.move);
    this.setState({ board: this.game.grid.grid });
  },

  componentWillUnmount: function () {
    document.removeEventListener("keydown", this.move)
  },

  move: function (e) {
    e.preventDefault();
    var keyCode = KeyMap[e.keyCode];
    if (keyCode) {
      this.game.move(keyCode, this.upDateDisplay );
    }
  },

  upDateDisplay: function (gameObj) {
    ScoreActions.updateScore(gameObj.score);
    this.setState({
      board: gameObj.board,
      won: gameObj.won,
      lost: gameObj.lost
    });
  },

  resetGame: function (e) {
    e.preventDefault();
    this.game = new Game();
    this.setState({
      board: this.game.grid.grid,
      won: false,
      lost: false
     });
    ScoreActions.resetScore();
  },

  render: function() {
    var board = this.state.board;


    return (
      <section className="game-holder">
        <p className="invite">Join the numbers and get to the <b>2048 tile!</b></p>
        <div onClick={this.resetGame} className="reset-game">New Game</div>
        <GameWindow board={board} />
      </section>
    );
  }

});

module.exports = GameHolder;
