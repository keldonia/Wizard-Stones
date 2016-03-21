var Game = require('../lib/game');
var React = require('react');
var KeyMap = require('../constants/key_mapping');
var ScoreActions = require('../actions/score_actions');
var GameWindow = require('./game_window');
var Explanation = require('./explanation');
var Modal = require('react-modal');
var Footer = require('./footer');

var GameHolder = React.createClass({
  getInitialState: function () {
    this.game = new Game();
    return ({
      board: this.game.grid.grid,
      won: false,
      lost: false
    });
  },

  componentWillMount() {
    Modal.setAppElement('body');
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

  wonGame: function () {
    return (
      <Modal
          isOpen={this.state.won}
          onRequestClose={this.closeModal}
          style={customStyles} >

          <h2>"You're a Wizard, Harry"</h2>
          <button onClick={this.resetGame}>Start a new game!</button>
          <button onClick={this.closeModal}>Continue your journey</button>

        </Modal>
    );
  },

  lostGame: function () {
    return (
      <Modal
          isOpen={this.state.lost}
          onRequestClose={this.closeModal}
          style={customStyles} >

          <h2>You need more training</h2>
          <button onClick={this.resetGame}>Start a new game!</button>

        </Modal>
    );
  },

  upDateDisplay: function (gameObj) {
    ScoreActions.updateScore(gameObj.score);
    this.setState({
      board: gameObj.board,
      won: gameObj.won,
      lost: gameObj.lost
    });
  },

  closeModal: function () {
    this.setState({
      won: false,
      lost: false
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
    var wonGame = this.wonGame();
    var lostGame = this.lostGame();

    return (
      <section className="game-holder">
        <div className="game-info">
          <p className="invite">Join the mana stones and build up to the <b>2048 mana stone!</b></p>
          <Explanation />
          <div className="group"></div>
          <div onClick={this.resetGame} className="reset-game">New Game</div>
        </div>
        <div className="window">
          {wonGame}
          {lostGame}
          <GameWindow board={board} />
        </div>
        <div className="group"></div>
        <Footer />
      </section>
    );
  }

});

module.exports = GameHolder;

const customStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(77, 77, 77, 0.75)'
  },
  content : {
    background                 : 'url(http://img06.deviantart.net/eeea/i/2013/006/9/a/typhoon_wizard_by_jsfantasy-d5qlr0p.png) repeat-none center center',
    border                     : 'none',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '80px',
    color                      : 'white',
    font                       : "'Eagle Lake', cursive"
  }
};
