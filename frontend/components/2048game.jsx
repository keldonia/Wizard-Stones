var React = require('react');
var Header = require('./header');
var GameHolder = require('./game_holder');
var Footer = require('./footer');

var GameSplash = React.createClass({

  render: function() {
    return (
      <div>
        <Header />
        <GameHolder />
        <Footer />
      </div>
    );
  }

});

module.exports = GameSplash;
