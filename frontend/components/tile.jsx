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
    tile = this.props.tile

    return (
      <li key={tile}>
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
