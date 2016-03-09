var React = require('react');
var PropTypes = React.PropTypes;

var EmptyRows = React.createClass({

  render: function() {
    return (
      <ul>
        <ul className="inner">
          <li className="empty group"></li>
          <li className="empty group"></li>
          <li className="empty group"></li>
          <li className="empty group"></li>
        </ul>
        <ul className="inner">
          <li className="empty group"></li>
          <li className="empty group"></li>
          <li className="empty group"></li>
          <li className="empty group"></li>
        </ul>
        <ul className="inner">
          <li className="empty group"></li>
          <li className="empty group"></li>
          <li className="empty group"></li>
          <li className="empty group"></li>
        </ul>
        <ul className="inner">
          <li className="empty group"></li>
          <li className="empty group"></li>
          <li className="empty group"></li>
          <li className="empty group"></li>
        </ul>
      </ul>
    );
  }

});

module.exports = EmptyRows;
