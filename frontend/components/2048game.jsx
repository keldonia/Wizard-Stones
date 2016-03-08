var React = require('react');
var Header = require('./header');
var Explanation = require('./explanation');

var GameSplash = React.createClass({

  render: function() {
    return (
      <div>
        <Header />
        <Explanation />
      </div>
    );
  }

});

module.exports = GameSplash;
