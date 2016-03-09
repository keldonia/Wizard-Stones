var Game = require('../lib/game');
var React = require('react');

window.Game = new Game();

var GameHolder = React.createClass({

  newGame: function () {

  },

  render: function() {
    return (
      <section className="game-holder">
        <p className="invite">Join the numbers and get to the <b>2048 tile!</b></p>
        <div className="new=Game">New Game</div>
      </section>
    );
  }

});

module.exports = GameHolder;
