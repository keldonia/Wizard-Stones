var React = require('react');
var PropTypes = React.PropTypes;

var EmptyRows = React.createClass({

  render: function() {
    return (
      <ul>
        <ul className="inner">
          <li><div className="empty group"></div></li>
          <li><div className="empty group"></div></li>
          <li><div className="empty group"></div></li>
          <li><div className="empty group"></div></li>
        </ul>
        <ul className="inner">
          <li><div className="empty group"></div></li>
          <li><div className="empty group"></div></li>
          <li><div className="empty group"></div></li>
          <li><div className="empty group"></div></li>
        </ul>
        <ul className="inner">
          <li><div className="empty group"></div></li>
          <li><div className="empty group"></div></li>
          <li><div className="empty group"></div></li>
          <li><div className="empty group"></div></li>
        </ul>
        <ul className="inner">
          <li><div className="empty group"></div></li>
          <li><div className="empty group"></div></li>
          <li><div className="empty group"></div></li>
          <li><div className="empty group"></div></li>
        </ul>
        <div className="group"></div>
      </ul>
    );
  }

});

module.exports = EmptyRows;
