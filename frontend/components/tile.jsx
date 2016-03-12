var React = require('react');
var ValueConstants = require('../constants/value_english');

var Tile = React.createClass({
  getInitialState: function () {
    return { tile: undefined };
  },

  componentWillReceiveProps: function (newProps) {
    this.setState({ tile: newProps.tile });
  },

  render: function() {
    var tile = this.props.tile

    return (
      <li key={this.props.key}>
        <div className="occupied" id={ValueConstants[tile.value]}>
          <div className="power-holder">
            {tile.value}
          </div>
        </div>
      </li>
    );
  }

});

module.exports = Tile;
