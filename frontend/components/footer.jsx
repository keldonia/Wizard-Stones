var React = require('react');
var PropTypes = React.PropTypes;

var Footer = React.createClass({

  render: function() {
    return (
      <div className="footer">
        <p><a href="http://www.brianjosephlambert.com">A game by Brian Lambert</a></p>
        <p><a href="https://github.com/keldonia/Wizard-Stones">See the github repo</a></p>
      </div>
    );
  }

});

module.exports = Footer;
