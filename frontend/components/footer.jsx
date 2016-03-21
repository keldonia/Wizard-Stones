var React = require('react');
var PropTypes = React.PropTypes;

var Footer = React.createClass({

  render: function() {
    return (
      <div>
        <p>A game by <a href="http://www.brianjosephlambert.com">Brian Lambert</a>.</p>
        <p>See the <a href="https://github.com/keldonia/Wizard-Stones">github repo</a></p>
      </div>
    );
  }

});

module.exports = Footer;
