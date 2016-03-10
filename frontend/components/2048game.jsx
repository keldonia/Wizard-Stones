var React = require('react');
var Header = require('./header');
var GameHolder = require('./game_holder');

var GameSplash = React.createClass({

  render: function() {
    return (
      <div>
        <Header />
        <GameHolder />
      </div>
    );
  }

});

module.exports = GameSplash;
