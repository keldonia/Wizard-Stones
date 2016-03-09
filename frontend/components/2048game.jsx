var React = require('react');
var Header = require('./header');
var Explanation = require('./explanation');
var GameHolder = require('./game_holder');

var GameSplash = React.createClass({

  render: function() {
    return (
      <div>
        <Header />
        <GameHolder />
        <Explanation />
      </div>
    );
  }

});

module.exports = GameSplash;
