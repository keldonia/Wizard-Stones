var React = require('react');
var EmptyRows = require('./empty_rows');
var ValueConstants = require('../constants/value_english');

var GameWidow = React.createClass({
  getInitialState: function () {
    return { board: undefined };
  },

  componentWillReceiveProps: function (newProps) {
    this.setState({ board: newProps.board });
  },

  getRows: function () {
    var board = this.props.board
    var that = this;

    if (board) {
      var rowComponents = board.map ( function (row, idx) {
        var tiles = that.getTiles(row);
        return(
          <ul key={idx} className="inner">
            {tiles}
          </ul>
        )
      });
      return (
        <ul>
          {rowComponents}
          <div className="group"></div>
        </ul>
      ) ;
    } else {
      return <EmptyRows />
    }
  },

  getTiles: function (row) {
    return row.map( function(tile, idx) {
      if (tile === 0) {
        return <li key={idx}><div className="empty group"></div></li>
      } else {
        return <li key={idx}><div className="occupied" id={ValueConstants[tile.value]}><div className="power-holder">{tile.value}</div></div></li>
      }
    })
  },

  render: function() {
    var rows = this.getRows();

    return (
      <section className="game-viewport">
        {rows}
      </section>
    );
  }

});

module.exports = GameWidow;
