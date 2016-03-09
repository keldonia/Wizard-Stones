var Game = require('../lib/game');
var React = require('react');

window.Game = new Game();

var GameHolder = React.createClass({

  render: function() {
    return (
      <div />
    );
  }

});

module.exports = GameHolder;
