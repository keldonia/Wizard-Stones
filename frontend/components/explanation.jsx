var React = require('react');
var PropTypes = React.PropTypes;

var Explanation = React.createClass({

  render: function() {
    return (
      <article className="rules-explanation">
        <b>How to play:</b> use the arrow keys to move tiles.  When two tiles touch they merge!
      </article>
    );
  }

});

module.exports = Explanation;
