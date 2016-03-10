var React = require('react');
var PropTypes = React.PropTypes;

var Explanation = React.createClass({

  render: function() {
    return (
      <article className="rules-explanation">
        <b>How to play:</b> Use the arrow keys to move mana stones.  When two mana stones of the same value would occupy the same space they merge!
      </article>
    );
  }

});

module.exports = Explanation;
